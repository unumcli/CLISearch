({
	fetchEmpData : function(component, event, helper) {
        debugger
         var selectedEmployeeID = event.getParam("selectedEmployeeID"); 
        var IsClaimOrLeave = event.getParam("IsClaimOrLeave");
        var ClaimLeaveList = event.getParam("ClaimLeaveList");
        var toggleCLISearchClaimLeaveListFlag = event.getParam("toggleCLISearchClaimLeaveListFlag");
       // var claimLeaveListEmployeeDetail = event.getParam("claimLeaveListEmployeeDetail");
        var claimLeaveListClaimLeaveData = event.getParam("claimLeaveListClaimLeaveData");
        // set the handler attributes based on event data
        component.set("v.selectedEmployeeID", selectedEmployeeID);
        component.set("v.IsClaimOrLeave", IsClaimOrLeave);
        component.set("v.ClaimLeaveList", ClaimLeaveList);
        component.set("v.claimLeaveListEmployeeDetail", event.getParam("claimLeaveListEmployeeDetail"));
        component.set("v.claimLeaveListClaimLeaveData", claimLeaveListClaimLeaveData);
        component.set("v.toggleCLISearchClaimLeaveListFlag", toggleCLISearchClaimLeaveListFlag);
        
        
       /* 
         component.set('v.mycolumns', [
            	{label: 'Claim #/Leave #', fieldName: 'ClaimNo', type: 'text'},
                {label: 'Policy Div/Report Group', fieldName: 'PolicyDiv', type: 'text'},
                {label: 'Coverage', fieldName: 'Coverage', type: 'text'},
            	{label: 'Received Date', fieldName: 'ReceivedDate', type: 'text'},
            	{label: 'Disability/Leave Start Date', fieldName: 'Disability', type: 'text'},
            	{label: 'Current Status', fieldName: 'CurrentStatus', type: 'text'},
            	{label: 'RTW Date', fieldName: 'RTWDate', type: 'text'},
            	{label: 'RTW Status', fieldName: 'RTWStatus', type: 'text'}
            ]);
       var action = component.get("c.getEmpData");
        //action.setStorable();
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('Response Time: '+((new Date().getTime())-requestInitiatedTime));
                component.set("v.totalPages", Math.ceil(response.getReturnValue().length/component.get("v.pageSize")));
                component.set("v.ClaimLeaveList", response.getReturnValue());
                component.set("v.currentPageNumber",1);
                helper.buildData(component, helper);
            }
        });
        var requestInitiatedTime = new Date().getTime();
       $A.enqueueAction(action);
       */
        //helper.fetchEmpDataHelper(component, event, helper);
    },
    onNext : function(component, event, helper) {
debugger        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber+1);
        helper.buildData(component, helper);
    },
    
    onPrev : function(component, event, helper) {
debugger        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber-1);
        helper.buildData(component, helper);
    },
    processMe : function(component, event, helper) {
        debugger
        component.set("v.currentPageNumber", parseInt(event.target.name));
        helper.buildData(component, helper);
    },
    
    onFirst : function(component, event, helper) {
debugger        
        component.set("v.currentPageNumber", 1);
        helper.buildData(component, helper);
    },
    onLast : function(component, event, helper) {
debugger        
        component.set("v.currentPageNumber", component.get("v.totalPages"));
        helper.buildData(component, helper);
    },
    
        selectedClaimDetails : function(component, event, helper) {
        debugger
        //GetClaimLeave API Call
        debugger;
            
            var actionGetEmployeeClaimDetail = component.get("c.GetEmployeeClaimDetail");
            actionGetEmployeeClaimDetail.setStorable();
            actionGetEmployeeClaimDetail.setParams({ userId : "architdutt@gmail.com", organisationId : "1",employeeId: "1",IsClaimOrLeave: "1" });
            $A.enqueueAction(actionGetEmployeeClaimDetail);
               actionGetEmployeeClaimDetail.setCallback(this, function(response)
            {
                var state = response.getState();
                if (state === "SUCCESS")
                {
                    //Passing the selectedEmployeeDetails Details
                    var appEvent = $A.get("e.c:ClaimDetailsEvent");
                    appEvent.setParams({ "claimDetailsEmployeeDetail": response.getReturnValue().Header, "claimDetailsClaimStatus": response.getReturnValue().ClaimStatus,"claimDetailsPayments": response.getReturnValue().Payments});
                    appEvent.fire();
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
                            console.log("Error message: " + errors[0].message);
                        }
                    }
                    else
                    {
                        console.log("Unknown error");
                    }
                }
            });
    },
     selectedLeaveDetails : function(component, event, helper) {
        debugger
        //GetClaimLeave API Call
            var actionGetEmployeeLeaveDetail = component.get("c.GetLeaveDetails");
         actionGetEmployeeLeaveDetail.setStorable();
            actionGetEmployeeLeaveDetail.setParams({ userId : "architdutt@gmail.com", organisationId : "1",employeeId: "1",IsClaimOrLeave: "1" });
            $A.enqueueAction(actionGetEmployeeLeaveDetail);
               actionGetEmployeeLeaveDetail.setCallback(this, function(response)
            {
                debugger
                var state = response.getState();
                if (state === "SUCCESS")
                {
                    console.log("From server: " + response.getReturnValue());
                    //Passing the selectedEmployeeDetails Details
                    var appEvent = $A.get("e.c:LeaveDetailsEvent");
                    // var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "LeaveDetailsHeader": response.getReturnValue().Header, "LeaveDetailsLeaveSummary": response.getReturnValue().LeaveSummary, "LeaveDetailsLeavePeriod":response.getReturnValue().LeavePeriod,"LeaveDetailsIntermittentAbsence":response.getReturnValue().IntermittentAbsence,"LeaveDetailsProtection":response.getReturnValue().Protection,"LeaveDetailsAvailableTime":response.getReturnValue().AvailableTime});
                    appEvent.fire();
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
                            console.log("Error message: " + errors[0].message);
                        }
                    }
                    else
                    {
                        console.log("Unknown error");
                    }
                }
            });
    },
    loadJquery : function(component, event, helper) {
    	console.log('loadJquery');
    },
    setDateFormat : function(component, event, helper) {
    debugger
        component.set("v.DefaultDateFormat",event.getParam("FormattedDateTime"));
        
    }
    
    
})