const Service = require("./Service");
 
const PinService = function (service = new Service()) {
  const _service = service;
	PinService.prototype.getPinList = function () {
    return _service.get("https://europe-west1-bootcamp222.cloudfunctions.net/pin-service/v1/pins");
  };

  PinService.prototype.savePin = function (pin) {
    return _service.post(
        `https://europe-west1-bootcamp222.cloudfunctions.net/pin-service/v1/pin/`,pin); 
    }
};
 
module.exports = PinService;
