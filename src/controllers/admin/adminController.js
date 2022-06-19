
module.exports = {
    index: (req, res) => {
        res.render('admin/adminIndex', {
            titulo: "Admin",
            session: req.session
        });
    }
}