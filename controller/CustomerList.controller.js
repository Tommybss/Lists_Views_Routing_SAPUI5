sap.ui.controller("ui5.controller.CustomerList", {
    onInit : function() {
        this.router = sap.ui.core.UIComponent.getRouterFor(this);
    },
    
    handleSearch : function (evt) {
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0){
			var filter = new sap.ui.model.Filter("CompanyName", sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}
		var list = this.getView().byId('ShortCustomerList');
		var binding = list.getBinding("items");
		binding.filter(filters);
	},

    
	handleListItemPress: function(evt){
    //Get the path to the selected object and extract the index
	var entity = evt.getSource().getBindingContext("gbi").getPath().split("/");

    //Navigate to ListDetai and pass the index of the selected object
	this.router.navTo("CustomerListDetail", {
		from: "CustomerList",
		entity: entity[1]
	});
    
},
    handleNavButtonPress: function(){
      	    this.router.navTo("Master", {
			from: "CustomerList"
		});
   }
});