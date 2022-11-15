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
                    done: true,
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
    },
    methods: {
        removeItem(i){
            this.myList.splice(i, 1)
        }
    }
}).mount('#app')