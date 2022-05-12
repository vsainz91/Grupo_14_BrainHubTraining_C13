const cookieSession = (req, res, next) => {
    if(req.cookies.brainhubCookie){
        req.session.user = req.cookies.brainhubCookie;
        res.locals.user = req.session.user;
    }
    next()
}

module.exports = cookieSession;