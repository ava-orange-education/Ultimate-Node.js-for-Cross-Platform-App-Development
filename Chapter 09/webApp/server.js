const express = require("express");
const cors = require("cors");
const app = express();
const Connection = require("./connection");

require("./src/routes/product-routes")(app);
require("./src/routes/user-routes")(app);

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.json({
    message: "Applying authentication in node.js application"
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  Connection();
  console.log("Running on port ", PORT);
});