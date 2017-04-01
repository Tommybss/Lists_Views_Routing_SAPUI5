sap.ui.controller("ui5.controller.Weather", {

	onInit: function () {  
	    this.router = sap.ui.core.UIComponent.getRouterFor(this);
	    
	   	    cModel = new sap.ui.model.json.JSONModel();
		cModel.loadData("THIS IS WHERE YOU INSERT WEBSITE",{"q":"Sydney","APPID":" INSERT YOUR API HERE"})
		this.getView().setModel(cModel, "weather");
		
		fModel = new sap.ui.model.json.JSONModel();
		fModel.loadData("THIS IS WHERE YOU INSERT YOUR WEBSITE",{"q":"Sydney","units":"metric","cnt":"5","APPID":"INSERT YOUR API  HERE"});
		this.getView().setModel(fModel, "forecast");
    },  

	handleNavButtonPress: function(){
      	this.router.navTo("Master", {
			from: "IconTab"
		});
   },
	
	actSearch: function(){
		 var address = this.getView().byId("inpSearch").getValue();  
        cModel.loadData("THIS IS WHERE YOU INSERT YOUR WEBSITE",{"q": address,"APPID":"INSERT YOUR API HERE"});
        fModel.loadData("THIS IS WHERE YOU INSERT YOUR WEBSITE",{"q": address ,"units":"metric","cnt":"5","APPID":"INSERT YOUR API HERE"});
	},
	
	handleRefreshPressed: function(){
		 var address = this.getView().byId("inpSearch").getValue();
		 if(!address) address = cModel.getData().name;
		 cModel.loadData("THIS IS WHERE YOU INSERT YOUR WEBSITE",{"q": address,"APPID":"INSERT YOUR API HERE"});
         fModel.loadData("THIS IS WHERE YOU INSERT YOUR WEBSITE",{"q": address ,"units":"metric","cnt":"5","APPID":"INSERT YOUR API HERE"});
	},
	
	date: function(date){
	return new Date(date*1000).toLocaleDateString();
    },
    
    sunrise: function(date){
	return new Date(date*1000).toLocaleTimeString();
    },
    
    sunset: function(date){
	return new Date(date*1000).toLocaleTimeString();
    },
    
    celsius: function(temp){
		temp = parseFloat(temp);
		var degreesCelsius = Math.round(temp - 273.15);
		return degreesCelsius + "\u00b0";
	},
	
	icon: function(icon){
	return "http://openweathermap.org/img/w/" + icon + ".png";
    },
	
	windDirection: function(direction){
		return Math.round(direction) + "\u00b0";
    },
	
    windSpeed: function(speed){
		return speed + " kph";
    },

	
	degrees: function(temp){
	return temp + "\u00b0";
    }

});
