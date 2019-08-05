({
	fetchEmpData : function(component, event, helper) {
        debugger
         var selectedEmployeeID = event.getParam("selectedEmployeeID"); 
        var IsClaimOrLeave = event.getParam("IsClaimOrLeave");
        var ClaimLeaveList = event.getParam("ClaimLeaveList");
        var toggleCLISearchClaimLeaveListFlag = event.getParam("toggleCLISearchClaimLeaveListFlag");
        var claimLeaveListEmployeeDetail = event.getParam("claimLeaveListEmployeeDetail");
        var claimLeaveListClaimLeaveData = event.getParam("claimLeaveListClaimLeaveData");
        // set the handler attributes based on event data
        component.set("v.selectedEmployeeID", selectedEmployeeID);
        component.set("v.IsClaimOrLeave", IsClaimOrLeave);
        component.set("v.ClaimLeaveList", ClaimLeaveList);
        component.set("v.claimLeaveListEmployeeDetail", claimLeaveListEmployeeDetail);
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
        component.set("v.toogleClaimsModal",true);
        component.set("v.CLISearchClaimDetailsPopupFlag",true);
      //  var selectedEmployeeID = event.currentTarget.getAttribute('data-empDetail-EmployeeID');
        var toggleCLISearchClaimDetailsFlag = component.get("v.CLISearchClaimDetailsPopupFlag");
   
        var IsClaimOrLeave = event.currentTarget.getAttribute('data-isClaim');
        var ClaimDetails;
        //GetClaimLeave API Call
        debugger;
            var actionGetEmployeeClaimDetail = component.get("c.GetEmployeeClaimDetail");
            actionGetEmployeeClaimDetail.setParams({ userId : "architdutt@gmail.com", organisationId : "1",employeeId: "1",IsClaimOrLeave: "1" });
            $A.enqueueAction(actionGetEmployeeClaimDetail);
               actionGetEmployeeClaimDetail.setCallback(this, function(response)
            {
                var state = response.getState();
                if (state === "SUCCESS")
                {
                    console.log("From server: " + response.getReturnValue());
                    component.set("v.ClaimDetails",response.getReturnValue());
                    component.set("v.claimDetailsEmployeeDetail",response.getReturnValue().EmployeeDetail);
                    component.set("v.claimDetailsClaimStatus",response.getReturnValue().ClaimStatus);
                    component.set("v.claimDetailsPayments",response.getReturnValue().Payments);
                    console.log("From v.ClaimDetails: " + component.get("v.ClaimDetails"));
                    console.log("From v.claimDetailsEmployeeDetail: " + component.get("v.claimDetailsEmployeeDetail"));
                    console.log("From v.claimDetailsClaimStatus: " + component.get("v.claimDetailsClaimStatus"));
                    console.log("From v.claimDetailsPayments: " + component.get("v.claimDetailsPayments"));
                    ClaimDetails = component.get("v.ClaimDetails");
                    //Passing the selectedEmployeeDetails Details
                    var appEvent = $A.get("e.c:ClaimDetailsEvent");
                    // var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "IsClaimOrLeave" : IsClaimOrLeave , "toggleCLISearchClaimDetailsFlag": toggleCLISearchClaimDetailsFlag, "ClaimDetails": ClaimDetails,"claimDetailsEmployeeDetail": ClaimDetails.EmployeeDetail, "claimDetailsClaimStatus": ClaimDetails.ClaimStatus,"claimDetailsPayments": ClaimDetails.Payments});
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
       component.set("v.toogleLeavesModal",true);
       component.set("v.CLISearchLeaveDetailsPopupFlag",true);
      var selectedEmployeeID = event.currentTarget.getAttribute('data-empDetail-EmployeeID');
       
        var toggleCLISearchLeaveDetailsPopupFlag = component.get("v.CLISearchLeaveDetailsPopupFlag");
   
        var IsClaimOrLeave = event.currentTarget.getAttribute('data-empDetail-IsClaimOrLeave');
        var LeaveDetails;
        //GetClaimLeave API Call
            var actionGetEmployeeLeaveDetail = component.get("c.GetLeaveDetails");
            actionGetEmployeeLeaveDetail.setParams({ userId : "architdutt@gmail.com", organisationId : "1",employeeId: "1",IsClaimOrLeave: "1" });
            $A.enqueueAction(actionGetEmployeeLeaveDetail);
               actionGetEmployeeLeaveDetail.setCallback(this, function(response)
            {
                debugger
                var state = response.getState();
                if (state === "SUCCESS")
                {
                    console.log("From server: " + response.getReturnValue());
                    component.set("v.LeaveDetails",response.getReturnValue());
                    component.set("v.LeaveDetailsHeader",response.getReturnValue().Header);
                    component.set("v.LeaveDetailsLeaveSummary",response.getReturnValue().LeaveSummary);
                    
                    console.log("From v.LeaveDetails: " + component.get("v.LeaveDetails"));
                    console.log("From v.LeaveDetailsHeader: " + component.get("v.LeaveDetailsHeader"));
                    console.log("From v.LeaveDetailsLeaveSummary: " + component.get("v.LeaveDetailsLeaveSummary"));
                    
                    LeaveDetails = component.get("v.LeaveDetails");
                    //Passing the selectedEmployeeDetails Details
                    var appEvent = $A.get("e.c:LeaveDetailsEvent");
                    // var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "IsClaimOrLeave" : IsClaimOrLeave ,"toggleCLISearchLeaveDetailsPopupFlag": toggleCLISearchLeaveDetailsPopupFlag, "LeaveDetails": LeaveDetails,"LeaveDetailsHeader": LeaveDetails.Header, "LeaveDetailsLeaveSummary": LeaveDetails.LeaveSummary});
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
    }
    
    
})