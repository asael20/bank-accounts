const bcrypt = require('bcrypt');

const UserModel = require('../models/user');
const AccountModel = require('../models/account');
const CardModel = require('../models/card');


const UserUC = {

    async register({ idNumber, name, surname, email, phone }) {

        const userDoc = new UserModel({ idNumber, name, surname, email, phone });

        let result = await userDoc.save()
            .then(doc => doc)
            .catch(err => err)


        return result;
    },

    async createAccount(owner, password, cardType) {

        let userValid = await UserModel.findOne({ idNumber: owner });

        if (!userValid)
            return { ok: false, reason: 'user invalid', data:null};

        let card = await CardModel.findOne({type: cardType}, {_id:true});

        if(!card)
            return { ok: false, reason: 'type of card invalid', data:null};

        let numAccounts = await AccountModel.countDocuments();

        let number = ++numAccounts;
        let salt = bcrypt.hashSync(password, 10);

        let accountDoc = new AccountModel({ owner: userValid._id, password: salt, number, card: card._id });
        let rsult = await accountDoc.save();

        return rsult;
    },


    async changeBalance(userId, numberAccount, password, value, action) {

        let result = null;
        let user = await UserModel.findOne({ idNumber: userId })

        if (!user)
            return { ok: false, reason: 'User invalid', data: null }

        let account = await AccountModel.findOne({ number: numberAccount, owner: user._id, status: 'A' });
        let data = JSON.parse(JSON.stringify(account))

        if (!account)
            return { ok: false, reason: 'This account migth not exist or is inactive', data:null };

        let correctPass = bcrypt.compareSync(password, account.password);
        
        if(!correctPass)
            return {ok: false, reason: 'Credentials not correct..', data: null}


        switch (action) {

            case 'add':
                account.balance += value;
                result = await account.save();
                break;

            case 'substract':
                let prevBalance = account.balance

                if (value > prevBalance)
                    return { ok: false, reason: 'this account does not have enoug money to substract the value desired', data: null };

                let nextBalance = prevBalance - value;
                account.balance = nextBalance;

                result = await account.save();
                break;

            default: 
                result = {ok:false, reason: 'you must indicate which action desire do over this account balance'}

        };

        return result;
    },


    async example() {
        let result = await AccountModel.find({ number: 2 }).populate('card')

        return result
    }


};


module.exports = UserUC;