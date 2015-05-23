var checkError = function (cb, err) {
    if (err) return cb(err);
    return cb();
};

module.exports = function (db, cb) {
    db.load("./db_pages.js", function (err) {
        checkError(cb, err);
    });
    db.load("./db_guides.js", function (err) {
        checkError(cb, err);
    });
    //var Stop = db.models.stop;
    //var Line = db.models.line;
    //
    //Alert.hasOne("stop", Stop, {reverse : "alerts"});
    //Alert.hasOne("line", Line, {reverse : "alerts"});
};