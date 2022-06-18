const IconMapping = function() {};

IconMapping.prototype.translateIcon = function(iconType) {
	switch (iconType) {
		case 'roadAccident': return 'accident';
		default: return 'undefined';
	}
}
module.exports = IconMapping;
