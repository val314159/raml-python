/**
 * Stringify a resource into a request snippet.
 *
 * @param  {Object} resource
 * @return {String}
 */
function flatPath(resource) {
    if (resource.key===undefined) {
	return '';
    }
    var relUri = resource.relativeUri;
    var uriParameters = resource.uriParameters;
    for (var n=0; n<uriParameters.length; n++) {
	var val = uriParameters[n];
	relUri=relUri.replace('{'+n+'}',
			      '{'+val.displayName+'}');
    }
    var uri = flatPath(resource.parent);
    return uri+relUri;
}
module.exports = function (resource) {
    var uri = flatPath(resource);
    uri=uri.replace(/\//g,'_');
    uri=uri.replace(/-/g,'_');
    uri=uri.replace(/{/g,'_');
    uri=uri.replace(/}/g,'_');
    return uri;
};
