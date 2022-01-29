const Transaction = require("../transaction/model");
const Voucher = require("../voucher/model");
const Player = require("../player/model");
const Article = require("../article/model");

module.exports = {
  index: async (req, res) => {
    try {
      const transaction = await Transaction.countDocuments();
      const voucher = await Voucher.countDocuments();
      const player = await Player.countDocuments();
      const article = await Article.countDocuments();
      res.render("admin/dashboard/view_dashboard", {
        name: req.session.user.name,
        title: "Dashboard",
        count: {
          transaction,
          player,
          voucher,
          article,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
