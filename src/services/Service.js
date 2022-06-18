const Service = function () {
	Service.prototype.get = function (url, body = null) {
    return fetch(`${url}`)
      .then((res) => res.json())
      .catch(console.error);
  };
};

module.exports = Service;
