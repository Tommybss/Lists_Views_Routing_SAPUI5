sap.ui.controller("ui5.controller.Weather", {

	onInit: function () {  
	    this.router = sap.ui.core.UIComponent.getRouterFor(this);
	    
	   	    cModel = new sap.ui.model.json.JSONModel();
		cModel.loadData("http://api.openweathermap.org/data/2.5/weather",{"q":"Sydney","APPID":" 15b195c24696adc6351bb77d250af110"})
		this.getView().setModel(cModel, "weather");
		
		fModel = new sap.ui.model.json.JSONModel();
		fModel.loadData("http://api.openweathermap.org/data/2.5/forecast/daily",{"q":"Sydney","units":"metric","cnt":"5","APPID":"15b195c24696adc6351bb77d250af110"});
		this.getView().setModel(fModel, "forecast");
    },  

	handleNavButtonPress: function(){
      	this.router.navTo("Master", {
			from: "IconTab"
		});
   },
	
	actSearch: function(){
		 var address = this.getView().byId("inpSearch").getValue();  
        cModel.loadData("http://api.openweathermap.org/data/2.5/weather",{"q": address,"APPID":"15b195c24696adc6351bb77d250af110"});
        fModel.loadData("http://api.openweathermap.org/data/2.5/forecast/daily",{"q": address ,"units":"metric","cnt":"5","APPID":" YOUR APIID"});
	},
	
	handleRefreshPressed: function(){
		 var address = this.getView().byId("inpSearch").getValue();
		 if(!address) address = cModel.getData().name;
		 cModel.loadData("http://api.openweathermap.org/data/2.5/weather",{"q": address,"APPID":"15b195c24696adc6351bb77d250af110"});
         fModel.loadData("http://api.openweathermap.org/data/2.5/forecast/daily",{"q": address ,"units":"metric","cnt":"5","APPID":"15b195c24696adc6351bb77d250af110"});
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
