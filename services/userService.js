const User = require("../models/User");

class userServices{

    static async getAll(){
        try{
            const allUsers = await User.find();
            return allUsers;
        }
        catch(error){
            console.log(`Could not fetch users ${error}`);
        }
    }

    static async create(data){
        try{
            const newUser = {
                first_name : data.first_name,
                last_name : data.last_name,
                password : data.password,
                email : data.email,
                phone_number : data.phone_number,
                address : data.address,
                role : data.role,
            }
            const response = await new User(newUser).save();
            return response;
        }
        catch(error){
            console.log(`Could not add new user ${error}`);
        }
    }
}

module.exports = userServices;