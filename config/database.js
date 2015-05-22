var orm = require("orm");
var database_url = require("./private_settings").database_url;

module.exports = orm.express(database_url, {
    define: function (db, models, next) {
        db.load('../models');
        models.page = db.models.page;

        db.sync(function (err) {
            if (err) throw err;
        });

        next();
    }
});