import authHeader from './auth-header';

import http from "./";

class UserService {
  getPublicContent() {
    return http.get('test/all');
  }

  getUserBoard() {
    return http.get('test/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return http.get('test/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return http.get('test/admin', { headers: authHeader() });
  }
}

export default new UserService();
