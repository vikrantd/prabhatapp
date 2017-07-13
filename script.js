alert('Welcome to geocode');
var input = document.getElementById("textbox");


function pin() {
            var geocoder = new google.maps.Geocoder();
            var address = document.getElementById("textbox").value;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results);
                    var latitude = results[0].formatted_address;
                    alert(latitude);
                } else {
                    alert("Request failed.")
                }
            });
        };

