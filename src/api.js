import axios from "axios";

// This points to the live deployed backend.
// Participants never change this file.
// To use: import api from "../../api";
//         const data = await api.get("/recipes");

const api = axios.create({
  baseURL: "https://rasaveda-api.onrender.com/api",
});

export default api;
