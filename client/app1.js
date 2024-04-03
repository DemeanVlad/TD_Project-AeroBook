function app(){
    new Vue({
        el: '#app',
        data: {
          departure: '',
          arrival: '',
          departureDate: '',
          arrivalDate: '',
          message: ''
        },
        methods: {
          searchFlights: function() {
             //facem partea de utilizator
             if(this.departure=== 'root' && this.arrival === 'pass'){
                this.message = 'allow';
            //aici o sa vreau sa ma duca in alta pagina
                }else{
                this.message = 'deny';
                }
            console.log('Departure:', this.departure);
            console.log('Arrival:', this.arrival);
            console.log('Departure Date:', this.departureDate);
            console.log('Arrival Date:', this.arrivalDate);
          }
        }
      });
    }

document.addEventListener('DOMContentLoaded', () => {
    app();
});