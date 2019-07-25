({   
    OnGo:function(component, event, helper) 
    {
        var orgValidity = component.find("selectedOrg").get("v.validity");
       	var searchBoxValidity = component.find("searchBox").get("v.validity");
        if(orgValidity.valid === false || searchBoxValidity.valid === false) 
        {
        	component.set('v.isButtonActive',true);
        	var OrganisationField = component.find("selectedOrg");    
        	OrganisationField.showHelpMessageIfInvalid();
        	var searchBoxField = component.find("searchBox");    
        	searchBoxField.reportValidity();
        }
        else
        {
        	var OrganisationName = component.find("selectedOrg").get("v.value");
        	var searchBy = component.find("searchByValue").get("v.value");
        	var searchBoxValue = component.find("searchBox").get("v.value");
        	var ssnDisplayFormat = component.find("ssnDisplay").get("v.value");
        	var toggleCLISearchEmployeeListFlag = component.get("v.toggleCLISearchEmployeeList");    
        	var EmployeeDetail;
        	//SearchByLastName API Call
        	var actionSearchByLastName = component.get("c.SearchByLastName");
        	actionSearchByLastName.setParams({ userId : "architdutt@gmail.com", organisationId : 1,lastame: searchBoxValue,ssn: "123456789" });
        	$A.enqueueAction(actionSearchByLastName); 
   	    	actionSearchByLastName.setCallback(this, function(response) 
            {
            	var state = response.getState();
            	if (state === "SUCCESS") 
                {
                	console.log("From server: " + response.getReturnValue());
                	component.set("v.EmployeeDetail",response.getReturnValue());    
                	console.log("From v.EmployeeDetail: " + component.get("v.EmployeeDetail"));
                    EmployeeDetail = component.get("v.EmployeeDetail");
                    //Passing the CLISearchAPI Response
                    var appEvent = $A.get("e.c:FormDataEvent");
                    var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "selectedOrg" : OrganisationName , "searchByValue" : searchBy , "searchBox" : searchBoxValue, "ssnDisplay" : ssnDisplayFormat , "showEmployeeListComponent": toggleCLISearchEmployeeListFlag,"EmployeeDetail": EmployeeDetail });
                    appEvent.fire();
                	// You would typically fire a event here to trigger 
                	// client-side notification that the server-side 
                	// action is complete
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
    },
       
    ValidationCheck: function (component,event,helper) 
    {
    	var SearchByInput = component.find('searchByValue').get('v.value');
       	var SearchByInputSource = event.getSource();
       	var SearchedValue = event.getSource().get("v.value");// get the right value
        debugger;
        if(SearchedValue === "") 
        {
            component.set('v.SearchFlag',false);
            component.set('v.isButtonActive',true);
        }
        else 
        {
        	component.set('v.SearchFlag',true);
            if(((component.get('v.OrganisationFlag'))===true && (component.get('v.SearchFlag')===true))) 
            {
              	component.set('v.isButtonActive',false);  
            }
            else 
            {
                component.set('v.isButtonActive',true);
            }
        }
        if(component.get('v.SearchFlag') && component.get('v.SearchFlag'))  
        	var SearchByInput = component.find('searchByValue').get('v.value');
        if(SearchByInput==="LastName") 
        {
        	var SearchBoxInput = component.find('searchBox').get('v.value');
			var patternLastname = new RegExp("^[A-Za-z]+$");
        	var res = patternLastname.test(SearchBoxInput);
  		 	if(res == true)
        	{
        		SearchByInputSource.setCustomValidity(''); //do not get any message
        		SearchByInputSource.reportValidity();
        	}
            else if(SearchBoxInput == "") 
            {
                SearchByInputSource.setCustomValidity(''); //do not get any message
        		SearchByInputSource.reportValidity();
            }
        	else  
        	{
             	SearchByInputSource.setCustomValidity('Lastname can have only alphabets'); //do not get any message
             	SearchByInputSource.reportValidity();
        	}            
        }
        else if(SearchByInput==="EEID") 
        {
        	var SearchBoxInput = component.find('searchBox').get('v.value');
			var patternemp = new RegExp("^[0-9]*$");
        	var res = patternemp.test(SearchBoxInput);
        	if(res == true) 
        	{
            	SearchByInputSource.setCustomValidity(''); //do not get any message
    			SearchByInputSource.reportValidity();
        	}
        	else 
            {
            	SearchByInputSource.setCustomValidity('Employee Id must be numeric'); //do not get any message
    			SearchByInputSource.reportValidity();
        	}  
        }
        else if(SearchByInput==="LeaveNumber") 
        {
        	var SearchBoxInput = component.find('searchBox').get('v.value'); 
		   	var patterncl = new RegExp("^[0-9]*$");
       	   	var res = patterncl.test(SearchBoxInput);
        	if(res == false) 
         	{
            	SearchByInputSource.setCustomValidity('Leave number must be numeric'); //do not get any message
             	SearchByInputSource.reportValidity();
        	}
        	else
            {
            	SearchByInputSource.setCustomValidity(''); //do not get any message
    			SearchByInputSource.reportValidity();                
            }
        }
        else if(SearchByInput === "ClaimNumber") {          
           	var SearchBoxInput = component.find('searchBox').get('v.value'); 
		   	var patterncl = new RegExp("^[0-9]*$");
       	   	var res = patterncl.test(SearchBoxInput);
        	if(res == false) 
         	{
             	SearchByInputSource.setCustomValidity('Claim number must be numeric'); //do not get any message
             	SearchByInputSource.reportValidity();
        	}
        	else
            {
            	SearchByInputSource.setCustomValidity(''); //do not get any message
    			SearchByInputSource.reportValidity();                
            }
		}
        else if(SearchByInput === "SSN") 
        {
            var SearchBoxInput = component.find('searchBox').get('v.value');
            var patternssn = new RegExp("^[0-9]{9}$");
            var res = patternssn.test(SearchBoxInput);
        	if(res==true)
       		{
          		console.log("valid ssn");
                SearchByInputSource.setCustomValidity(''); //do not get any message
    			SearchByInputSource.reportValidity();
       	 	}
            else if(SearchBoxInput=="") 
            {                
                SearchByInputSource.setCustomValidity(''); //do not get any message
                SearchByInputSource.reportValidity();
            }
            else 
            {
                SearchByInputSource.setCustomValidity('SSN must have 9 digits and must be numeric'); //do not get any message
                SearchByInputSource.reportValidity();   
            } 
        }
    },
    
    clearSearchInput: function (component, event, helper) {
        debugger;
        component.find("searchBox").set("v.value","");
        var searchBoxValues = component.find("searchBox");
        searchBoxValues.setCustomValidity(''); 
        searchBoxValues.reportValidity();
        component.set('v.SearchFlag',false);
        component.set('v.isButtonActive',true);
    },
    
    ClearSearch: function(component, event, helper){
		debugger
        var clearSearchValues = component.find("searchBox"); 
        clearSearchValues.setCustomValidity(''); 
        clearSearchValues.reportValidity();
        document.getElementById("searchForm").reset();
        component.set('v.SearchFlag',false);
        component.set('v.OrganisationFlag',false);
        component.set('v.isButtonActive',true);
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
    },
    
    onOrgansationChange: function(component, event, helper){
        debugger
        var OrganisationName = component.find("selectedOrg").get("v.value");
        var searchBoxValue = component.find("searchBox").get("v.value");
        if(OrganisationName==='Select Organisation'){
        	component.set('v.OrganisationFlag',false);
        	component.set('v.isButtonActive',true);
        }
        else
        {
        	component.set('v.OrganisationFlag',true); 
            if(((component.get('v.OrganisationFlag'))===true && (component.get('v.SearchFlag')===true))) 
            {
            	component.set('v.isButtonActive',false);  
            }
            else 
            {
                component.set('v.isButtonActive',true);
            }
        }
    },
    
    //this function automatic call by aura:waiting event  
	showSpinner: function(component, event, helper) {
    	//make Spinner attribute true for display loading spinner 
        component.set("v.Spinner", true); 
   	},
    
 	//this function automatic call by aura:doneWaiting event 
    hideSpinner : function(component,event,helper){
    	//make Spinner attribute to false for hide loading spinner    
       	component.set("v.Spinner", false);
    }
 })