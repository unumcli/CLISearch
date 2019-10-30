({
    
    scriptsLoaded : function(component, event, helper) {
       console.log('table Script loaded..'); 
               
    },
    
   fetchEmpData : function(component, event, helper) {
        debugger
        var params = JSON.parse(JSON.stringify(event.getParam('arguments')));      
        component.set("v.selectedEmployeeID", params.selectedEmployeeID);
        component.set("v.IsClaimOrLeave", params.IsClaimOrLeave);
        component.set("v.toggleCLISearchClaimLeaveListFlag", params.toggleCLISearchClaimLeaveListFlag);
        component.set("v.ClaimLeaveList", params.ClaimLeaveList);
        component.set("v.claimLeaveListEmployeeDetail",  params.claimLeaveListEmployeeDetail);
        component.set("v.claimLeaveListClaimLeaveData", params.claimLeaveListClaimLeaveData);
        component.set("v.passEmployeeDetail", params.passEmployeeDetail);
        component.set("v.recordTitle", "CLAIM RECORDS");
     
        setTimeout(function(){
            
            		//$('#table-claim').DataTable().destroy();
            		//$('#table-claim tbody').empty();
                    var claimTable = $('#table-claim').DataTable({
                       // dom: 'Bfrtip',
                        "paging":   true,
        				"ordering": true,
       					"info":     true,
                        "lengthChange": false,
						"pagingType": "full_numbers",
      					"pageLength": 5,
      					"processing": true,
      					//"destroy": true,
      					"searching": false,	
      				    "sorting": true,
                        "retrieve": true
                    });
                    
                    $('a.toggle-vis').on( 'click', function (e) {
                        debugger
        				e.preventDefault();
 
        			// Get the column API object
        			var column = claimTable.column( $(this).attr('data-column') );
 
        			// Toggle the visibility
        			column.visible( ! column.visible() );
   	 				} );
            
            
  /*          var claimTable = $('#table-leave').DataTable({
                       // dom: 'Bfrtip',
                        "paging":   true,
        				"ordering": true,
       					"info":     true,
                        "lengthChange": false,
						"pagingType": "full_numbers",
      					"pageLength": 5,
      				//	"processing": true,
      					"destroy": true,
      					"searching": false,	
      				    "sorting": true,				                       
                    });
               */     
            
            //claimLeaveTable.buttons().container().appendTo( $('#empGridBtn', claimLeaveTable.table().container() ) );
            //.container().appendTo($('#empGridBtn'));  
                    
                    
                    // add lightning class to search filter field with some bottom margin..  
                    $('div.dataTables_filter input').addClass('slds-input');
                    $('div.dataTables_filter input').css("marginBottom", "10px");
                }, 100);
       
       setTimeout(function(){ 
           				//$('#table-leave').DataTable().destroy();
           				//$('#table-leave tbody').empty();
                   		var leaveTable = $('#table-leave').DataTable({
                       // dom: 'Bfrtip',
                        "paging":   true,
        				"ordering": true,
       					"info":     true,
                        "lengthChange": false,
						"pagingType": "full_numbers",
      					"pageLength": 5,
      					"processing": true,
      					//"destroy": true,
      					"searching": false,	
      				    "sorting": true,
                            "retrieve": true
                    });
              
                    
                    $('a.toggle-vis').on( 'click', function (e) {
                        debugger
        				e.preventDefault();
 
        			// Get the column API object
        			var column = leaveTable.column( $(this).attr('data-column') );
 
        			// Toggle the visibility
        			column.visible( ! column.visible() );
   	 				} );

                    // add lightning class to search filter field with some bottom margin..  
                    $('div.dataTables_filter input').addClass('slds-input');
                    $('div.dataTables_filter input').css("marginBottom", "10px");
                }, 100);

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
                    var claimDetailsHeader = response.getReturnValue().Header;
                                       	
                        var First = claimDetailsHeader.FirstName.charAt(0);
                        var Last = claimDetailsHeader.LastName.charAt(0);
                        claimDetailsHeader.Abbr = Last + "" + First; 				
                      

                    //Passing the selectedEmployeeDetails Details
                    
                    var ClaimDetailsEvent = component.getEvent("Unum_V1_CLISearch_ClaimDetailsEvent");
                    ClaimDetailsEvent.setParams({"selectedisClaim" : selectedisClaim , "selectedclaimNumber" : selectedclaimNumber , "claimDetailsEmployeeDetail": claimDetailsHeader, "claimDetailsClaimStatus": response.getReturnValue().ClaimStatus,"claimDetailsPayments": response.getReturnValue().Payments});
                  //  ClaimDetailsEvent.setParams({"claimDetailsEmployeeDetail": response.getReturnValue().Header, "claimDetailsClaimStatus": response.getReturnValue().ClaimStatus,"claimDetailsPayments": response.getReturnValue().Payments});
                    ClaimDetailsEvent.fire();
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
                    var leaveDetailsHeader = response.getReturnValue().Header;
                                       	
                        var First = leaveDetailsHeader.FirstName.charAt(0);
                        var Last = leaveDetailsHeader.LastName.charAt(0);
                        leaveDetailsHeader.Abbr = Last + "" + First;
                    //Passing the selectedEmployeeDetails Details
                    var LeaveDetailsEvent = component.getEvent("Unum_V1_CLISearch_LeaveDetailsEvent");
                    LeaveDetailsEvent.setParams({"selectedisClaim" : selectedisClaim , "selectedleaveNumber" : selectedleaveNumber ,"LeaveDetailsHeader": leaveDetailsHeader, "LeaveDetailsLeaveSummary": response.getReturnValue().LeaveSummary, "LeaveDetailsLeavePeriod":response.getReturnValue().LeavePeriod,"LeaveDetailsIntermittentAbsence":response.getReturnValue().IntermittentAbsence,"LeaveDetailsProtection":response.getReturnValue().Protection,"LeaveDetailsAvailableTime":response.getReturnValue().AvailableTime});
                    LeaveDetailsEvent.fire();
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
    },
    
    print : function(component, event, helper) 
    {
        var compEvent = component.getEvent("printEvent");
        compEvent.setParams({"type" : "PDF"});
        compEvent.fire();
    }
})