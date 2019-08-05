({
	CloseClaimPopup : function(component, event, helper) {
		debugger
        component.set("v.toogleClaimsModal",false);
	},
    
    openClaimPopup : function(component, event, helper) {
		debugger
        component.set("v.toogleClaimsModal",true);
	},
    
    fetchEmpClaimData : function(component, event, helper) {
        debugger
       // var selectedEmployeeID = event.getParam("selectedEmployeeID"); 
        var toggleCLISearchClaimDetailsFlag = component.get("v.CLISearchClaimDetailsPopupFlag");
        var IsClaimOrLeave = event.getParam("IsClaimOrLeave");
        var toogleClaimsModalValue = event.getParam("toogleClaimsModal");
        var ClaimDetails = event.getParam("ClaimDetails");
        var claimDetailsEmployeeDetail = event.getParam("claimDetailsEmployeeDetail");
        var claimDetailsClaimStatus = event.getParam("claimDetailsClaimStatus");
        var claimDetailsPayments = event.getParam("claimDetailsPayments");
        // set the handler attributes based on event data
       // component.set("v.selectedEmployeeID", selectedEmployeeID);
        component.set("v.IsClaimOrLeave", IsClaimOrLeave);
        component.set("v.ClaimDetails", ClaimLeaveList);
        component.set("v.claimDetailsEmployeeDetail", claimDetailsEmployeeDetail);
        component.set("v.claimDetailsClaimStatus", claimDetailsClaimStatus);
        component.set("v.claimDetailsPayments", claimDetailsPayments);
        component.set("v.toogleClaimsModal", toogleClaimsModalValue);
        component.set("v.toggleCLISearchClaimDetailsFlag", toggleCLISearchClaimDetailsFlag);
  
    } 
})