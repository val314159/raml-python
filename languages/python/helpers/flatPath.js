/**
 * Stringify a resource into a request snippet.
 *
 * @param  {Object} resource
 * @return {String}
 */
function lalala(resource) {
    if (resource.key===undefined) {
	return '';
    }/*
    var context = this;
    var arr=[];
    for (var k in resource){
	arr.push(k);
    }*/
    var relUri = resource.relativeUri;
    var uriParameters = resource.uriParameters;
    for (var n=0; n<uriParameters.length; n++) {
	var val = uriParameters[n];
	relUri=relUri.replace('{'+n+'}',
			      '{'+val.displayName+'}');
    }
    var uri = lalala(resource.parent);
    return uri+relUri;
}
module.exports = function (resource) {
    //var context = this;
    var uri = lalala(resource);
    uri=uri.replace(/\//g,'_');
    uri=uri.replace(/-/g,'_');
    uri=uri.replace(/{/g,'_');
    uri=uri.replace(/}/g,'_');
    return uri;
};
