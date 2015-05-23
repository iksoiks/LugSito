var orm = require("orm");

module.exports = function (db, cb) {
    var Page = db.define("pages", {
        title: String,
        description: String,
        text: String,
        created: Date,
        modified: Date
    }, {
        methods: {
            //fullName: function () {
            //    return this.name + ' ' + this.surname;
            //}
        }
    }, {
        validations: {
            title: orm.enforce.notEmptyString(),
            description: orm.enforce.notEmptyString(),
            text: orm.enforce.notEmptyString()
        }
    });
};
