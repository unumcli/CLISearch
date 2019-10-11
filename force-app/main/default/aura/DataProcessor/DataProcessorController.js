({
 downloadDocument : function(component, event, helper){
debugger
  var sendDataProc = component.get("v.sendData");
  var dataToSend = {
     "label" : "This is test"
  }; //this is data you want to send for PDF generation

  //invoke vf page js method
  saveData(dataToSend, function(){
      alert("inside sendDataProc");
              //handle callback
  });
 },
    downloadDocumentx : function(component, event, helper){
debugger
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
                   
                 
                    var cmpEvent  = component.getEvent("FormDataCompEvent");
                    var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "selectedEmployeeID" : selectedEmployeeID , "IsClaimOrLeave" : IsClaimOrLeave , "toggleCLISearchClaimLeaveListFlag": toggleCLISearchClaimLeaveListFlag,"ClaimLeaveList": ClaimLeaveList,"claimLeaveListEmployeeDetail": ClaimLeaveList.EmployeeDetail,"claimLeaveListClaimLeaveData": ClaimLeaveList.ClaimLeaveData});
                    cmpEvent.fire();
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