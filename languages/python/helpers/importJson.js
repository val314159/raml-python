/**
 * Stringify a resource into a request snippet.
 *
 * @param  {Object} resource
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
