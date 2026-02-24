import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'TestFirst',
    lastName: 'TestLast',
  }),
  getters: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
  },
  actions: {
    async fetchUser() {
      const fetchUserPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            firstName: 'Kellen',
            lastName: 'Link',
          })
        }, 2000)
      })

      fetchUserPromise.then((response) => {
        this.firstName = response.firstName
        this.lastName = response.lastName
      })
    },
  },
})
