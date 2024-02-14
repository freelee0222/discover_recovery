const express = require('express');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 4000;

require("./config/db_connection");

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`)
});

module.exports = app;