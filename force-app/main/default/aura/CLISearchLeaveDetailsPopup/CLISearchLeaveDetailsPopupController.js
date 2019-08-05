({
	CloseLeavePopup : function(component, event, helper) {
		debugger
        component.set("v.toogleLeavesModal",false);
	},
    
    openLeavePopup : function(component, event, helper) {
		debugger
        component.set("v.toogleLeavesModal",true);
	},
    
    fetchLeaveDetails : function(component, event, helper) {
        debugger
       // var selectedEmployeeID = event.getParam("selectedEmployeeID"); 
        var toggleCLISearchLeaveDetailsPopupFlag = event.getParam("toggleCLISearchLeaveDetailsPopupFlag");
        var IsClaimOrLeave = event.getParam("IsClaimOrLeave");
        var LeaveDetails = event.getParam("ClaimLeaveList");
        var LeaveDetailsHeader = event.getParam("LeaveDetailsHeader");
        var LeaveDetailsLeaveSummary = event.getParam("LeaveDetailsLeaveSummary");
        
        // set the handler attributes based on event data
        
       // component.set("v.selectedEmployeeID", selectedEmployeeID);
        component.set("v.IsClaimOrLeave", IsClaimOrLeave);
        component.set("v.LeaveDetails", ClaimLeaveList);
        component.set("v.LeaveDetailsHeader", LeaveDetailsHeader);
        component.set("v.LeaveDetailsLeaveSummary", LeaveDetailsLeaveSummary);
        component.set("v.toggleCLISearchLeaveDetailsPopupFlag", toggleCLISearchLeaveDetailsPopupFlag);
    }
})