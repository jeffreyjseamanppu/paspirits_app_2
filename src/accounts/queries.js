const getAccounts = "select * from accounts";
const getAccountsById = "select * from accounts where accountId = $1";
const addNewAccount = "insert into accounts(name,city,state,type) VALUES($1,$2,$3,$4)";
const updateAccount = "update accounts set name = $1, city = $2, state = $3, type = $4 where accountId = $5";

module.exports = {
    getAccounts,
    getAccountsById,
    addNewAccount,
    updateAccount,
};