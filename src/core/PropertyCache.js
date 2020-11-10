/**
 * @store propertyCache
 * 
 */

var objectCache = function(name) {
	this.name = name;
	this.cache = {};
}

objectCache.prototype.getItem = function(mainID, composedWithID) {
	if (!composedWithID)
		return this.cache[mainID.toString()];
	else
		return this.cache[mainID.toString() + '-' + composedWithID.toString()];
}

objectCache.prototype.setItem = function(mainID, mainValue, composedWithID, composedWithValue) {
	if (!composedWithID)
		return this.newItem(mainID.toString(), mainValue);
	else
		return this.newItem(mainID.toString() + '-' + composedWithID.toString());
}

objectCache.prototype.newItem = function(UID, value) {
	this.cache[UID] = value;
	return value;
}

objectCache.prototype.reset = function() {
	for (let UID in this.cache) {
		if (Array.isArray(this.cache[UID]))
			this.cache[UID].length = 0;
		delete this.cache[UID];
	}
}

module.exports = objectCache;