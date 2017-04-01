sap.ui.controller("ui5.controller.Buttons", {
// implement controller methods here
	onInit: function(){
	     this.router = sap.ui.core.UIComponent.getRouterFor(this);
	},
	
	handleNavButtonPress: function(){
    		this.router.navTo("Master", {
    		from: "Buttons"
    		});
	},
//handles all onPress items	
      onPress: function(evt){
		jQuery.sap.require("sap.m.MessageToast");
		sap.m.MessageToast.show("Pressed: " + evt.getSource().getId());
	},
/*handles drop DOWN menu from the excercise	exActionSheet
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
*/
	
//handles the actionSheet from bottom drop-down-list for Reject, Accept... ext	
	handleOpen : function (oEvent) {
	var oButton = oEvent.getSource();

	// create action sheet only once
	if (!this._actionSheet) {
		this._actionSheet = sap.ui.xmlfragment(
			"ui5.view.ActionSheet",
			this
		);
		this.getView().addDependent(this._actionSheet);
	}
	this._actionSheet.openBy(oButton);
    },
//handles menu on right side for myItem1,2,3 and so on    
    handlePressOpenMenu: function(oEvent) {
    var oButton = oEvent.getSource();

    if (!this._menu) {
	this._menu = sap.ui.xmlfragment(
		"ui5.view.Menu",
		this
	);
	this.getView().addDependent(this._menu);
     }

     var eDock = sap.ui.core.Popup.Dock;
     this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
},

//handles any other text press
handleTextFieldItemPress: function(oEvent) {
	var msg = "'" + oEvent.getParameter("item").getValue() + "' entered";
              sap.m.MessageToast.show(msg);
}

});
