({
    fetchCLISearchFormEvent : function(component, event, helper) {
        debugger
        var selectedOrgValue = event.getParam("selectedOrg"); 
        var searchByValues = event.getParam("searchByValue");
        var searchBoxValue = event.getParam("searchBox");
        var ssnDisplayValue = event.getParam("ssnDisplay");
        var showEmployeeListComponentValue = event.getParam("showEmployeeListComponent");
        var EmployeeDetailValue = event.getParam("EmployeeDetail");
        // set the handler attributes based on event data
        component.set("v.selectedOrgEvent", selectedOrgValue);
        component.set("v.searchByValueEvent", searchByValues);
        component.set("v.searchBoxEvent", searchBoxValue);
        component.set("v.ssnDisplayEvent", ssnDisplayValue);
        component.set("v.showHideMatchingResults", showEmployeeListComponentValue);
        component.set("v.EmployeeDetail", EmployeeDetailValue);
        
        helper.iterateEmployeeListMethod(component);
    },
    
    showHideCLISearchEmployeeListEvent : function(component, event, helper) {
        debugger
        var toggleValue = event.getParam("hideEmployeeListComponent"); 
        component.set("v.showHideMatchingResults", toggleValue);
    },
    
    clickdetails : function(component, event, helper) {
        debugger
        //var employeeDetails = event.getSource().getElement().getAttribute('data-EmployeeListDetails');
        var appEvent = $A.get("e.c:showEmployeeDetailsEvent");
        var employeeDetails = component.find("showEmployeeListDetails");
        
        appEvent.setParams({
              "showEmployeeListDetails" : employeeDetails
         });
        appEvent.fire(); 
    }
})