({
 CLISearchEmployeeListEvent : function(component, event, helper) {
        debugger
        var toggle = event.getParam("showEmployeeListDetails"); 
        component.set("v.DisplayEvent", toggle);
    }
})