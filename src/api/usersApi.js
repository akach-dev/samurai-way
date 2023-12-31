import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '6ff77210-e71e-46ba-98fd-7bb7e9655f9e'},
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}?count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)

  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)

  },
}
export const profilesApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
  }

}
export const authApi = {
  me() {
    return instance.get('auth/me')
  },
  login(authData) {
    return instance.post('auth/login', authData)
  },
  logout() {
    return instance.delete('auth/login')
  },

}