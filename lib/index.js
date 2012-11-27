var mustache = require("mustache");
var fs = require("fs");
var readFile = function (path) {
    var content = fs.readFileSync(path, "utf-8");
    return content.replace(/{include tpl="(.*?)"}/g, function (match, path) {
        return readFile(_mustache.prefix + path);
    });
};
var mustachePlus = function(path, options, fn) {
    try {
        var str=readFile(path);
        if(str)
            options.filename = path;
        fn(null, mustache.to_html(str, options));
    } catch (err) {
        fn(err);
    }
};   
_mustache.prefix = "/";
module.exports = mustachePlus;