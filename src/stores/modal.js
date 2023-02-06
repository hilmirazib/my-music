/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'

export default defineStore("modal", {
  state: () => ({
    isOpen: false
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    }
  }
})
