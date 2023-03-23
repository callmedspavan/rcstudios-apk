import client from "./client";

const getEndpoint = "getotp/";

const sendOtp = (input) => {
  const data = new FormData();
  data.append("phone", input.phoneNumber);
  return client.post(getEndpoint, data);
};

const verifyEndPoint = "verifyotp/";

const verifyOtp = (input) => {
  const data = new FormData();
  data.append("phone", input.phoneNumber);
  data.append("otp", input.otp);
  return client.post(verifyEndPoint, data);
};

export default {
  sendOtp,
  verifyOtp,
};
