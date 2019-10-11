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
        
        const options=[{'Id':1,'Name':'Norton HealthCare'},
                       {'Id':2,'Name':'Organization B'},
                       {'Id':3,'Name':'Organization-C'},
                       {'Id':4,'Name':'Organization-D'},
                       {'Id':5,'Name':'Organization-E'},];
		component.set("v.options", options);  
                       
      const optionsSelected=[{'Id':1,'Name':'Norton HealthCare'},
                       {'Id':2,'Name':'AA New Org'},
                       {'Id':3,'Name':'AB New Org'},];
		component.set("v.optionsSelected", optionsSelected);
 	},
                       
    showSpinner: function(component, event, helper) { 
        component.set("v.Spinner", true); 
   	},
    
 	//this function automatic call by aura:doneWaiting event 
    hideSpinner : function(component,event,helper){   
       	component.set("v.Spinner", false);
    },
                       
    OnNextArrow:function(component, event, helper){
        debugger
        component.find("policyNo").get("v.value");
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
        var OrganisationGroupName = component.find("selectedOrgGroup").get("v.value");
        var searchBoxValue = component.find("searchBox").get("v.value");
        if(OrganisationGroupName==='Select Organization / Group'){
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

  /*  handleSelectedClick: function(component, event, where) {       
        //getting target element of mouse click
        var tempElement1 = event.target;
        
        var outsideComponent1 = true;
        //click indicator
        //1. Drop-Down is clicked
        //2. Option item within dropdown is clicked
        //3. Clicked outside drop-down
        //loop through all parent element
        while(tempElement1){
            if(tempElement1.id === 'list-item'){
                //2. Handle logic when picklist option is clicked
                //Handling option click in helper function
                if(where === 'component'){
                	this.onSelectedOptionClick(component, event.target);
                }
                outsideComponent1 = false;
                break;
            } else if(tempElement1.id === 'dropdown-items'){
                //3. Clicked somewher within dropdown which does not need to be handled
                //Break the loop here
                outsideComponent1 = false;
                break;
            } else if(tempElement1.id === 'picklist-dropdown'){
                //1. Handle logic when dropdown is clicked
                if(where === 'component'){
                	this.onDropDownClick(tempElement1);
                }
                outsideComponent1 = false;
                break;
            }
            //get parent node
            tempElement1 = tempElement1.parentNode;
        }
        if(outsideComponent1){
            this.closeAllDropDown();
        }
    },*/

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
    
  /*  onSelectedOptionClick: function(component, ddOption) {
        
        //get clicked option id-name pair
            var clickedValue = {"Id":ddOption.closest("li").getAttribute('data-list-id'),
                                "Name":ddOption.closest("li").getAttribute('data-list-name')};
        //Get all selected options
        	var selectedOptionsList = component.get("v.selectedOptionsList");
        //Boolean to indicate if value is already present
            var alreadySelected = false;
        
        selectedOptionsList.forEach((option,index) => {
                if(option.Id === clickedValue.Id){
                    //Clicked value already present in the set
                    selectedOptionsList.splice(index, 1);
                    //Make already selected variable true	
                    alreadySelected = true;
                    //remove check mark for the list item
                    ddOption.closest("li").classList.remove('ms-slds-is-selected');
                }
            });
        if(!alreadySelected){
                selectedOptionsList.push(clickedValue);
                //Add check mark for the list item
                 ddOption.closest("li").classList.add('ms-slds-is-selected');
                //css for check mark will come here
            }
        this.setSinglePickListName(component, selectedOptionsList);
    },*/
                       
	closeAllDropDown: function() {
        
        //Close drop down by removing slds class
        Array.from(document.querySelectorAll('#ms-picklist-dropdown')).forEach(function(node){
            node.classList.remove('slds-is-open');
        });
        
      /*  Array.from(document.querySelectorAll('#picklist-dropdown')).forEach(function(node){
            node.classList.remove('ms-slds-is-open');
        });*/
    },   

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
                       
    onRefreshClick : function(component, event, helper) {
         
        //clear selected options
        component.set("v.selectedOptions", []);
        component.set("v.selectedOptionsList", []);
        //Clear check mark from drop down items
        helper.rebuildPicklist(component);
        //Set picklist name
        helper.setPickListName(component, component.get("v.selectedOptions"));
      //  helper.setSinglePickListName(component, component.get("v.selectedOptionsList"));
    },
    
  /*  onSelectedRefreshClick : function(component, event, helper) {
         
        //clear selected options
        component.set("v.selectedOptionsList", []);
        //Clear check mark from drop down items
        helper.rebuildPicklist(component);
        //Set picklist name
        helper.setSinglePickListName(component, component.get("v.selectedOptionsList"));
    },*/
    
    onClearClick : function(component, event, helper) {
        debugger
        //clear filter input box
        component.getElement().querySelector('#ms-filter-input').value = '';
        //reset filter
        helper.resetAllFilters(component);
    },
    
  /*  onSelectedClearClick : function(component, event, helper) {
        debugger
        //clear filter input box
        component.getElement().querySelector('#filter-input').value = '';
        //reset filter
        helper.resetAllFilters(component);
    },*/
        
    rebuildPicklist: function(component) {
        
        var allSelectElements = component.getElement().querySelectorAll("li");
        Array.from(allSelectElements).forEach(function(node){
            node.classList.remove('slds-is-selected');
        });
    },
                       
	setPickListName : function(component, selectedOptions) {
       	
        debugger
        const maxSelectionShow = component.get("v.maxSelectedShow");
        //Set drop-down name based on selected value
        if(selectedOptions.length < 1){
         component.set("v.selectedRelatedOrganisation", component.get("v.selectedValue"));
         } 
        else if(selectedOptions.length > maxSelectionShow){
         component.set("v.selectedRelatedOrganisation", selectedOptions.length+' Options Selected');
         } 
        else{
         var selections = '';
         selectedOptions.forEach(option => {
           selections += option.Name+',';
         });
         component.set("v.selectedRelatedOrganisation", selections.slice(0, -1));
        }
    },
             
  /* setSinglePickListName : function(component, selectedOptionsList) {
       
			const maxSelectionShowList = component.get("v.maxSelectedShowList");
            //Set drop-down name based on selected value
            if(selectedOptionsList.length < 1){
                component.set("v.selectedOrganisationGroup", component.get("v.selectedValueList"));
            } else if(selectedOptionsList.length > maxSelectionShowList){
                component.set("v.selectedOrganisationGroup", selectedOptionsList.length+' Options Selected');
            } else{
                var selections = '';
                selectedOptionsList.forEach(option => {
                    selections += option.Name+',';
                });
                component.set("v.selectedOrganisationGroup", selections.slice(0, -1));
            }
    },*/
             
                          
    resetAllFilters : function(component) {
        this.filterDropDownValues(component, '');
    },
    
    OnGo:function(component, event, helper){
        debugger
	    var organisationGroupValidity = component.find("selectedOrgGroup").get("v.validity");
        var relatedorganisationValidity = document.getElementById("ms-input").value;
        var searchBoxValidity = component.find("searchBox").get("v.validity");
        
        if(organisationGroupValidity.valid === false || searchBoxValidity.valid === false) 
        {
        	component.set('v.isButtonActive',true);
            var SelectOrganisationGroupField = component.find("selectedOrgGroup");    
        	SelectOrganisationGroupField.showHelpMessageIfInvalid();
            var RelatedOrganisationField = component.find("ms-input");   
        	RelatedOrganisationField.showHelpMessageIfInvalid();
        	var searchBoxField = component.find("searchBox");    
        	searchBoxField.reportValidity();
        }
        else
        {   
            var OrganisationGroupName = component.find("selectedOrgGroup").get("v.value");
            var RelatedOrganisationName = document.getElementById("ms-input").value;
            component.get('v.selections'); 
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
                    
                    
                    //Passing the CLISearchAPI Response
                    var appEvent = $A.get("e.c:Unum_CLISearch_FilterDataEvent");
                    var SelectOrganisationField = component.find("selectedOrg");
                    appEvent.setParams({ "selectedOrg" : OrganisationGroupName , "searchByValue" : searchBy , "searchBox" : searchBoxValue, "ssnDisplay" : ssnDisplayFormat , "showEmployeeListComponent": toggleCLISearchEmployeeListFlag,"EmployeeDetail": EmployeeDetail ,"empCount": empCount});
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
             	SearchByInputSource.setCustomValidity('Lastname must be alphabets'); //do not get any message
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
      /*  else if(SearchByInput==="LeaveNumber") 
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
        } */
        else if(SearchByInput === "ClaimNumber") 
        {          
            var SearchBoxInput = component.find('searchBox').get('v.value'); 
            var patterncl = new RegExp("^[0-9]*$");
            var res = patterncl.test(SearchBoxInput);
            if(res == false) 
            {
                 SearchByInputSource.setCustomValidity('Claim/Leave number must be numeric'); //do not get any message
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
        var HideCLISearchEmployeeListEvent = $A.get("e.c:Unum_CLISearch_HideCLISearchEmployeeList");
        component.set("v.toggleCLISearchEmployeeList",false);
        var toggleCLISearchEmployeeListEvent = component.get("v.toggleCLISearchEmployeeList");
        document.getElementById("searchForm").reset();
        HideCLISearchEmployeeListEvent.setParams({ "hideEmployeeListComponent" : toggleCLISearchEmployeeListEvent });
        HideCLISearchEmployeeListEvent.fire();
        component.set("v.toggleCLISearchEmployeeList",true);
        helper.organsationReset(component, event, helper);
        helper.organsationGroupReset(component, event, helper);
    },
    
    onInit: function(component, event, helper){
        debugger
        component.find("searchByValue").set("v.value","LastName");
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
		 
	},
             
   organsationGroupReset : function(component, event, helper) {
       
        var OrganisationGroupName = component.find("selectedOrgGroup").get("v.value");
        var searchBoxValue = component.find("searchBox").get("v.value");
        if(OrganisationName==='Select Organization / Group'){
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