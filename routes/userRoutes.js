const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.apiGetAllUsers);
router.post("/", UserController.apiCreateUser);

module.exports = router;