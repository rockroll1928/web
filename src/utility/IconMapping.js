const IconMapping = function() {};

IconMapping.prototype.translateIcon = function(iconId) {
	switch (iconId) {
		case 'roadAccident': return 'accident';
		default: return 'undefined';
	}
}
module.exports = IconMapping;
