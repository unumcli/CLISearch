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
    scriptsLoaded : function(component, event, helper) 
    {
      helper.scriptsLoaded(component, event, helper); 
    },
    
    executeMyMethod : function (component, event, helper) 
    {
        debugger
        var params = event.getParam('arguments');
        console.log('Param 1: '+ params.param1);
        console.log('Param 2: '+ params.param2);
    }
})