/**
 * constructor BinarySchema
 */

var TypeManager = require('src/core/TypeManager');







var BinarySchema = function(name, propsList, sizes) {
	this.objectType = 'BinarySchema';
	
	if (!BinarySchema.schemas.name) {
		var size = 0;
		var schema = function(propsList, sizes) {
			propsList.forEach(function(propName, key) {
				this[propName] = sizes[key];
				size += sizes[key];
			}, this);
		}
		Object.defineProperty(schema.prototype, 'objectType', {
			value : 'BinarySchema'
		});
		Object.defineProperty(schema.prototype, '_name', {
			value : name
		});
		Object.defineProperty(schema.prototype, 'size', {
			value : size
		});
				
		BinarySchema.schemas.name = schema;
		return schema;
	}
	else
		return BinarySchema.schemas.name;
}

BinarySchema.prototype = {};
BinarySchema.prototype.objectType = 'BinarySchema';

BinarySchema.schemas = {};






module.exports = BinarySchema;