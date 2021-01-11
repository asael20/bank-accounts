const userUC = require('./user.uc');

module.exports = mainUC();

function mainUC() {

    if(!(this instanceof mainUC))
        return new mainUC();

    this.user = userUC;
}