({
    
    scriptsLoaded : function(component, event, helper) {
        console.log('datatable Script loaded..'); 
    },
    
 
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
        
        setTimeout(function(){ 
                    var claimLeaveTable = $('#tableId').DataTable({
                       // dom: 'Bfrtip',
                        "paging":   true,
        				"ordering": true,
       					"info":     true,
                        "lengthChange": false,
						"pagingType": "full_numbers",
      					"pageLength": 1,
      				//	"processing": true,
      				//	"destroy": true,
      					"searching": false,	
      				    "sorting": true,
				//	buttons: [
                //    'copy', 'csv', 'excel', 'pdf', 'print'
                //			]                        
                    });
                    
                    $('a.toggle-vis').on( 'click', function (e) {
                        debugger
        				e.preventDefault();
 
        			// Get the column API object
        			var column = claimLeaveTable.column( $(this).attr('data-column') );
 
        			// Toggle the visibility
        			column.visible( ! column.visible() );
   	 				} );
                    
            
            //claimLeaveTable.buttons().container().appendTo( $('#empGridBtn', claimLeaveTable.table().container() ) );
            //.container().appendTo($('#empGridBtn'));  
                    
                    
                    // add lightning class to search filter field with some bottom margin..  
                    $('div.dataTables_filter input').addClass('slds-input');
                    $('div.dataTables_filter input').css("marginBottom", "10px");
                }, 500);
   
    },
    
    onNext : function(component, event, helper) {
		debugger        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber+1);
      //  helper.buildData(component, helper);
    },
    
   onPrev : function(component, event, helper) {
		debugger        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber-1);
      //  helper.buildData(component, helper);
    },
    
    processMe : function(component, event, helper) {
        debugger
        component.set("v.currentPageNumber", parseInt(event.target.name));
       // helper.buildData(component, helper);
    },
    
    onFirst : function(component, event, helper) {
		debugger        
        component.set("v.currentPageNumber", 1);
      //  helper.buildData(component, helper);
    },
    
        onLast : function(component, event, helper) {
		debugger        
        component.set("v.currentPageNumber", component.get("v.totalPages"));
        // helper.buildData(component, helper);
    },
    
    selectedClaimDetails : function(component, event, helper) {
        debugger
        

        	var selectedisClaim = event.currentTarget.getAttribute('data-isClaim');
        	var selectedclaimNumber = parseInt(event.currentTarget.getAttribute('data-claimNo'));
        	var selectedEmployeeID = component.get("v.selectedEmployeeID");
        	var ClaimLeaveList;

        //GetClaimDetail API Call
            var actionGetEmployeeClaimDetail = component.get("c.GetEmployeeClaimDetail");
            actionGetEmployeeClaimDetail.setStorable();
            actionGetEmployeeClaimDetail.setParams({ userId : "architdutt@gmail.com", orgId : "1",employeeId: selectedEmployeeID,ClaimNo: selectedclaimNumber });
        	$A.enqueueAction(actionGetEmployeeClaimDetail);
            actionGetEmployeeClaimDetail.setCallback(this, function(response)
            {
                var state = response.getState();
                if (state === "SUCCESS")
                {
                    
                    console.log("From server: " + response.getReturnValue());
                    /* component.set("v.ClaimLeaveList",response.getReturnValue());
                    component.set("v.claimLeaveListEmployeeDetail",response.getReturnValue().EmployeeDetail);
                    component.set("v.claimLeaveListClaimLeaveData",response.getReturnValue().ClaimLeaveData);
                    component.set("v.ClaimLeaveDataClaimData",response.getReturnValue().ClaimData);
                	console.log("From v.ClaimLeaveList: " + component.get("v.ClaimLeaveList"));
                    console.log("From v.claimLeaveListEmployeeDetail: " + component.get("v.claimDetailsEmployeeDetail"));
                    console.log("From v.claimLeaveListClaimLeaveData: " + component.get("v.claimDetailsClaimStatus"));
                    console.log("From v.claimDetailsPayments: " + component.get("v.claimDetailsPayments"));
                    ClaimLeaveList = component.get("v.ClaimLeaveList"); */
                    

                    //Passing the selectedEmployeeDetails Details
                    var appEvent = $A.get("e.c:Unum_CLISearch_ClaimDetailsEvent");
                    appEvent.setParams({"selectedisClaim" : selectedisClaim , "selectedclaimNumber" : selectedclaimNumber , "claimDetailsEmployeeDetail": response.getReturnValue().Header, "claimDetailsClaimStatus": response.getReturnValue().ClaimStatus,"claimDetailsPayments": response.getReturnValue().Payments});
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
        
            var selectedisClaim = event.currentTarget.getAttribute('data-isClaim');
        	var selectedleaveNumber = parseInt(event.currentTarget.getAttribute('data-leaveNo'));
        	var selectedEmployeeID = component.get("v.selectedEmployeeID");
        	var ClaimLeaveList;
        //GetClaimLeave API Call
            var actionGetEmployeeLeaveDetail = component.get("c.GetEmployeeLeaveDetails");
            actionGetEmployeeLeaveDetail.setStorable();
            actionGetEmployeeLeaveDetail.setParams({ userId : "architdutt@gmail.com", orgId : "1",employeeId: selectedEmployeeID,leaveNo: selectedleaveNumber });
        	$A.enqueueAction(actionGetEmployeeLeaveDetail);
               actionGetEmployeeLeaveDetail.setCallback(this, function(response)
            {
                debugger
                var state = response.getState();
                if (state === "SUCCESS")
                {
                    console.log("From server: " + response.getReturnValue());
                    //Passing the selectedEmployeeDetails Details
                    var appEvent = $A.get("e.c:Unum_CLISearch_LeaveDetailsEvent");
                    // var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({"selectedisClaim" : selectedisClaim , "selectedleaveNumber" : selectedleaveNumber ,"LeaveDetailsHeader": response.getReturnValue().Header, "LeaveDetailsLeaveSummary": response.getReturnValue().LeaveSummary, "LeaveDetailsLeavePeriod":response.getReturnValue().LeavePeriod,"LeaveDetailsIntermittentAbsence":response.getReturnValue().IntermittentAbsence,"LeaveDetailsProtection":response.getReturnValue().Protection,"LeaveDetailsAvailableTime":response.getReturnValue().AvailableTime});
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
        
    },
    
    fetchEmpDataHelper : function(component, event, helper) {
        
    },
    buildData : function(component, helper) {
        debugger
        var data = [];
        var pageNumber = component.get("v.currentPageNumber");
        var pageSize = component.get("v.pageSize");
        var allData = component.get("v.empNames");
        var x = (pageNumber-1)*pageSize;
        
        //creating data-table data
        for(; x<=(pageNumber)*pageSize; x++){
            if(allData[x]){
            	data.push(allData[x]);
            }
        }
        component.set("v.data", data);
        
        helper.generatePageList(component, pageNumber);
    },
    generatePageList : function(component, pageNumber){
        debugger
        pageNumber = parseInt(pageNumber);
        var pageList = [];
        var totalPages = component.get("v.totalPages");
        if(totalPages > 1){
            if(totalPages <= 10){
                var counter = 2;
                for(; counter < (totalPages); counter++){
                    pageList.push(counter);
                } 
            } else{
                if(pageNumber < 5){
                    pageList.push(2, 3, 4, 5, 6);
                } else{
                     if(pageNumber>(totalPages-5)){
                        pageList.push(totalPages-5, totalPages-4, totalPages-3, totalPages-2, totalPages-1);
                    } else{
                        pageList.push(pageNumber-2, pageNumber-1, pageNumber, pageNumber+1, pageNumber+2);
                    }
                }
            }
        }
        component.set("v.pageList", pageList);
    }
})