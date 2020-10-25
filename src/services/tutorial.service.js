// import axios from 'axios';
import authHeader from './auth-header';
import http from "./";

class TutorialService {
  
  getAll(params) {
    return http.get("/tutorials", {params});
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

}

export default new TutorialService();
