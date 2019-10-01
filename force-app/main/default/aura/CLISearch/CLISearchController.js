({
	handleComponentEvent : function(component, event, helper) {
        debugger
		var selectedOrgValue = event.getParam("selectedOrg"); 
        var searchByValues = event.getParam("searchByValue");
        var searchBoxValue = event.getParam("searchBox");
        var ssnDisplayValue = event.getParam("ssnDisplay");
        var showEmployeeListComponentValue = event.getParam("showEmployeeListComponent");
        var EmployeeDetailValue = event.getParam("EmployeeDetail");
        var employeeCount = event.getParam("empCount");
        var childComponent = component.find('child');
        childComponent.myMethod(selectedOrgValue,searchByValues,searchBoxValue,ssnDisplayValue,showEmployeeListComponentValue,EmployeeDetailValue,employeeCount);
	},
     onCallChildMethod : function(component, event, helper) {
        var attribute1 = component.get('v.parentAttribute1');
        var attribute2 = component.get('v.parentAttribute2');
        var childComponent = component.find('child');
        childComponent.myMethod(attribute1, attribute2);
    }
})