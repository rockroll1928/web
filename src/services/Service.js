const Service = function (endpoint) {
  Service.prototype.fetch= function (path, body = null) {
    return fetch(`${endpoint}${path}`)
      .then((res) => res.json())
      .catch(console.error);
  };
};

module.exports = Service;