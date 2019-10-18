({
    doInit:function(component, event, helper) 
    {
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
 	},
                       
    showSpinner: function(component, event, helper) 
    { 
        component.set("v.Spinner", true); 
   	},
    
 	//this function automatic call by aura:doneWaiting event 
    hideSpinner : function(component,event,helper)
    {   
       	component.set("v.Spinner", false);
    },
                       
    onOrgansationGroupChange: function(component, event, helper)
	{
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
                       
    handleClick: function(component, event, where)
     {       
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
                       
    onOptionClick: function(component, ddOption) 
    {
        
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
                       
	closeAllDropDown: function() 
    {
        //Close drop down by removing slds class
        Array.from(document.querySelectorAll('#ms-picklist-dropdown')).forEach(function(node){
            node.classList.remove('slds-is-open');
        });
    },   

    onDropDownClick: function(dropDownDiv) 
    {
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
                              
	filterDropDownValues: function(component, inputText) 
    {
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
                       
    onRefreshClick : function(component, event, helper) 
   {
        //clear selected options
        component.set("v.selectedOptions", []);
        component.set("v.selectedOptionsList", []);
        //Clear check mark from drop down items
        helper.rebuildPicklist(component);
        //Set picklist name
        helper.setPickListName(component, component.get("v.selectedOptions"));
      //  helper.setSinglePickListName(component, component.get("v.selectedOptionsList"));
    },
    
    onClearClick : function(component, event, helper) 
    {
        debugger
        //clear filter input box
        component.getElement().querySelector('#ms-filter-input').value = '';
        //reset filter
        helper.resetAllFilters(component);
    },
    
    rebuildPicklist: function(component) 
    {
        var allSelectElements = component.getElement().querySelectorAll("li");
        Array.from(allSelectElements).forEach(function(node){
            node.classList.remove('slds-is-selected');
        });
    },
                       
	setPickListName : function(component, selectedOptions) 
    {
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
                  
    resetAllFilters : function(component) 
    {
        this.filterDropDownValues(component, '');
    },
    
    OnGo:function(component, event, helper)
    {
        debugger
	    var organisationGroupValidity = component.find("selectedOrgGroup").get("v.validity");
        var relatedorganisationValidity = document.getElementById("ms-input").value;
        var searchBoxValidity;
        if(component.find("searchBox")){
            searchBoxValidity = component.find("searchBox").get("v.validity");
        }
        
        if(organisationGroupValidity.valid === false || ((searchBoxValidity &&searchBoxValidity.valid === false) || component.get("v.lastNameValue").trim().length<2)) 
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
            var SelectedOrganisationGroupName = component.find("selectedOrgGroup").get("v.value");
            var RelatedOrganisationName = document.getElementById("ms-input").value;
            component.get('v.selections'); 
        	var searchBy = component.find("searchByValue").get("v.value");
        	var searchBoxValue = searchBy == 'LastName'?component.get("v.lastNameValue"):event.getSource().get("v.value"); //component.find("searchBox").get("v.value");
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
                       if(e.MiddleName != " ") {
                    	var Middle = e.MiddleName + ".";
						e.middleNameWithDot = Middle; 
                    }
                        e.Abbr = Last + "" + First;
                        e.AvatarColor = hexaCode[hexaCodeCount++];						
                       })
                    
                    
                    //Passing the CLISearchAPI Response
                    var FilterDataEvent  = component.getEvent("Unum_V1_CLISearch_FilterDataEvent");
                    var OrganisationField = component.find("selectedOrgGroup");
                    FilterDataEvent.setParams({ "selectedOrgGroup" : SelectedOrganisationGroupName , "searchByValue" : searchBy , "searchBox" : searchBoxValue, "ssnDisplay" : ssnDisplayFormat , "showEmployeeListComponent": toggleCLISearchEmployeeListFlag,"EmployeeDetail": EmployeeDetail ,"empCount": empCount});
                    FilterDataEvent.fire();
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
        var SearchedValue = SearchByInput == 'LastName'?component.get("v.lastNameValue"):event.getSource().get("v.value"); // // get the right value
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
        	var SearchBoxInput =component.get("v.lastNameValue"); //component.find('searchBox').get('v.value');// //
			var patternLastname = new RegExp("^[A-Za-z]+$");
            /*
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
        	} */           
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
       // var clearSearchValues = component.find("searchBox"); 
       // clearSearchValues.setCustomValidity(''); 
       // clearSearchValues.reportValidity();
        component.set("v.NoSearchResultsFlag",true);
        component.set('v.SearchFlag',false);
       // component.set('v.SearchFlag',false);
        component.set('v.OrganisationFlag',false);
        component.set('v.isButtonActive',true);
        component.find("searchByValue").set("v.value","LastName");
        var HideCLISearchEmployeeListEvent = component.getEvent("Unum_V1_CLISearch_HideCLISearchEmployeeListEvent");
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
		 
	},
	getResultHelper : function(component, event, helper,param,searchBy) {
		var action = component.get("c.GetAutoSearch");
        action.setParams({
            "userId":"architdutt@gmail.com",
            "orgId":"1",
            "searchString":param,
            "searchBy":searchBy
        });
        action.setCallback(this,function(response){
            if(response.getState() == 'SUCCESS'){
                var result = response.getReturnValue();
                console.log(result);
                if(searchBy == 'lastName'){
                    var childCmp = component.find("lookupcmp");
                    childCmp.setItemList(result.ResultSet1); 
                }else{
                    
                }
                
            }
        });
        $A.enqueueAction(action); 
	},
    onSelectValue : function (component,event,helper) {
        var param = event.getParam("selectedItem");
        component.set("v.lastNameValue",param.LASTNAME);
        component.set('v.SearchFlag',true);
        component.set('v.isButtonActive',false);
        //helper.ValidationCheck(component,event,helper);
    },
    onRemove :  function (component,event,helper) {
        component.set("v.lastNameValue",'');
        component.set("v.lastNameValue",'');
        component.set('v.SearchFlag',false);
        component.set('v.isButtonActive',true);
    }
})