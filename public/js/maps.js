var app = new Vue({
    el: '#app',

    data: {
        address: ''
    },
    methods: {
        createMap: function() {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 18.0029889, lng: -76.7919844},
                zoom: 15
            });
        },
        locateAddress: function() {
            var geocoder = new google.maps.Geocoder();
            var resultsMap = this;
            geocoder.geocode({ address: this.address }, function(results, status){
                if(status === 'OK'){
                    resultsMap.map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap.map,
                        position: results[0].geometry.location
                    });
                    console.log(status, results);
                }else{
                    alert('Could not find addres');
                }
            });
        },
    }
});
