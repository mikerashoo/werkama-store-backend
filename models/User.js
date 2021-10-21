const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    status: {
        type: Boolean, 
        default: true
    },
    role: {
        type: String,
        enum: ["super_admin", "admin", "cashier"],
        required: true
    }
})


module.exports = User = mongoose.model("User", userSchema);