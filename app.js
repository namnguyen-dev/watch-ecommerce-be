require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();

// rest of packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// database
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// routes
app.get('/', (req, res) => {
  res.send(
    `<h1>Watch-e-commerce-API</h1><a href="/api/v1/products">product route</a>`
  );
});

app.get('/api/v1', (req, res) => {
  console.log(req.signedCookies);
  res.send(
    `<h1>Watch-e-commerce-API</h1><a href="/api/v1/products">product route</a>`
  );
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
