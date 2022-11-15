/* ------------------------
    IMPORT VUE
------------------------ */
const { createApp } = Vue

createApp({
  data() {
    return {
      myList: [
        {
            text: "Fare la spesa",
            done: false,
        },
        {
            text: "Vedere un film",
            done: false,
        },
        {
            text: "Completare l'esercizio di oggi",
            done: false,
        },
      ]
    }
  }
}).mount('#app')