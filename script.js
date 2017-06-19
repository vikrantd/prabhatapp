alert('Welcome to geocode');
var input = document.getElementById("textbox");


function GetLocation() {
            var geocoder = new google.maps.Geocoder();
            var address = document.getElementById("textbox").value;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].address_components.administrative_area_level_1.long_name();
                } else {
                    alert("Request failed.")
                }
            });
        };



   /* var input = document.getElementById('textbox');   
        function pin()
        {
        alert(textbox.value);
        }
        */