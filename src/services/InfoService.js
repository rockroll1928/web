const Service = require("./Service");

const InfoService = function (service = new Service()) {
	const _service = service;
  InfoService.prototype.getPinList = function (location, radius = 25 * 1000) {
    return _service.get("https://europe-west1-bootcamp222.cloudfunctions.net/info-service/getSituations", {lat: location.lat, lon: location.lng, radius: radius});
  };
};

module.exports = InfoService;
