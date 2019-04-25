module.exports = {
    dragonTreasure: async (req,res) => {
        let db = req.app.get('db')
        let result = await db.get_dragon_treasure(1)
        res.status(200).send(result[0])
    }
}