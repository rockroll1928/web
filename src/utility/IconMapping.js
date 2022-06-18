const IconMapping = function() {};

IconMapping = function(iconId) {
	switch (iconId) {
		case 'roadAccident': return 'accident';
		default: return 'undefined';
	}
}
module.exports = IconMapping;
