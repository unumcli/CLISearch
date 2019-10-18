({
	   doInit:function(component, event, helper) {
        debugger
        var isInternal = true; //or false ;
		if (isInternal === true) 
                {
                    component.set("v.isInternal",true);
           	    
                }
           else
           		{
   					component.set("v.isInternal",false);
           		}
    
      /*  var CLISearchRelatedOrgList;
        	//SearchByLastName API Call
        	var actiongetRelatedOrganizationList = component.get("c.getRelatedOrganizationList");
        	//actiongetRelatedOrganizationList.setParams({ userId : "architdutt@gmail.com", orgId : 1,searchString: searchBoxValue,searchBy: searchBy });
        	$A.enqueueAction(actiongetRelatedOrganizationList); 
   	    	actiongetRelatedOrganizationList.setCallback(this, function(response) 
            {
            	var state = response.getState();
            	if (state === "SUCCESS") 
                {
                    //component.set("v.NoSearchResultsFlag",false);
                	console.log("From server: " + response.getReturnValue());
                	component.set("v.CLISearchRelatedOrgList",response.getReturnValue());    
                    console.log("From v.CLISearchRelatedOrgList: " + component.get("v.CLISearchRelatedOrgList"));
                    CLISearchRelatedOrgList = (component.get("v.CLISearchRelatedOrgList"));
                    
                    //for(int i=0;i<=EmployeeDetail.length;i++){
                        
                    //}
                    CLISearchRelatedOrgList.forEach(e => { 
                        var ID = e.OrgID.charAt(0);
                        var Name = e.OrgName.charAt(0);
                        e.Abbr = ID + "" + Name;
                        console.log(e.Abbr); 
                       })
                    
                    //Passing the CLISearchAPI Response
                   var appEvent = $A.get("e.c:Unum_CLISearch_FilterDataEvent");
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
      	},*/
      const options=[{'Id':1,'Name':'Norton'},
                       {'Id':2,'Name':'Organization B'},
                       {'Id':3,'Name':'Organization-C'},
                       {'Id':4,'Name':'Organization-D'},
                       {'Id':5,'Name':'Organization-E'},
                       {'Id':6,'Name':'Organization-F'},
                       {'Id':7,'Name':'Organization-G'},
                       {'Id':8,'Name':'Organization-H'},
                       {'Id':9,'Name':'Organization-I'},];
        component.set("v.options", options);
  },
    
    closeAllDropDown: function() {
        
        //Close drop down by removing slds class
        Array.from(document.querySelectorAll('#ms-picklist-dropdown')).forEach(function(node){
            node.classList.remove('slds-is-open');
        });
    },   
    
    
	/**
     * This function will be called on drop down button click
     * It will be used to show or hide the drop down
     * */
    
    onDropDownClick: function(dropDownDiv) {
        
        //Getting classlist from component
        var classList = Array.from(dropDownDiv.classList);
        if(!classList.includes("slds-is-open")){
            //First close all drp down
            this.closeAllDropDown();
            //Open dropdown by adding slds class
            dropDownDiv.classList.add('slds-is-open');
        } else{
           //Close all drp down
            this.closeAllDropDown();
        }
        
    },     
                       
    /**
     * This function will be called when refresh button is clicked
     * This will clear all selections from picklist and rebuild a fresh picklist
     * */
    
    onRefreshClick : function(component, event, helper) {
         
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
         //component.find("relatedorganizations-filter-input").set("v.value", " ");
        //reset filter
        helper.resetAllFilters(component);
    },
    
   OnNextArrow:function(component, event, helper) 
    {
            debugger
        	component.find("policyno").get("v.value");

        	//SearchByLastName API Call
         /*	var actiongetUserPolicyID = component.get("c.GetUserPolicyID");
        	actiongetUserPolicyID.setParams({ userId : "architdutt@gmail.com", orgId : 1, policyNumber : "", partyId: "" }); 
        	$A.enqueueAction(actiongetUserPolicyID); 
   	    	actiongetUserPolicyID.setCallback(this, function(response) 
            {
            	var state = response.getState();
            	if (state === "SUCCESS") 
                {
                	console.log("From server: " + response.getReturnValue());
                	component.set("v.EmployeeDetail",response.getReturnValue());    
                    EmployeeDetail = (component.get("v.EmployeeDetail"));
                    
                    //Passing the CLISearchAPI Response
                    var appEvent = $A.get("e.c:Unum_CLISearch_FilterDataEvent");
                    // var policyField = component.find("policyId");
                    appEvent.setParams({ "policyId" : PolicyPartyID});
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
        	}); */
      	}, 
    
    OnGo:function(component, event, helper) 
    {
        debugger
        var isInternal = component.get("v.isInternal");
        if(isInternal === true)
        {
        var policyValidity = component.find("policyno").get("v.validity");
        var orgValidity = component.find("selectedOrg").get("v.validity");
        var relatedGroupValidity = document.getElementById("ms-input").value;
       	var searchBoxValidity = component.find("searchBox").get("v.validity");


        if(orgValidity.valid === false || searchBoxValidity.valid === false) 
        {
        	component.set('v.isButtonActive',true);
            var PolicyField = component.find("policyno");    
        	PolicyField.showHelpMessageIfInvalid();
        	var OrganisationField = component.find("selectedOrg");    
        	OrganisationField.showHelpMessageIfInvalid();
            var RelatedGroupOrganisationField = component.find("ms-input");    
        	RelatedGroupOrganisationField.showHelpMessageIfInvalid();
        	var searchBoxField = component.find("searchBox");    
        	searchBoxField.reportValidity();
        }
        else
        {   
            var PolicyNumber = component.find("policyno").get("v.value");
        	var OrganisationName = component.find("selectedOrg").get("v.value");
            debugger
            var RelatedorganisationGroup = document.getElementById("ms-input").value;
            component.get('v.selections');
        	var searchBy = component.find("searchByValue").get("v.value");
        	var searchBoxValue = component.find("searchBox").get("v.value");
        	var ssnDisplayFormat = component.find("ssnDisplay").get("v.value");
        	var toggleCLISearchEmployeeListFlag = component.get("v.toggleCLISearchEmployeeList");    
        	var EmployeeDetail;
            var EmployeeDetail2;
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
                    var hexaCodeCount = 0;  
                    EmployeeDetail.forEach(e => {
                       	if(hexaCodeCount==7){
                        	hexaCodeCount = 0 ;
                    	}                    
                        var hexaCode=["background-color: #f04a4d", "background-color: #f6894c", "background-color: #c14e9d","background-color: #56c8f3", "background-color: #509f4c", "background-color: #843092", "background-color: #6b6d2e"];
                        var First = e.FirstName.charAt(0);
                        var Last = e.LastName.charAt(0);
                        e.Abbr = Last + "" + First;
                        e.AvatarColor = hexaCode[hexaCodeCount++];                    
                        console.log(e.Abbr); 
                        console.log(e.AvatarColor);
                     
                       })
                    //   }
                    
                    //Passing the CLISearchAPI Response
                    var cmpEvent  = component.getEvent("Unum_V1_CLISearch_FilterDataEvent");
                    var OrganisationField = component.find("selectedOrg");
                    cmpEvent.setParams({ "selectedOrg" : OrganisationName , "searchByValue" : searchBy , "searchBox" : searchBoxValue, "ssnDisplay" : ssnDisplayFormat , "showEmployeeListComponent": toggleCLISearchEmployeeListFlag,"EmployeeDetail": EmployeeDetail ,"empCount": empCount});
                    cmpEvent.fire();
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
      }
      else
      {
        var organizationGroupValidity = component.find("Organisationgroup").get("v.validity");
        var relatedGroupValidity =  document.getElementById("ms-input").value;
       	var searchBoxValidity = component.find("searchBox").get("v.validity");
        if(organizationGroupValidity.valid === false)
        {  
            component.set('v.isButtonActive',true);
        	var OrganisationField = component.find("Organisationgroup");    
        	OrganisationField.showHelpMessageIfInvalid();
            var RelatedGroupOrganisationField = component.find("ms-input");    
        	RelatedGroupOrganisationField.showHelpMessageIfInvalid();
        	var searchBoxField = component.find("searchBox");    
        	searchBoxField.reportValidity();   
        }
        else
        {            
            var OrganisationGroupName = component.find("Organisationgroup").get("v.value");
            var RelatedorganisationGroup =  document.getElementById("ms-input").value;
            debugger
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
                   /* var i;
                    var hexaCode="['background-color: #f04a4d', 'background-color:#f6894c', 'background-color:#c14e9d','background-color:#56c8f3', 'background-color:#509f4c', 'background-color:#843092', 'background-color:#6b6d2e']";
                    debugger
                    EmployeeDetail.forEach(e => {
                        var First = e.FirstName.charAt(0);
                        var Last = e.LastName.charAt(0);
                        hexaCode.forEach(h => {
                        e.AvatarColor = hexaCode[h];
                    })
                       // e.AvatarColor = i; 
                        e.Abbr = Last + "" + First;
                        console.log(e.Abbr); 
                       }) */
                       
                    
                    //Passing the CLISearchAPI Response
                    var cmpEvent  = component.getEvent("Unum_V1_CLISearch_FilterDataEvent");
                    var OrganisationField = component.find("Organisationgroup");
                    cmpEvent.setParams({ "selectedOrg" : OrganisationName , "searchByValue" : searchBy , "searchBox" : searchBoxValue, "ssnDisplay" : ssnDisplayFormat , "showEmployeeListComponent": toggleCLISearchEmployeeListFlag,"EmployeeDetail": EmployeeDetail ,"empCount": empCount});
                    cmpEvent.fire();
                	// You would typically fire a event here to trigger 
                	// client-side notification that the server-side 
                	// action is complete
            	} 
            });
         }
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
        component.set("v.toggleCLISearchEmployeeList",false);
       // var HideCLISearchEmployeeListEvent = $A.get("e.c:Unum_CLISearch_HideCLISearchEmployeeList");
        var HideCLISearchEmployeeListEvent  = component.getEvent("Unum_CLISearch_HideCLISearchEmployeeList");
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
    
   onOrgansationGroupChange: function(component, event, helper){
        debugger
        var OrganisationGroupName = component.find("Organisationgroup").get("v.value");
        var searchBoxValue = component.find("searchBox").get("v.value");
        if(OrganisationGroupName==='Organisation/Group'){
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
    
    showSpinner: function(component, event, helper) {
        
    	//make Spinner attribute true for display loading spinner 
        component.set("v.Spinner", true); 
   	},
    
 	//this function automatic call by aura:doneWaiting event 
    hideSpinner : function(component,event,helper){
        
    	//make Spinner attribute to false for hide loading spinner    
       	component.set("v.Spinner", false);
    },
    
                 
    /**
     * This function will handle clicks on within and outside the component
     * */
    
    handleClick: function(component, event, where) {       
        //getting target element of mouse click
        var tempElement = event.target;
        
        var outsideComponent = true;
        //click indicator
        //1. Drop-Down is clicked
        //2. Option item within dropdown is clicked
        //3. Clicked outside drop-down
        //loop through all parent element
        while(tempElement){
            if(tempElement.id === 'ms-list-item'){
                //2. Handle logic when picklist option is clicked
                //Handling option click in helper function
                if(where === 'component'){
                	this.onOptionClick(component, event.target);
                }
                outsideComponent = false;
                break;
            } else if(tempElement.id === 'ms-dropdown-items'){
                //3. Clicked somewher within dropdown which does not need to be handled
                //Break the loop here
                outsideComponent = false;
                break;
            } else if(tempElement.id === 'ms-picklist-dropdown'){
                //1. Handle logic when dropdown is clicked
                if(where === 'component'){
                	this.onDropDownClick(tempElement);
                }
                outsideComponent = false;
                break;
            }
            //get parent node
            tempElement = tempElement.parentNode;
        }
        if(outsideComponent){
            this.closeAllDropDown();
        }
    },
    
    /**
     * This function will be used to filter options based on input box value
     * */
    
    rebuildPicklist: function(component) {
        
        var allSelectElements = component.getElement().querySelectorAll("li");
        Array.from(allSelectElements).forEach(function(node){
            node.classList.remove('slds-is-selected');
        });
    },
    
    
    /**
     * This function will be used to filter options based on input box value
     * */
    
    filterDropDownValues: function(component, inputText) {
        
        var allSelectElements = component.getElement().querySelectorAll("li");
        Array.from(allSelectElements).forEach(function(node){
            if(!inputText){
                node.style.display = "block";
            }
            else if(node.dataset.name.toString().toLowerCase().indexOf(inputText.toString().trim().toLowerCase()) != -1){
                node.style.display = "block";
            } else{
                node.style.display = "none";
            }
        }); 
    },
    
    /**
     * This function clear the filters
     * */
    
    resetAllFilters : function(component) {
        
        this.filterDropDownValues(component, '');
    },
    
    /**
     * This function will set text on picklist
     * */
    
    setPickListName : function(component, selectedOptions) {
       	
        	debugger
			const maxSelectionShow = component.get("v.maxSelectedShow");
            //Set drop-down name based on selected value
            if(selectedOptions.length < 1){
                component.set("v.selectedLabel", component.get("v.selectedValue"));
            } else if(selectedOptions.length > maxSelectionShow){
                component.set("v.selectedLabel", selectedOptions.length+' Options Selected');
            } else{
                var selections = '';
                selectedOptions.forEach(option => {
                    selections += option.Name+',';
                });
                component.set("v.selectedLabel", selections.slice(0, -1));
            }
    },
    
    /**
     * This function will be called when an option is clicked from the drop down
     * It will be used to check or uncheck drop down items and adding them to selected option list
     * Also to set selected item value in input box
     * */
    
    onOptionClick: function(component, ddOption) {
        
            //get clicked option id-name pair
            var clickedValue = {"Id":ddOption.closest("li").getAttribute('data-id'),
                                "Name":ddOption.closest("li").getAttribute('data-name')};
            //Get all selected options
            var selectedOptions = component.get("v.selectedOptions");
            //Boolean to indicate if value is already present
            var alreadySelected = false;
            //Looping through all selected option to check if clicked value is already present
            selectedOptions.forEach((option,index) => {
                if(option.Id === clickedValue.Id){
                    //Clicked value already present in the set
                    selectedOptions.splice(index, 1);
                    //Make already selected variable true	
                    alreadySelected = true;
                    //remove check mark for the list item
                    ddOption.closest("li").classList.remove('slds-is-selected');
                }
            });
            //If not already selected, add the element to the list
            if(!alreadySelected){
                selectedOptions.push(clickedValue);
                //Add check mark for the list item
                 ddOption.closest("li").classList.add('slds-is-selected');
                //css for check mark will come here
            }
        //Set picklist label
        this.setPickListName(component, selectedOptions);
    },
                 
    organsationReset : function(component, event, helper) {
       
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
		 
	}
})