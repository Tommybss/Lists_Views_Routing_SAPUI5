sap.ui.controller("ui5.controller.CustomerListDetail", {
	onInit: function() {
		//Get a reference to the router
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		//Name the function onRouteMatched to handle events when the route matches this view
		this.router.attachRoutePatternMatched(this.onRouteMatched, this);
	
	},

	onRouteMatched : function(oEvent) {	
	    //Get the route paramters
		var oParameters = oEvent.getParameters();
        //Get a reference to this view
		var oView = this.getView();

		// Make sure we're in the right place 
		if (oParameters.name !== "CustomerListDetail") { 
			return;
		}

        //Retrieve the entity form the route paramters and create the path the selected item in the collection
        //Should be something like /Products/2
		var sEntityPath = "/" + oParameters.arguments.entity;
		//Get the gbi model
	    var oModel = oView.getModel('gbi');
	    //Create a new context with the path and the model
		var oContext = new sap.ui.model.Context(oModel , sEntityPath);
		//Bind the new context to the view
		oView.setBindingContext(oContext,'gbi');

	},
	
		handleNavButtonPress: function(){
      		this.router.navTo("CustomerList", {
			from: "CustomerListDetail"
		});
   }
});