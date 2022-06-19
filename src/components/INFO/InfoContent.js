import { translateIcon } from "../../utility/IconMapping";

const InfoContent = function() {}

InfoContent.infoContent = function(options = { iconType: 'ferry' }) {
    return '<div class="contentPopup">' +
    '<div class="contentPopup-Flex">' +
    `<img class="contentPopup-Pin" src="assets/pins/${translateIcon(options.iconType)}.svg"/>`+
		'<h1 class="contentPopup-Heading">'+options.iconType+'</h1>' +
    '</div>' +
    `<p>${options?.message}</p>` +
    "</div>";
};

export default InfoContent;
