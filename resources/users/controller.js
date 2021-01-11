const uc = require('../../use_cases/index')

exports.getUsers = async function (req, res) {
    res.json( await uc.user.example())
}

exports.getOneUser = async function (req, res) {t

}

exports.register = async function (req, res) {
    let {name, surname, idNumber, email, phone} = req.body;
    let result = await uc.user.register({name, surname, idNumber, email, phone});
    
    res.json(result);
}

exports.createAccount = async function (req, res) {

    const result = await uc.user.createAccount(req.params.id, req.body.password, req.body.cardType);

    res.json(result);
}


exports.updateBalance = async function(req, res) {
    let {id, accountNumber} = req.params;
    let { action } = req.query;
    let { value, password } = req.body;


    let result = await uc.user.changeBalance(id, accountNumber, password, value,action);

    res.json(result);
}
