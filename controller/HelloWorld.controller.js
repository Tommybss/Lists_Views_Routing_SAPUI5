sap.ui.controller("ui5.controller.HelloWorld", {
    
    onInit: function(){
        this.router = sap.ui.core.UIComponent.getRouterFor(this);

	},
	
	handleNavButtonPress: function(){
		this.router.navTo("Master", {

		from: "HelloWorld"
		});
	
	}
});