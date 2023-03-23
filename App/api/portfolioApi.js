import client from "./client";

const endPoint = "api/portifolio/";

const getPortfolio = () => {
  return client.get(endPoint);
};

export default {
  getPortfolio,
};
