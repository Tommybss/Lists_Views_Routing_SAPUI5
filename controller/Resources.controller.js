sap.ui.controller("ui5.controller.Resources", {
  
    onInit: function(){
        this.router = sap.ui.core.UIComponent.getRouterFor(this);
        	
        var iModel = new sap.ui.model.json.JSONModel('model/resources.json');
        this.getView().setModel(iModel,'resources');
    },
    
   handleNavButtonPress: function(evt){
      	this.router.navTo("Master", {
		from: "Resources"
	});
   },
	
    handleListPress: function(evt){
        var url = evt.getSource().getBindingContext('resources').getProperty('url');
        window.open(url,'_blank');
    }
});