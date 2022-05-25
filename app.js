
const express = require("express");
let accounts = require("./accounts.js");
const app = express();
const port = 8000;

const accountsRoute = "/api/accounts";

app.get(accountsRoute, (req, res) => {
  res.json(accounts);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.use('/', function(req, res, next){
//     res.status(200).send("Status Working");
//    next();
// });

app.use(express.json());

//create
app.post('/', (req, res) => {
    const id=accounts.length+1;
    req.body.id=id;
    accounts.push(req.body)
    res.status(201).json(req.body);
  })

  //update
  app.put('/api/accounts/:accountId', (req, res) => {
const account = accounts.find(_account=>_account.id === +req.params.accountId);
if(account){
for(const key in req.body){
    account[key] = req.body[key];
}
res.json(account);
}else{
    res.status(404).json({message:"Account doesnt exist"});
}
  })  

  //delete
  app.delete('/api/accounts/:accountId', (req, res) => {
    const account = accounts.find(_account=>_account.id === +req.params.accountId);
    
    if(account){

account = accounts.filter(_account=> _account.id !== +req.params.accountId)    
    res.json(204).end(); //no content cuz not returnign anything
    }else{
        res.status(404).json({message:"Account doesnt exist"});
    }
      })  