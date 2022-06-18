const Service = require("./Service");

const InfoService = function (service = new Service()) {
	const _service = service;
  InfoService.prototype.getPinList = function (location, radius = 10 * 1000) {
    return _service.get("https://europe-west1-bootcamp222.cloudfunctions.net/info-service", {...location, radius: radius});
  };
};

module.exports = InfoService;
