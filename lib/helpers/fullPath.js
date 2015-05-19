/**
 * get the Full Path for a resource
 *
 * @param  {Object} resource
 * @return {String}
 */
function fullPath(resource) {
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
    var uri = fullPath(resource.parent);
    return uri+relUri;
}
module.exports = fullPath;
