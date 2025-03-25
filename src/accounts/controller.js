const pool = require('../../db');
const queries = require('./queries');

const getAccounts = (req, res) => {
    pool.query(queries.getAccounts,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//Controller: Filters on Account Id
//Author: Jeff Seaman
//Date Created: 2/11/25
//Description: Refer to ReadMe. in GitHub
const getAccountsById = (req, res) => {
    const accountid = parseInt(req.params.id);
    if(isNaN(accountid)) {
        return res.status(400).json({error: "Invalid value format"});
    }
    console.log("Received AccountId");
    pool.query(queries.getAccountsById, [accountid], (error, results)=> {
        if(error){
            console.error("Database Error", error);
            return res.status(500).json({error: "Acct Not Found"});
        }
        res.status(200).json(results.rows);
    });
}

//Post (Add new account information)
const addNewAccount = (req, res) => {
    const {name,city,state,type} = req.body;

    pool.query(queries.addNewAccount, [name,city,state,type], (error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
        res.status(201).send("Successfully added a new account"); 

    });
};

//Put (Modify existing account information)
    const updateAccount = (req, res) => {
    const accountid = parseInt(req.params.id);
    const {name,city,state,type} = req.body;

    pool.query(queries.updateAccount, [name,city,state,type,accountid], (error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
        res.status(201).send("Successfully modified a account"); 

    });
};

module.exports = {
    getAccounts,
    getAccountsById,
    addNewAccount,
    updateAccount,
};