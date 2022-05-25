
let accounts = require("../../accounts");

exports.fetchAccounts = (req, res) => {
  res.json(accounts);
};

exports.createAccount = (req, res) => {
  const id=accounts.length+1;
  req.body.id=id;
  accounts.push(req.body)
  res.status(201).json(req.body);
};

exports.updateAccount = (req, res) => {
  const account = accounts.find(_account=>_account.id === +req.params.accountId);
  if(account){
  for(const key in req.body){
      account[key] = req.body[key];
  }
  res.json(account);
  }else{
      res.status(404).json({message:"Account doesnt exist"});
  }
    }


exports.deleteAccount = (req, res) => {
  const account = accounts.find(_account=>_account.id === +req.params.accountId);
  
  if(account){

account = accounts.filter(_account=> _account.id !== +req.params.accountId)    
  res.json(204).end(); //no content cuz not returnign anything
  }else{
      res.status(404).json({message:"Account doesnt exist"});
  }
    }

