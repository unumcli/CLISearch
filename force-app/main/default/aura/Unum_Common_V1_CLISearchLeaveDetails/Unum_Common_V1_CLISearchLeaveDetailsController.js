({
	CloseLeavePopup : function(component, event, helper)
    {
		helper.CloseLeavePopup(component, event, helper);
	},
    
    fetchLeaveDetails : function(component, event, helper) 
    {
      	helper.fetchLeaveDetails(component, event, helper);  
    },
    print : function(component, event, helper)
    {
        helper.saveComponentHealer(component, event, helper,"pdfForm",'Print');
    },
    exportToPDF : function(component, event, helper)
    {
       helper.saveComponentHealer(component, event, helper,"pdfForm",'Pdf');
    },
        
})