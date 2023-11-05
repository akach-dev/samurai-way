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

  }
}