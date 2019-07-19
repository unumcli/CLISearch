({   
    OnGo:function(component, event, helper) {
        debugger;
        var orgValidity = component.find("selectedOrg").get("v.validity");
       	var searchBoxValidity = component.find("searchBox").get("v.validity");
        if(orgValidity.valid===false||searchBoxValidity.valid===false) {
        component.set('v.isButtonActive',false);
        var OrganisationField = component.find("selectedOrg");    
        OrganisationField.showHelpMessageIfInvalid();
        var searchBoxField = component.find("searchBox");    
        searchBoxField.reportValidity();
        }
        else{
        debugger
         component.set('v.isButtonActive',false);
        var OrganisationName = component.find("selectedOrg").get("v.value");
        var searchBy = component.find("searchByValue").get("v.value");
        var searchBoxValue = component.find("searchBox").get("v.value");
        var ssnDisplayFormat = component.find("ssnDisplay").get("v.value");
        var toggleCLISearchEmployeeListFlag = component.get("v.toggleCLISearchEmployeeList");    
        
/*        var actionSearchByLastName = component.get("c.SearchByLastName");
        actionSearchByLastName.setParams({ userId : "architdutt@gmail.com",vganisationId : 1,lastName: searchBoxValue,ssn: "123456789" });
        $A.enqueueAction(actionSearchByLastName); */
        
        var appEvent = $A.get("e.c:FormDataEvent");
        var OrganisationField = component.find("selectedOrg");
        appEvent.setParams({ "selectedOrg" : OrganisationName , "searchByValue" : searchBy , "searchBox" : searchBoxValue, "ssnDisplay" : ssnDisplayFormat , "showEmployeeListComponent": toggleCLISearchEmployeeListFlag });
        appEvent.fire();
   	 /*   actionSearchByLastName.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                console.log("From server: " + response.getReturnValue()); 	 	 	
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });     */                  
        }
         
       
    },
   
    
    ValidationCheck: function (component,event,helper) {
       var SearchByInput = component.find('searchByValue').get('v.value');
        
       var SearchByInputSource = event.getSource();
       var SearchedValue = event.getSource().get("v.value"); // get the right value
        debugger;
        if(SearchByInput==="LastName") {
        var SearchBoxInput = component.find('searchBox').get('v.value');
		var patternLastname = new RegExp("^[A-Za-z]+$");
        var res = patternLastname.test(SearchBoxInput);
  		 if(res==true)
        {
        console.log("valid lname");   
        SearchByInputSource.setCustomValidity(''); //do not get any message
        SearchByInputSource.reportValidity();
        }
            else if(SearchBoxInput=="") {
                SearchByInputSource.setCustomValidity(''); //do not get any message
        		SearchByInputSource.reportValidity();
            }
        else  
        {
             SearchByInputSource.setCustomValidity('Lastname can have only alphabets'); //do not get any message
             SearchByInputSource.reportValidity();
        }            
        }
        else if(SearchByInput==="EEID") {
        var SearchBoxInput = component.find('searchBox').get('v.value');
		var patternemp = new RegExp("^[0-9]*$");
        var res = patternemp.test(SearchBoxInput);
        if(res==true) 
        {
            console.log("valid empid");
            SearchByInputSource.setCustomValidity(''); //do not get any message
    		SearchByInputSource.reportValidity();
            
        }
        else {
            SearchByInputSource.setCustomValidity('Employee Id must be numeric'); //do not get any message
    		SearchByInputSource.reportValidity();
        }  
        }
          else if(SearchByInput==="LeaveNumber") {
           var SearchBoxInput = component.find('searchBox').get('v.value'); 
		   var patterncl = new RegExp("^[0-9]*$");
       	   var res = patterncl.test(SearchBoxInput);
        	if(res==false) 
         {
             SearchByInputSource.setCustomValidity('Leave number must be numeric'); //do not get any message
             SearchByInputSource.reportValidity();
        }
        else{
            console.log("valid leave number");
            SearchByInputSource.setCustomValidity(''); //do not get any message
    		SearchByInputSource.reportValidity();                
            }
          }
        else if(SearchByInput==="ClaimNumber") {
           var SearchBoxInput = component.find('searchBox').get('v.value'); 
		   var patterncl = new RegExp("^[0-9]*$");
       	   var res = patterncl.test(SearchBoxInput);
        	if(res==false) 
         {
             SearchByInputSource.setCustomValidity('Claim number must be numeric'); //do not get any message
             SearchByInputSource.reportValidity();
        }
        else{
            console.log("valid claim number");
            SearchByInputSource.setCustomValidity(''); //do not get any message
    		SearchByInputSource.reportValidity();                
            }
          }
              else if(SearchByInput==="SSN") {
                 	 var SearchBoxInput = component.find('searchBox').get('v.value');
                  	 var patternssn = new RegExp("^[0-9]{9}$");
 					 var res = patternssn.test(SearchBoxInput);
        		if(res==true)
       		 {
          	  console.log("valid ssn");
                 SearchByInputSource.setCustomValidity(''); //do not get any message
    			 SearchByInputSource.reportValidity();
       	 }
                  else if(SearchBoxInput=="") {
                SearchByInputSource.setCustomValidity(''); //do not get any message
        		SearchByInputSource.reportValidity();
            }
        	else {
            // alert("ssn can have only 9 digits and must contain numbers only");
             SearchByInputSource.setCustomValidity('SSN must have 9 digits and must be numeric'); //do not get any message
             SearchByInputSource.reportValidity();   
        } 
                  
              }
       component.set('v.isButtonActive',false);
        
    },
    clearSearchInput: function (component, event, helper) {
        debugger;
        component.find("searchBox").set("v.value","");
         var searchBoxValues = component.find("searchBox");
        //var SearchByInputSource = event.getSource();
         searchBoxValues.setCustomValidity(''); 
   		 searchBoxValues.reportValidity();        
		},
    ClearSearch: function(component, event, helper){
        debugger
         var clearSearchValues = component.find("searchBox"); 
         clearSearchValues.setCustomValidity(''); 
   		 clearSearchValues.reportValidity();
        document.getElementById("searchForm").reset();
        component.find("searchByValue").set("v.value","LastName");
        var HideCLISearchEmployeeListEvent = $A.get("e.c:HideCLISearchEmployeeList");
        component.set("v.toggleCLISearchEmployeeList",false);
        var toggleCLISearchEmployeeListEvent = component.get("v.toggleCLISearchEmployeeList");
        HideCLISearchEmployeeListEvent.setParams({ "hideEmployeeListComponent" : toggleCLISearchEmployeeListEvent });
        HideCLISearchEmployeeListEvent.fire();
		component.set("v.toggleCLISearchEmployeeList",true);
                   
    },
    onInit: function(component, event, helper){
        debugger
        component.find("searchByValue").set("v.value","LastName");
    }
   })