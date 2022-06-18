const Service = require("./Service");

const InfoService = function (service = new Service()) {
	const _service = service;
  InfoService.prototype.getPinList = function (location) {
    return _service.get("https://europe-west1-bootcamp222.cloudfunctions.net/info-service/getSituations", location);
  };
};

module.exports = InfoService;
