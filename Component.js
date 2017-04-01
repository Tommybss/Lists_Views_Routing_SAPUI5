jQuery.sap.declare("ui5.Component");

sap.ui.core.UIComponent.extend("ui5.Component", 
{
	metadata: {
		
		routing: {
		    
			config: {
//Add a route to component.js file to lead this view when add loads
		viewType: "XML",
		viewPath: "ui5.view",
		clearTarget: false,
		transition: "slide"
			        },
		routes: [
	{
		pattern: "",
		name: "Master",
		view: "Master",
		targetControl: "idAppControl",
		targetAggregation: "pages",
            
            subroutes :[
		    {
		        pattern: "Resources",
		        name: "Resources",
		        view: "Resources",
		        targetAggregation: "pages"
		    },
//Add the route for Buttom View
	        {
                pattern : "Buttons",
                name : "Buttons",
                view : "Buttons",
                targetAggregation : "pages"
                //targetControl : "idAppControl"
            },
		    {
		        pattern: "HelloWorld",
		        name: "HelloWorld",
		        view: "HelloWorld",
		        targetAggregation: "pages"
		    },
//Add the route for Tables
            {   
		        pattern: "Tables",
		        name: "Tables",
		        view: "Tables",
		        targetAggregation: "pages"
		    },
		    {   
		        pattern: "Customers",
		        name: "Customers",
		        view: "Customers",
		        targetAggregation: "pages"
		    },
		    {   
		        pattern: "Lists",
		        name: "Lists",
		        view: "Lists",
		        targetAggregation: "pages"
		    },
		    {
		        pattern: "ListDetail/{entity}",
                name: "ListDetail",
                view: "ListDetail",
                targetAggregation: "pages"
		    },
		    {
		        pattern: "CustomerList",
		        name: "CustomerList",
		        view: "CustomerList",
		        targetAggregation: "pages"
		    },
		    {
		        pattern: "CustomerListDetail/{entity}",
		        name: "CustomerListDetail",
		        view: "CustomerListDetail",
		        targetAggregation: "pages"
		    },
		    {
		        pattern: "GoogleMap",
		        name: "GoogleMap",
		        view: "GoogleMap",
		        targetAggregation: "pages"
		    },
		    {
		        pattern: "CustomerGoogleMap",
		        name: "CustomerGoogleMap",
		        view: "CustomerGoogleMap",
		        targetAggregation: "pages"
		    },
		    {
		        pattern: "Weather",
		        name: "Weather",
		        view: "Weather",
		        targetAggregation: "pages"
		    }
		                ]
	}
		        ]
	
		}	
		},
		
	
		init: function() 
	{
		
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		//call createContent
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		this._router = this.getRouter();
		
		//initlialize the router
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();
		
	},
	
  createContent : function() 
  {
    
	// create root view
	var oView = sap.ui.view({
		id : "app",
		viewName : "ui5.view.App",
		type : "XML",
		viewData : { component : this }
	});
	
// Add a model that references the OData Services from percistance model.
    var oModel= new sap.ui.model.odata.ODataModel("http://hd2.hana.ucc.uwm.edu:8003/GBI_041/gbi/services/gbi.xsodata");                                                                                                                                                               
    this.setModel(oModel,"gbi");

	return oView;
  }
});