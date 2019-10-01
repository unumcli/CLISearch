({
	fetchEmpData : function(component, event, helper)
    {
        helper.fetchEmpData(component, event, helper);
    },
    
    onNext : function(component, event, helper) 
    {
        helper.buildData(component, helper);
        helper.onNext(component, event, helper);
    },
    
    onPrev : function(component, event, helper)
    {
		helper.onPrev(component, event, helper);
        helper.buildData(component, helper);
    },
    
    processMe : function(component, event, helper) {
        debugger
        component.set("v.currentPageNumber", parseInt(event.target.name));
        helper.buildData(component, helper);
    },
    
    onFirst : function(component, event, helper)
    {
		helper.onFirst(component, event, helper);
        helper.buildData(component, helper);
    },
    
    onLast : function(component, event, helper)
    {
		helper.onLast(component, event, helper);
        helper.buildData(component, helper);
    },
    
   selectedClaimDetails : function(component, event, helper) 
    {
        debugger
        helper.selectedClaimDetails(component, event, helper);
    },
    
   selectedLeaveDetails : function(component, event, helper)
    {
        debugger
		helper.selectedLeaveDetails(component, event, helper);
    },
    
    loadJquery : function(component, event, helper) {
    	helper.loadJquery(component, event, helper);
    },
    
    setDateFormat : function(component, event, helper) 
    {
        helper.setDateFormat(component, event, helper); 
    },
    scriptsLoaded : function(component, event, helper)    
    {
        debugger
        helper.scriptsLoaded(component, event, helper); 
    },
    exportToCSV : function(component, event, helper)    
    {
        debugger
        helper.exportToCSV(component, event, helper); 
    }
    

})