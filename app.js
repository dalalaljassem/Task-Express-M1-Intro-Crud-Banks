
const express = require("express");
const accountsRoute = require("./apis/accounts/accounts.routes");
const app = express();

//middleware
app.use(express.json());

//route
app.use("/api/accounts", accountsRoute);


app.get(accountsRoute, (req, res) => {
  res.json(accounts);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})