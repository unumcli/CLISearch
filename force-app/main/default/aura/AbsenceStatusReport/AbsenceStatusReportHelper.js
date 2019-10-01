({
    selectedLeaveDetails : function(component,event,helper) {
       
        debugger
        // GetLeaveDetails API Call
        
       var empId = component.get("v.empId");
       var leaveNo = component.get("v.leaveNo");
        
        var actionGetEmployeeLeaveDetail = component.get("c.GetEmployeeLeaveDetails");
        actionGetEmployeeLeaveDetail.setStorable();
        actionGetEmployeeLeaveDetail.setParams({ userId : "architdutt@gmail.com", organisationId : "1", employeeId: empId, leaveNo : leaveNo });
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
    selectedClaimDetails : function(component,event,helper) {
        debugger
        //GetClaimDetails API Call
        
        var empId = component.get("v.empId");
        var claimNo = component.get("v.claimNo");
        var actionGetEmployeeClaimDetail = component.get("c.GetEmployeeClaimDetail");
        actionGetEmployeeClaimDetail.setStorable();
        actionGetEmployeeClaimDetail.setParams({ userId : "architdutt@gmail.com", organisationId : "1", employeeId: empId, claimNo: claimNo });
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
        
    }
    
})