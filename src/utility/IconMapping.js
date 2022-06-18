const IconMapping = function() {};

IconMapping.translateIcon = function(iconType) {
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
		default: return 'message';
	}
}
module.exports = IconMapping;
