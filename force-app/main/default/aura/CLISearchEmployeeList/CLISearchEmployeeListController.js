({
    fetchCLISearchFormEvent : function(component, event, helper) {
        debugger
        var selectedOrgValue = event.getParam("selectedOrg"); 
        var searchByValues = event.getParam("searchByValue");
        var searchBoxValue = event.getParam("searchBox");
        var ssnDisplayValue = event.getParam("ssnDisplay");
        var showEmployeeListComponentValue = event.getParam("showEmployeeListComponent");
        // set the handler attributes based on event data
        component.set("v.selectedOrgEvent", selectedOrgValue);
        component.set("v.searchByValueEvent", searchByValues);
        component.set("v.searchBoxEvent", searchBoxValue);
        component.set("v.ssnDisplayEvent", ssnDisplayValue);
        component.set("v.showHideMatchingResults", showEmployeeListComponentValue);
        var numEventsHandled = parseInt(component.get("v.numEvents")) + 1;
        component.set("v.numEvents", numEventsHandled);
        helper.iterateEmployeeListMethod(component);
    },
    
    showHideCLISearchEmployeeListEvent : function(component, event, helper) {
        debugger
        var toggleValue = event.getParam("hideEmployeeListComponent"); 
        component.set("v.showHideMatchingResults", toggleValue);
    }
})