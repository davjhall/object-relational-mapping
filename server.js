const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// import sequelize connection
// const { Sequelize } = require("sequelize");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || PORT, () => console.log('listening'));
});
