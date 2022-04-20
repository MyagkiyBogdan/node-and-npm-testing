const express = require("express");

const app = express();

app.use("*", (req, res) => {
  console.log(`Was brouser request`);
});

const listener = app.listen(4444, () => {
  console.log(`Server started at ${listener.address().port}`);
  console.log(`http://localhost:4444/`);
});
