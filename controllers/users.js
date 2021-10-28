const db = require('../models')

module.exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await db.User.findAll();
        res.send(allUsers)
    } catch (err) {
        console.error(err);
        res.send({
            error: "Something went wrong"
        })
    }
}


// Return User
module.exports.getUserById = async (req, res) => {
    try {
        const user = await db.User.findOne({ where: { id: req.params["id"] } })
        res.send(user);
    } catch (err) {
        console.log(err);
        res.stats(500).send({
            error: "Something went wrong"
        })
    }
}

module.exports.createUser = async (req, res) => {
    const {
        email,
        firstName,
        lastName,
    } = req.body

    try {
        const newUser = await db.User.create({
            email,
            firstName,
            lastName,
        });

        res.status(201).send(newUser);
    } catch (error) {
        console.error(error);
        res.send({
            error: "Something went wrong",
        });
    }
}

// Updated User
module.exports.updateUser = async (req, res) => {
    const {
        email,
        firstName,
        lastName,
    } = req.body

    try {
        const result = await db.User.update({
            email,firstName,lastName
        },{
            where:{
                id: req.params['id']
            }
        });
        console.log(result['0']);
        res.send({message:"great succes"});
    }catch(err){
        console.log(err);
        res.send({message:"naughty naughty"});
    }
}

// Nothing
module.exports.deleteUser = async (req, res) => {
    try {
        await db.User.destroy({
            where:{
                id: req.params['id']
            }
        });
        res.send({message:"great succes"});
    }catch(err){
        console.log(err);
        res.send({message:"naughty naughty"});
    }
}