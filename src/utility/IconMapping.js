const IconMapping = function() {};

IconMapping.prototype.translateIcon = function(iconType) {
	switch (iconType) {
		case 'roadAccident':
		case 'emergencyInformation':
			return 'accident';
		case 'trafficMessage':
		case 'trafficMessagePlanned':
			return 'message';
		case 'roadClosed':
		case 'roadClosedPlanned':
			return 'restriction';
		case 'roadwork':
		case 'roadworkPlanned': 
			return 'roadwork';
		default: return 'undefined';
	}
}
module.exports = IconMapping;
