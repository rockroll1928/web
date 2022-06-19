import { translateIcon } from "../../utility/IconMapping";

const InfoContent = function() {}

InfoContent.infoContent = function(options = { iconType: 'ferry'} ) {
  console.log(options);
    return '<div class="contentPopup">' +
    '<div class="contentPopup-Flex">' +
    `<img class="contentPopup-Pin" src="assets/pins/${translateIcon(options.iconType)}.svg"/>`+
    '<div>' +
		'<h1 class="contentPopup-Heading">'+options.iconType+'</h1>' +
    `<p class="contentPopup-Date">${options.startTime ? options.startTime : ""} - ${options.endTime ? options.endTime : ""}</p>`
    +
    '</div>' +
    '</div>' +
    `<p>${options?.message ? options.message : ""}</p>` +
    "</div>";
};

export default InfoContent;
