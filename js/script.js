// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
// Concentratevi sulla parte JS,
// per la grafica avete come ref lo screeshot,
// ma i dettagli lasciateli per la fine.
const linkDischi = 'https://flynn.boolean.careers/exercises/api/array/music';

var app = new Vue({
    el: '#root',
    data: {
        array: []
    },
    mounted: function () {
        for (let i = 0; i < 10; i++) {
            axios.get(linkDischi)
            .then(risposta => {
                var rootDischi = risposta.data.response;
                this.array = rootDischi; //assegno l'array di oggetti direttamente al mio array nel data
            });
        }
    }
})



// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.
