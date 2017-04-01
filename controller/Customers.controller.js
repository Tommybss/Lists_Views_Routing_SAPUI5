sap.ui.controller("ui5.controller.Customers", {
	
	_oDialog: null,
	
	handleNavButtonPress: function(){
      	this.router.navTo("Master", {
			from: "Customers"
		});
   },
	
	onInit: function () {
	
         this.router = sap.ui.core.UIComponent.getRouterFor(this);
         
        this.mGroupFunctions = {
			ProductCategory: function(oContext) {
				var name = oContext.getProperty("SalesOrganisation");
				return {
					key: name,
					text: name
				};
			}
		};
        
	},

	onExit : function () {
	    //Destroy the dialog when the user leaves the view
		if (this._oDialog) {
			this._oDialog.destroy();
		}
	},

	handleViewSettingsDialogButtonPressed: function () {
		//If the dialog hasn't been created, create it
		if (!this._oDialog) {
			this._oDialog = sap.ui.xmlfragment("ui5.view.Customers", this);
		}
		// Synchronize the compact style between the view and the dialog
		jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
		this._oDialog.open();
	},

	handleConfirm: function(oEvent) {
        //When the user clicks OK on the dialog, get references to aggregation binding of the table
		var oBinding = this.getView().byId("idCustomersTable").getBinding("items");

        //The mParams property contains the options the user selected
		var mParams = oEvent.getParameters();

		//The aSorters array will contain all the properties the use selected to sort the table
		var aSorters = [];
		if (mParams.groupItem) {
			var gPath = mParams.groupItem.getKey();
			var gDescending = mParams.groupDescending;
			var vGroup = this.mGroupFunctions[gPath];
			aSorters.push(new sap.ui.model.Sorter(gPath, gDescending, vGroup));
		}
		var sPath = mParams.sortItem.getKey();
		var bDescending = mParams.sortDescending;
		aSorters.push(new sap.ui.model.Sorter(sPath, bDescending));
		oBinding.sort(aSorters);

	}
});