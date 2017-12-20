
module.exports = (Sequelize) => {

    var model = Sequelize.loadModel('team');
    var model_team_type = Sequelize.loadModel('team_type');

    model.getTypes = (callback) => {
        model_team_type.findAll({attributes: ["team_type_id", "name"], raw: true}).then((team_types) => {
            if (team_types) {
                callback(team_types);
            } else {
                callback([]);
            }
        });
    };

    return model;
};

function displayError(err, cb) {
    console.log('Sequelize Error :', err);
    cb(false);
}

