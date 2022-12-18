const router = require("express").Router();

const { verifyTokenMiddleware } = require("../middlewares/auth");
const {getUsers} = require("../controllers/userControllers");

router.get("/", verifyTokenMiddleware, getUsers);

module.exports = router;
