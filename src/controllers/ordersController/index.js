
const User = require("../../models/User");
const Order = require("../../models/Order");


const getOrders = async (req, res, next)=>{
    try {
        const all = await Order.find({});
        const allOrdersData=[];
        for (const order of all) {
            const userId = order.customerId;
            const foundUser = await User.findById(userId);
            const { _doc } = order;
            allOrdersData.push({ ..._doc,  customer: foundUser })
        }
        res.json(allOrdersData);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getOrders
};
