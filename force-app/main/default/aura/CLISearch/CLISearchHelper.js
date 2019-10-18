({
	doInit : function(component, event, helper){
        debugger
        
        var emailId = component.get("v.emailId");
        var isUserInternal = component.get("v.isUserInternal");
		//GetAuthorization API Call
        	var actionGetAuthorization = component.get("c.GetAuthorizationInfo");
            actionGetAuthorization.setStorable();
        	actionGetAuthorization.setParams({ emailId : emailId, isUserInternal : isUserInternal});
        	$A.enqueueAction(actionGetAuthorization); 
   	    	actionGetAuthorization.setCallback(this, function(response) 
            {
            	var state = response.getState();
            	if (state === "SUCCESS") 
                {
                	console.log("From server: " + response.getReturnValue());
               //     component.set("v.validLogin",true);
                   // component.set("v.ClaimLeaveList",response.getReturnValue());
                  //  component.set("v.passEmployeeDetail",response.getReturnValue().EmployeeDetail);
                  //  component.set("v.claimLeaveListClaimLeaveData",response.getReturnValue().ClaimLeaveData);     
            	}
            	else if (state === "INCOMPLETE") 
                {
                	// do something
            	}
            	else if (state === "ERROR") 
                {
                	var errors = response.getError();
                	if (errors) 
                    {
                    	if (errors[0] && errors[0].message) 
                        {
                        	console.log("Error message: ");
                    	}
                	} 
                	else 
                	{
                    	console.log("Unknown error");
                	}
            	}
        	});
	},
    
    handleUnum_V1_CLISearch_FilterDataEventComponentEvent : function(component, event, helper) {
        debugger
		var selectedOrgValues = event.getParam("selectedOrgGroup"); 
        var searchByValues = event.getParam("searchByValue");
        var searchBoxValues = event.getParam("searchBox");
        var ssnDisplayValues = event.getParam("ssnDisplay");
        var showEmployeeListComponentValue = event.getParam("showEmployeeListComponent");
        if(showEmployeeListComponentValue == true){
            component.set("v.setResults","NameResults");
        }        
        var EmployeeDetailValues = event.getParam("EmployeeDetail");
        var employeeCount = event.getParam("empCount");
        var FilterDataEventComponent = component.find('CLISearchEmployeeList');
        FilterDataEventComponent.CLISearch_FilterDataEvent(selectedOrgValues,searchByValues,searchBoxValues,ssnDisplayValues,showEmployeeListComponentValue,EmployeeDetailValues,employeeCount);
    },
    
    handleUnum_V1_CLISearch_HideCLISearchEmployeeListEvent : function(component, event, helper) {
        debugger
        var toggleValue = event.getParam("hideEmployeeListComponent");
        if(toggleValue == false){
            component.set("v.setResults","Search");
        }
        var HideCLISearchEmployeeListEventComponent = component.find('CLISearchEmployeeList');
        HideCLISearchEmployeeListEventComponent.HideCLISearchEmployeeList(toggleValue);
    },
    
    handleUnum_V1_CLISearch_ClaimDetailsEvent : function(component, event, helper) {
        debugger               
        var claimDetailsEmployeeDetail = event.getParam("claimDetailsEmployeeDetail");
        var claimDetailsClaimStatus = event.getParam("claimDetailsClaimStatus");
        var claimDetailsPayments = event.getParam("claimDetailsPayments");
        var CLISearchClaimPopupEventComponent = component.find("CLISearchClaimPopup");
        CLISearchClaimPopupEventComponent.ClaimDetailsEvent(claimDetailsEmployeeDetail,claimDetailsClaimStatus,claimDetailsPayments);
    },
    
    handleUnum_V1_CLISearch_LeaveDetailsEvent : function(component, event, helper) {
        debugger               
        var LeaveDetailsHeader = event.getParam("LeaveDetailsHeader");
        var LeaveDetailsLeaveSummary = event.getParam("LeaveDetailsLeaveSummary");
        var LeaveDetailsLeavePeriod = event.getParam("LeaveDetailsLeavePeriod");
        var LeaveDetailsIntermittentAbsence = event.getParam("LeaveDetailsIntermittentAbsence");
        var LeaveDetailsProtection = event.getParam("LeaveDetailsProtection");
        var LeaveDetailsAvailableTime = event.getParam("LeaveDetailsAvailableTime");
        var CLISearchLeavePopupEventComponentt = component.find("CLISearchLeavePopup");
        CLISearchLeavePopupEventComponentt.LeaveDetailsEvent(LeaveDetailsHeader,LeaveDetailsLeaveSummary,LeaveDetailsLeavePeriod,LeaveDetailsIntermittentAbsence,LeaveDetailsProtection,LeaveDetailsAvailableTime);
    }
    
})