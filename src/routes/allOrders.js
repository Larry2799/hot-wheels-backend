
const router = require("express").Router();

const { verifyTokenMiddleware } = require("../middlewares/auth");
const {getOrders} = require("../controllers/ordersController");


router.get("/", verifyTokenMiddleware, getOrders);

module.exports = router;
