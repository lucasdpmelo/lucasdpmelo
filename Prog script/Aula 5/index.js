const { createApp } = Vue

createApp({
    data() {
        return {
            nomes:[{
                nome: "Lucas",
                idade: 26,
                email: "lucas@djguga.com",
                expanded: false
            }]
        }
    },
    methods: {
        expandedItem(item) {
            item.expanded = !item.expanded
        }

    }
}).mount("#app")