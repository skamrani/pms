/**
 * This middleware will add a custom function "sendJSON" to the "res" object.
 * this will help the to send structed response all across the application
 * @author Muhammad Zubair
 */
module.exports = function (req, res, next) {
    res.sendJSON = function (data, msg, code) {
        code = code || 200;
        let body = {
            status: code,
            data: data || {},
            msg: msg || "No message was specified"
        };
        res.json(body);
    };
    next();
};