import { translateIcon } from "../../utility/IconMapping";

const InfoContent = function() {}

InfoContent.infoContent = function(options = { iconType: 'ferry' }) {
	console.log("Fuck this file");
    return '<div class="detailContent">' +
		'<h1 class="firstHeading">'+options.iconType+'</h1>' +
		`<img src="assets/pins/${translateIcon(options.iconType)}.svg"`+
    `<p>${options?.message}</p>` +
    "</div>";
};

export default InfoContent;
