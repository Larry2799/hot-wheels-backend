const User = require("../../models/User");
const Order = require("../../models/Order");

const getUsers = async (req, res, next)=>{
  try {
    const all = await User.find({});
   const usersData=[];
      for (const user of all) {
      const userOrders = await Order.find({customerId: user._id});
      const { _id, companyName, email, address, role } = user;
      usersData.push({ _id, companyName, email, address, role,  orders: userOrders })
    }
      console.log({usersData})
    res.json(usersData);
  } catch (error) {
    console.log(error);
  }
}

const getUser = async (req, res, next) => {
  const { userId } = req;
  try {
    const foundUser = await User.findById(userId);
    const userOrders = await Order.find({ customerId: userId });

    const { _id, companyName, email, address, role } = foundUser;

    res.json({ _id, companyName, email, address, role, orders: userOrders });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
  getUsers
};
