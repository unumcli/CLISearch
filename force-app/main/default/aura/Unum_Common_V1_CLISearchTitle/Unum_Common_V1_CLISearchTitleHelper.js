({
	doInit: function (component, event, helper) {
        component.set("v.Title", "Search for Claims & Leaves in Three Steps");
        component.set("v.Path", "SEARCH");
    },
    setPagePath: function (component, event, helper) {
        debugger
        component.set("v.Title", "Search for Claims & Leaves");
        component.set("v.Path", "SEARCH");
        if(component.get("v.getResults")=="Search"){
            component.set("v.Title", "Search for Claims & Leaves in Three Steps");
            component.set("v.Path", "SEARCH");
        }
        else if(component.get("v.getResults")=="NameResults"){
            component.set("v.Path", "SEARCH / NAME RESULTS");
        }
        else if(component.get("v.getResults")=="RecordResults"){
            component.set("v.Path", "SEARCH / NAME RESULTS / RECORD RESULTS");
        }
    }
})