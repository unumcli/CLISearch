({
    fetchCLISearchFormEvent : function(component, event, helper) {
        var selectedOrgValue = event.getParam("selectedOrg");
        var searchByValues = event.getParam("searchByValue");
        var searchBoxValue = event.getParam("searchBox");
        var ssnDisplayValue = event.getParam("ssnDisplay");
        var showEmployeeListComponentValue = event.getParam("showEmployeeListComponent");
        var EmployeeDetailValue = event.getParam("EmployeeDetail");
        // set the handler attributes based on event data
        component.set("v.selectedOrgEvent", selectedOrgValue);
        component.set("v.searchByValueEvent", searchByValues);
        component.set("v.searchBoxEvent", searchBoxValue);
        component.set("v.ssnDisplayEvent", ssnDisplayValue);
        component.set("v.showHideMatchingResults", showEmployeeListComponentValue);
        component.set("v.EmployeeDetail", EmployeeDetailValue);
    },
   
    showHideCLISearchEmployeeListEvent : function(component, event, helper)
    {
        var toggleValue = event.getParam("hideEmployeeListComponent");
        component.set("v.showHideMatchingResults", toggleValue);
    },
   
    selectedEmployeeDetails : function(component, event, helper) {
        debugger
        component.set("v.showHideMatchingResults",true);
        component.set("v.CLISearchClaimLeaveListFlag",true);
        var selectedEmployeeID = event.currentTarget.getAttribute('data-empDetail-EmployeeID');
        var IsClaimOrLeave = event.currentTarget.getAttribute('data-empDetail-IsClaimOrLeave');
        var toggleCLISearchClaimLeaveListFlag = component.get("v.CLISearchClaimLeaveListFlag");
        var ClaimLeaveList;
        //GetClaimLeave API Call
            var actionGetClaimLeave = component.get("c.GetClaimLeaveList");
            actionGetClaimLeave.setParams({ userId : "architdutt@gmail.com", organisationId : 1,employeeId: selectedEmployeeID,IsClaimOrLeave: IsClaimOrLeave });
            $A.enqueueAction(actionGetClaimLeave);
               actionGetClaimLeave.setCallback(this, function(response)
            {
                var state = response.getState();
                if (state === "SUCCESS")
                {
                    console.log("From server: " + response.getReturnValue());
                    component.set("v.ClaimLeaveList",response.getReturnValue());
                    component.set("v.claimLeaveListEmployeeDetail",response.getReturnValue().EmployeeDetail);
                    component.set("v.claimLeaveListClaimLeaveData",response.getReturnValue().ClaimLeaveData);
                    console.log("From v.ClaimLeaveList: " + component.get("v.ClaimLeaveList"));
                    console.log("From v.claimLeaveListEmployeeDetail: " + component.get("v.claimLeaveListEmployeeDetail"));
                    console.log("From v.claimLeaveListClaimLeaveData: " + component.get("v.claimLeaveListClaimLeaveData"));
                    ClaimLeaveList = component.get("v.ClaimLeaveList");
                    //Passing the selectedEmployeeDetails Details
                    var appEvent = $A.get("e.c:LoadEmployeeRecordsEvent");
                    var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "selectedEmployeeID" : selectedEmployeeID , "IsClaimOrLeave" : IsClaimOrLeave , "toggleCLISearchClaimLeaveListFlag": toggleCLISearchClaimLeaveListFlag,"ClaimLeaveList": ClaimLeaveList,"claimLeaveListEmployeeDetail": ClaimLeaveList.EmployeeDetail,"claimLeaveListClaimLeaveData": ClaimLeaveList.ClaimLeaveData   });
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