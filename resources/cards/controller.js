const CardModel = require('../../models/card')



module.exports = {

    async register(req, res) {
        let result
        try {
            let { type, description, image } = req.body;
            let doc = new CardModel({ type, description, image })
            result = await doc.save()


        } catch (error) {
            result = error
        }

        res.json(result);
    },



}