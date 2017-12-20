/**
 * This middleware will add a validation layer between a request and a controller.
 * NOTE: Ther routes must be same as the routes in the controller file
 * @author Muhammad Zubair
 */

/**
 * Use a custome middleware to send validation errors
 */
module.exports.validationResult = (req, res, next) => {
    if (req.validationErrors()) {
        res.sendJSON({errors: req.validationErrors()}, 'Validation Errors');
    } else {
        next();
    }
};

module.exports.roles = (req, res, next) => {
//    switch (req.originalUrl) {
//        case '/user/login':
//        {
//            req.check('username').exists().isEmail();
//            req.check('password').exists();
//            break;
//        }
//    }
    next();
};

module.exports.user = (req, res, next) => {
    switch (req.originalUrl) {
        case '/user/login':
        {
            req.check('email').exists().isEmail();
            req.check('password').exists().isLength({min: 8});
            break;
        }
        case '/user/detail':
        {
            req.check('user_id').exists().isInt();
            break;
        }
        case '/user/add':
        {
            req.check('email').exists().isEmail();
            req.check('full_name').exists().isLength({min:3});
            req.check('password').exists().isLength({min:8});
            req.check('team_id').exists().isNumeric();
            req.check('role').exists().isNumeric();
            break;
        }
    }
    next();
};

function authChecker(req, res) {
    if (!req.user) {
        res.status(401);
        res.sendJSON({}, 'User session was timed out', 401);
    } else {
        //authorization implementation goes here
        return true;
    }
}

