var orm = require("orm");

module.exports = function (db, cb) {
    var Page = db.define("page", {
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
        },
        validations: {
            title: orm.enforce.ranges.length(1, undefined, "Missing"),
            description: orm.enforce.ranges.length(1, undefined, "Missing"),
            text: orm.enforce.ranges.length(1, undefined, "Missing")
        }
    });
};