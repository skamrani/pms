
module.exports = (Sequelize) => {

    var model = Sequelize.loadModel('user');

    model.findByUserId = (user_id, attributes = null, callback) => {
        model.findById(user_id, {attributes: attributes}).then((user) => {
            callback(user);
        });
    };

    model.findByEmailPassword = (email, password, attributes = null, callback) => {
        model.findOne({where: {email: email, password: password}, attributes: attributes}).then(callback);
    };

    model.findByEmail = (email, attributes = null, callback) => {
        model.findOne({
            where: {email: email},
            attributes: attributes
        }).then((user) => {
            let data = user.get();
            callback(data);
        }).catch(displayError, callback);
    };

    model.addUser = (data, callback) => {
        model.create(data).then(callback).catch((err) => {
            displayError(err, callback);
        });

    };

    return model;
};

function displayError(err, cb) {
    console.log('Sequelize Error :', err);
    cb(false);
}

