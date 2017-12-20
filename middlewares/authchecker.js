

module.exports = (req, res, next) => {
    if (allowed(req.originalUrl)) {
        console.log(req.user, req.method);
        next();
    } else {
        if (!req.user) {
            console.log(req.originalUrl, 'called', req.user);
            res.status(401);
            res.sendJSON({}, 'User session was timed out', 401);
        } else {
            //authorization implementation goes here
            return next();
        }
    }
};

function allowed(url) {
    switch (url) {
        case '/user/login':
            return true;
        default:
            return false;
    }
}
