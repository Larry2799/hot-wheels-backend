const router = require("express").Router();

const { verifyTokenMiddleware } = require("../middlewares/auth");
const { getUser } = require("../controllers/userControllers/index");
const {getUsers} = require("../controllers/userControllers");

router.get("/", verifyTokenMiddleware, getUser);
router.get("/users", verifyTokenMiddleware, getUsers);

module.exports = router;
