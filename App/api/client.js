import { create } from "apisauce";
import secureStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://rocket34.pythonanywhere.com",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = secureStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
