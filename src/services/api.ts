// Nao implementada a integracao com o backend

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});
