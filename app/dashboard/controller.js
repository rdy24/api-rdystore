module.exports = {
  index: async (req, res) => {
    try {
      res.render("admin/dashboard/view_dashboard", {
        name: req.session.user.name,
        status: "active",
        title: "Youpay Admin | Dashboard",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
