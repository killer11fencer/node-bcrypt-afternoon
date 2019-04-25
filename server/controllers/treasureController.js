module.exports = {
    dragonTreasure: async (req,res) => {
        let db = req.app.get('db')
        let result = await db.get_dragon_treasure(1)
        res.status(200).send(result)
    },
    getUserTreasure: async (req,res) => {
        let {id} = req.session.user
        let db = req.app.get('db')
        let result = await db.get_user_treasure(id)
        res.status(200).send(result)
    }
}