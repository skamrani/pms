/**
 * This middleware will add a custom function "sendJSON" to the "res" object.
 * this will help the to send structed response all across the application
 * @author Muhammad Zubair
 */
module.exports = function (req, res, next) {
    res.sendJSON = function (data, msg, code) {
        code = code || 200;
        var body = {
            status: code,
            data: data || {},
            msg: msg || "No message was specified"
        };
        //check if data object is of type Seqyuelize model
        //check if model has values
        if (data) {
            if (data.get) {
                body.data = data.toJSON();
                body.msg = "Records found : " + ((data.length) ? data.length : "1");
            }
        } else {
            body.msg = "No data found";
        }
        res.json(body);
    };
    next();
};