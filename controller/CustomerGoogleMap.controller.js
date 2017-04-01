sap.ui.controller("ui5.controller.CustomerGoogleMap", {
    onInit : function() {
        this.router = sap.ui.core.UIComponent.getRouterFor(this);
    },
    
    handleNavButtonPress: function(){
      	    this.router.navTo("Master", {
			from: "CustomerList"
		});
   },
   onAfterRendering: function () {  
        if (!this.initialized) {  
            this.initialized = true;  
            this.geocoder = new google.maps.Geocoder();  
            var mapOptions = {  
                center: new google.maps.LatLng(-34.397, 150.644),  
                zoom: 8,  
                mapTypeId: google.maps.MapTypeId.ROADMAP  
            };  
            this.map = new google.maps.Map(this.getView().byId("mapcanvas").getDomRef(),  
                mapOptions);  
        }  
    },
    
    handleListItemPress: function (evt) {  
        var map = this.map;  
        var context = evt.getSource().getBindingContext('gbi');
        var street = evt.getSource().getBindingContext('gbi').getProperty('Address.Address');
        var city = evt.getSource().getBindingContext('gbi').getProperty('Address.City');
        var postal_code = evt.getSource().getBindingContext('gbi').getProperty('Address.Postal_code');
        var address = street + ", " + city + ", " + postal_code;
        
        this.geocoder.geocode({ 'address': address }, function (results, status) {  
            if (status == google.maps.GeocoderStatus.OK) {  
                map.setCenter(results[0].geometry.location);  
                var marker = new google.maps.Marker({  
                    map: map,  
                    position: results[0].geometry.location  
                });  

        
            } else {  
                alert('Geocode was not successful for the following reason: ' + status);  
            }  
        });  
    }
});