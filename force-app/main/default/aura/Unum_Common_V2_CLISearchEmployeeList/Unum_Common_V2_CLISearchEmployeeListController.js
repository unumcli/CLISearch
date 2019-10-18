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
		helper.saveComponentHealer(component, event, helper,"pdfForm",'Pdf');
    },
    executeCLISearch_FilterDataEvent : function (component, event, helper) 
    {   
        debugger
        helper.executeCLISearch_FilterDataEvent(component, event, helper);
    },
    executeHideCLISearchEmployeeList : function (component, event, helper) 
    {   
        debugger
        helper.executeHideCLISearchEmployeeList(component, event, helper);
    },
    printDoc : function (component, event, helper) {
       helper.saveComponentHealer(component, event, helper,"pdfForm",'Print');
    }
})