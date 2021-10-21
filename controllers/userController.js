const userServices = require("../services/userService");

class UserController{
    static async apiGetAllUsers(req, res, next){
        try{
            const users = await userServices.getAll();
            if(!users){
                res.status(404).json("There are no users so far");
            }

            res.json(users);
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }

    static async apiCreateUser(req, res, next){
        try{
            const createUser = await userServices.create(req.body);
            res.json(createUser);
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }
}

module.exports = UserController;