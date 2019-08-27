({   
   doInit:function(component, event, helper) {
        debugger
        const options=[{'Id':1,'Name':'Organization-A'},
                       {'Id':2,'Name':'Organization-B'},
                       {'Id':3,'Name':'Organization-C'},
                       {'Id':4,'Name':'Organization-D'},
                       {'Id':5,'Name':'Organization-E'},
                       {'Id':6,'Name':'Organization-F'},
                       {'Id':7,'Name':'Organization-G'},
                       {'Id':8,'Name':'Organization-H'},
                       {'Id':9,'Name':'Organization-I'},];
        component.set("v.options", options);
     
	},
                       
        onRender : function(component, event, helper) {
        debugger
        if(!component.get("v.initializationCompleted")){
            //Attaching document listener to detect clicks
            component.getElement().addEventListener("click", function(event){
                //handle click component
                helper.handleClick(component, event, 'component');
            });
            //Document listner to detect click outside multi select component
            document.addEventListener("click", function(event){
                helper.handleClick(component, event, 'document');
            });
            //Marking initializationCompleted property true
            component.set("v.initializationCompleted", true);
            //Set picklist name
            helper.setPickListName(component, component.get("v.selectedOptions"));
        }
        
    },
        
    /**
     * This function will be called when input box value change
     * @author - Manish Choudhari
     * */
    onInputChange : function(component, event, helper) {
                       debugger
        //get input box's value
        var inputText = event.target.value;
        //Filter options
        helper.filterDropDownValues(component, inputText);
    },
    
    /**
     * This function will be called when refresh button is clicked
     * This will clear all selections from picklist and rebuild a fresh picklist
     * */
    onRefreshClick : function(component, event, helper) {
                       debugger
        //clear selected options
        component.set("v.selectedOptions", []);
        //Clear check mark from drop down items
        helper.rebuildPicklist(component);
        //Set picklist name
        helper.setPickListName(component, component.get("v.selectedOptions"));
    },
    
    /**
     * This function will be called when clear button is clicked
     * This will clear any current filters in place
     * */
    onClearClick : function(component, event, helper) {
        debugger
        //clear filter input box
        component.getElement().querySelector('#ms-filter-input').value = '';
        //reset filter
        helper.resetAllFilters(component);
    },
    
    OnGo:function(component, event, helper) 
    {
        debugger
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
            var empCount;
        	//SearchByLastName API Call
        	var actionSearchByLastName = component.get("c.SearchByLastName");
        	actionSearchByLastName.setParams({ userId : "architdutt@gmail.com", orgId : 1,searchString: searchBoxValue,searchBy: searchBy });
        	$A.enqueueAction(actionSearchByLastName); 
   	    	actionSearchByLastName.setCallback(this, function(response) 
            {
            	var state = response.getState();
            	if (state === "SUCCESS") 
                {
                    component.set("v.NoSearchResultsFlag",false);
                	console.log("From server: " + response.getReturnValue());
                	component.set("v.EmployeeDetail",response.getReturnValue());    
                    console.log("From v.EmployeeDetail: " + component.get("v.EmployeeDetail").length);
                    empCount = component.get("v.EmployeeDetail").length;
                    EmployeeDetail = (component.get("v.EmployeeDetail"));
                    
                    //for(int i=0;i<=EmployeeDetail.length;i++){
                        
                    //}
                    EmployeeDetail.forEach(e => { 
                        var First = e.FirstName.charAt(0);
                        var Last = e.LastName.charAt(0);
                        e.Abbr = Last + "" + First;
                        console.log(e.Abbr); 
                       })
                    
                    //Passing the CLISearchAPI Response
                    var appEvent = $A.get("e.c:FormDataEvent");
                    var OrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "selectedOrg" : OrganisationName , "searchByValue" : searchBy , "searchBox" : searchBoxValue, "ssnDisplay" : ssnDisplayFormat , "showEmployeeListComponent": toggleCLISearchEmployeeListFlag,"EmployeeDetail": EmployeeDetail ,"empCount": empCount});
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
        debugger
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
        component.set("v.NoSearchResultsFlag",true);
        component.set('v.SearchFlag',false);
        component.set('v.OrganisationFlag',false);
        component.set('v.isButtonActive',true);
        component.find("searchByValue").set("v.value","LastName");
        var HideCLISearchEmployeeListEvent = $A.get("e.c:HideCLISearchEmployeeList");
        component.set("v.toggleCLISearchEmployeeList",false);
        var toggleCLISearchEmployeeListEvent = component.get("v.toggleCLISearchEmployeeList");
        document.getElementById("searchForm").reset();
        HideCLISearchEmployeeListEvent.setParams({ "hideEmployeeListComponent" : toggleCLISearchEmployeeListEvent });
        HideCLISearchEmployeeListEvent.fire();
        component.set("v.toggleCLISearchEmployeeList",true);
        //document.getElementsByName("selectedOrganisation").click();
        //helper.organsationReset(component, event, helper);
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