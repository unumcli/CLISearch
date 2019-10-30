({
    CloseClaimPopup : function(component, event, helper) 
    {
   		helper.CloseClaimPopup(component, event, helper);
    },
    
    fetchEmpClaimData : function(component, event, helper)
    {
        helper.fetchEmpClaimData(component, event, helper);
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