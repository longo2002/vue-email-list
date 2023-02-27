const { createApp } = Vue


createApp({
    data() {
        return {
            mail: [],
        }
    },
    methods: {
        mailGenerator() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((res) => {
                    console.log(res.data.response)
                    this.mail.push(res.data.response.trim())
                })
        },
        mailGeneratorDelayed(){
            setTimeout(this.mailGenerator, 1000)
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.mailGenerator()
        }
    },
}).mount("#app")