({
    fetchCLISearchFormEvent : function(component, event, helper) {
        debugger
        var selectedOrgValue = event.getParam("selectedOrg"); 
        var searchByValues = event.getParam("searchByValue");
        var searchBoxValue = event.getParam("searchBox");
        var ssnDisplayValue = event.getParam("ssnDisplay");
        var showEmployeeListComponentValue = event.getParam("showEmployeeListComponent");
        var EmployeeDetailValue = event.getParam("EmployeeDetail");
        var employeeCount = event.getParam("empCount");
        // set the handler attributes based on event data
        component.set("v.selectedOrgEvent", selectedOrgValue);
        component.set("v.searchByValueEvent", searchByValues);
        component.set("v.searchBoxEvent", searchBoxValue);
        component.set("v.ssnDisplayEvent", ssnDisplayValue);
        component.set("v.showHideMatchingResults", showEmployeeListComponentValue);
        component.set("v.EmployeeDetail", EmployeeDetailValue);
        component.set("v.empCountEvent", employeeCount);
        component.set("v.CLISearchClaimLeaveListFlag",false);
        component.set("v.enableActiveClass",true);
    },
    showHideCLISearchEmployeeListEvent : function(component, event, helper) 
    {
        debugger
        var toggleValue = event.getParam("hideEmployeeListComponent"); 
        component.set("v.showHideMatchingResults", toggleValue);
    },
    selectedEmployeeDetails : function(component, event, helper) {
        debugger
        var lastSelectedEmployee = document.querySelectorAll('.employee_box');
        lastSelectedEmployee.forEach(e => { e.classList.remove('active'); })
                                           //lastSelectedEmployee.classList.remove('active');
                                           event.currentTarget.classList.add("active");       
                                           component.set("v.showHideMatchingResults",true);
                                           component.set("v.CLISearchClaimLeaveListFlag",true);
                                           component.set("v.enableActiveClass",false);
                                           var a = component.get('c.loadJquery');
                                           $A.enqueueAction(a);
                                           var selectedEmployeeID = event.currentTarget.getAttribute('data-empDetail-EmployeeID');
                                           var IsClaimOrLeave = parseInt(event.currentTarget.getAttribute('data-empDetail-IsClaimOrLeave'));
                                           var toggleCLISearchClaimLeaveListFlag = component.get("v.CLISearchClaimLeaveListFlag");
                                           var ClaimLeaveList;
                                           
                                           
                                           //Passing the date format across the application 
                                           var appEvent = $A.get("e.c:Unum_CLISearch_DateFormat");
                                           var formattedDateTime = "numeric";
                                           appEvent.setParams({"FormattedDateTime": formattedDateTime});
        appEvent.fire();
        
        //GetClaimLeave API Call
        var actionGetClaimLeave = component.get("c.GetClaimLeaveList");
        actionGetClaimLeave.setStorable();
        actionGetClaimLeave.setParams({ userId : "architdutt@gmail.com", organisationId : "1",employeeId: selectedEmployeeID,IsClaimOrLeave: IsClaimOrLeave });
        $A.enqueueAction(actionGetClaimLeave); 
        actionGetClaimLeave.setCallback(this, function(response) 
                                        {
                                            var state = response.getState();
                                            if (state === "SUCCESS") 
                                            {
                                                console.log("From server: " + response.getReturnValue());
                                                component.set("v.ClaimLeaveList",response.getReturnValue());
                                                component.set("v.passEmployeeDetail",response.getReturnValue().EmployeeDetail);
                                                component.set("v.claimLeaveListClaimLeaveData",response.getReturnValue().ClaimLeaveData);
                                                console.log("From v.ClaimLeaveList: " + component.get("v.ClaimLeaveList"));
                                                console.log("From v.claimLeaveListEmployeeDetail: " + component.get("v.claimLeaveListEmployeeDetail"));
                                                console.log("From v.claimLeaveListClaimLeaveData: " + component.get("v.claimLeaveListClaimLeaveData"));
                                                ClaimLeaveList = component.get("v.ClaimLeaveList");
                                                
                                                //Passing the selectedEmployeeDetails Details
                                                var appEvent = $A.get("e.c:Unum_CLISearch_LoadEmployeeRecordsEvent");
                                                var OrganisationField = component.find("selectedOrg");
                                                appEvent.setParams({ "selectedEmployeeID" : selectedEmployeeID , "IsClaimOrLeave" : IsClaimOrLeave , "toggleCLISearchClaimLeaveListFlag": toggleCLISearchClaimLeaveListFlag,"ClaimLeaveList": ClaimLeaveList,"claimLeaveListEmployeeDetail": ClaimLeaveList.EmployeeDetail,"claimLeaveListClaimLeaveData": ClaimLeaveList.ClaimLeaveData});
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
        debugger
        $(document).ready(function(){
            $(this).addClass("active");
        });
    },
    
    iterateEmployeeListMethod : function (component, event, helper){
        debugger
        component.set('v.empNames', response.getReturnValue());
        // component.set('v.empCount', response.getReturnValue());
        
    }
})