const app = Vue.createApp({

    data(){

        return{
            x: 0,
            Y: 0,
            ShowBooks: true,
            books: [
                {title: '1984', author: 'Joerge Orwell', image: 'assets/1984.jpeg', isFav: true},
                {title: 'Animal farm', author: 'Joerge Orwell', image: 'assets/animal_farm.jpg', isFav: false},
                {title: 'Alice in borderland', author: 'Haro Aso', image: 'assets/alice.jpg', isFav: true}
            ]
        }
    },

    methods: {
        toggleShow(){
            this.ShowBooks = !this.ShowBooks

        },
        mousemove(e){
            this.X = e.offsetX
            this.Y = e.offsetY
            // console.log(e)
        },

        // favToggle(){
        //     this.books.isFav = !this.isFav
        //     console.log(this.isFav)
        // }

    },
    computed: {
        filteredBooks(){
           return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')