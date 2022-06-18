const ENDPOINT_URL =
  "https://europe-west1-bootcamp222.cloudfunctions.net/info-service";

const InfoService = function () {
  const _fetch = function (path, body = null) {
    return fetch(`${ENDPOINT_URL}/${path}`)
      .then((res) => res.json())
      .catch(console.error);
  };

  const get= function () {
    return fetch('/');
  };
};

module.exports = InfoService;
