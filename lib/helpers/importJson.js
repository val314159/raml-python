/**
 * Import a json file
 *
 * @param  {Object} resource
 * @param  {String} filename
 * @param  {String} symbol
 * @return {String}
 */
var fs = require('fs');
function importJson(resource, filename, symbol) {
    var data = fs.readFileSync(filename,'ascii');
    data = JSON.parse(data);
    resource[symbol] = data;
    this[symbol] = data;
    return '';
}
module.exports = importJson;
