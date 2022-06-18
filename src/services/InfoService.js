const Service = require("./Service");

const ENDPOINT_URL =
  "https://europe-west1-bootcamp222.cloudfunctions.net/info-service";

const InfoService = function (service = new Service(ENDPOINT_URL)) {
  const _service = service;
  InfoService.prototype.getPinList = function (lat, lon) {
    return _service.fetch("/", {lat: lat, lon: lon});
  };
};

module.exports = InfoService;
