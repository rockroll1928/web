const Service = require("./Service");

const ENDPOINT_URL =
  "https://europe-west1-bootcamp222.cloudfunctions.net/info-service";

const InfoService = function (service = new Service(ENDPOINT_URL)) {
  const _service = service;
  InfoService.prototype.getPins = function () {
    return _service.fetch();
  };
};

module.exports = InfoService;
