const express = require("express");
const routes = require("./routes");
const db = require("./database");
const handleError = require("./middlewares/handleError");

const port = process.env.PORT || 3000;

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
