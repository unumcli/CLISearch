({
	fetchCLISearchFormEvent : function(component, event, helper) 
    {
        helper.fetchCLISearchFormEvent(component, event, helper);
    },
    showHideCLISearchEmployeeListEvent : function(component, event, helper) 
    {
        helper.showHideCLISearchEmployeeListEvent(component, event, helper) ;
    },
    selectedEmployeeDetails : function(component, event, helper) 
    {
        helper.selectedEmployeeDetails(component, event, helper); 
    },
    loadJquery : function(component, event, helper) 
    {
      helper.loadJquery(component, event, helper); 
    },
    saveComponent :function(component, event, helper) 
    {
		helper.saveComponentHealer(component, event, helper);
    },
    executeMyMethod : function (component, event, helper) 
    {     
        debugger
        var params = JSON.parse(JSON.stringify(event.getParam('arguments')));
       // console.log('Param 1: '+ params.EmployeeDetail);
       // console.log('Param 2: '+ params.param2);
        component.set("v.selectedOrgEvent", params.selectedOrgGroup);
        component.set("v.searchByValueEvent", params.searchByValue);
        component.set("v.searchBoxEvent", params.searchBoxEvent);
        component.set("v.ssnDisplayEvent", params.ssnDisplayEvent);
        component.set("v.EmployeeDetail",params.EmployeeDetail);
        component.set("v.showHideMatchingResults", params.showEmployeeListComponent);
        component.set("v.empCountEvent", params.empCount);
        component.set("v.enableActiveClass",true);
    }
})