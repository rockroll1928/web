const Service = require("./Service");

const InfoService = function (service = new Service()) {
	const _service = service;
  InfoService.prototype.getPinList = function (location) {
    return _service.get("https://europe-west1-bootcamp222.cloudfunctions.net/info-service/getSituations?lat=57.75042&lon=11.87385&radius=10000", location);
  };
};

module.exports = InfoService;
