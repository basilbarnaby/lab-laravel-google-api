var app = new Vue({
    el: '#app',

    data: {
        address: ''
    },

    methods: {
        createMap: function() {
            var map = new google.maps.Map(document.querySelector('#map'), {
                center: {lat: 18.0029889, lng: -76.7919844},
                zoom: 15
            });
        },

        locateAddress: function() {
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({ address: this.address }, function(results, status){
                console.log(status, results);
            });
        }
    }
});
