sap.ui.controller("ui5.controller.Master", {
    
    onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		var oModel = new sap.ui.model.json.JSONModel("model/views.json");
        this.getView().setModel(oModel,"views");

	},
	
	handleTilePress: function(evt){
	     var oView = evt.getSource().getInfo();
		this.router.navTo(oView, {

			from: "Master"
		});
	
	},
	handlePressOpen: function(oEvent) {
    var oButton = oEvent.getSource();

    if (!this._exActionSheet) {
	this._exActionSheet = sap.ui.xmlfragment(
		"ui5.view.exActionSheet",
		this
	);
	this.getView().addDependent(this._exActionSheet);
     }
     this._exActionSheet.openBy(oButton);
	},
	
	onPress : function(evt)
    {
        var id = evt.getSource().getId();
            switch(id) 
            {
            case "idCases":
            $("#__xmlview0--caseTiles").fadeIn();
            $("#__xmlview0--exerciseTiles").fadeOut();
            break;
            case "idExercises":
            $("#__xmlview0--caseTiles").fadeOut();
            $("#__xmlview0--exerciseTiles").fadeIn();
            break;
            case "idBoth":
            $("#__xmlview0--caseTiles").fadeIn();
            $("#__xmlview0--exerciseTiles").fadeIn();
            break;
            }
    }
});