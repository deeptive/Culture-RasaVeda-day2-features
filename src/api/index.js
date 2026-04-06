import { recipes } from "../data/recipes";

const api = {
  get: (endpoint) => {
    if (endpoint === "/recipes") {
      return Promise.resolve({ data: recipes });
    }
    return Promise.reject("Unknown endpoint");
  }
};

export default api;