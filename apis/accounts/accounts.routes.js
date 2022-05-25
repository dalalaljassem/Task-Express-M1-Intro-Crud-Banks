const express = require('express');
const { fetchAccounts, createAccount , updateAccount , deleteAccount } = require("./accounts.controls");
const router = express.Router();

router.get("/", fetchAccounts);
router.post("/", createAccount);
router.put("/:accountId", updateAccount);
router.delete("/:accountId", deleteAccount);


module.exports = router;