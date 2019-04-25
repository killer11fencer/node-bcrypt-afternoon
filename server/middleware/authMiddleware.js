module.exports = {
    usersOnly: (req,res,next) => {
        if(!req.session.user) {
            res.status(401).send('Please Log In')
        }
        next();
    },
    adminsOnly: (req,res,next) => {
        let {isAdmin} = req.session.user
        if(!isAdmin) {
            res.status(403).send('GO HOME YOU NO ADMIN')
        }
        next();
    },
};