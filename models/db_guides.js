var orm = require("orm");

module.exports = function (db, cb) {
    var Guide = db.define("guides", {
        title: String,
        text: String,
        created: Date,
        modified: Date,
        contrib: Number, //userID
        superv: Number //userID
    }, {
        methods: {
            //fullName: function () {
            //    return this.name + ' ' + this.surname;
            //}
        }
    }, {
        validations: {
            title: orm.enforce.notEmptyString(),
            text: orm.enforce.notEmptyString(),
            contrib: [orm.enforce.required(), orm.enforce.rangeNumber(1,undefined)],
            superv: orm.enforce.outsideList([Guide.contrib],'Chi ha scritto la guida non la può revisionare')
        }
    });
};
