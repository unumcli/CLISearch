({
	scriptsLoaded : function(component, event, helper) {
        debugger
        console.log("scriptsLoaded !!");
        console.log("initial value " + component.get("v.var1"));
        
        var placeholderDiv = document.getElementById("vizContainer");
        
        var options = {
			hideToolbar: false,
            toolbarPosition: tableau.ToolbarPosition.TOP,
            onFirstInteractive: function () {
			debugger                
                console.log("inside onFirstInteractive");   
                console.log(component);
                console.log("get worked " + component.get("v.var1"));
                component.set("v.var1","valueChanged");
                console.log("set worked " + component.get("v.var1"));          
            }
        };
        
  var viz = new tableau.Viz(placeholderDiv, "https://public.tableau.com/views/WorldIndicators/GDPpercapita?:embed=y&:display_count=yes&:origin=viz_share_link", options);
        
    //  viz.addEventListener('marksselection', helper.onMarksSelection);
	},
    filterSingleValue : function(component, event, helper) {
       console.log("inside filterSingleValue");    
    }
    
})