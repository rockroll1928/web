const Service = function () {
	Service.prototype.get = function (url, body = {}) {
		const parameterString = Object.keys(body).map((parameter) => { return `${parameter}=${body[parameter]}` }).join('&')
    return fetch(`${url}?${parameterString}`)
      .then((res) => res.json())
      .catch(console.error);
  };
};

module.exports = Service;
