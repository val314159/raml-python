/**
 * Stringify a resource into a request snippet.
 *
 * @param  {Object} resource
 * @return {String}
 */
function extend(arr,arr2){
    if (arr2===undefined){return;}
    for (var i=0; i<arr2.length; i++){
	arr.push(arr2[i]);
}}
function getUriList(resource) {
    var ret = [];
    extend(ret, resource.uriParameters);
    if (resource.parent) {
	extend(ret, getUriList(resource.parent));
    }
    return ret;
}
module.exports = function(resource){
    this.resource.uriList = getUriList(resource);
};
