({
    doInit:function(component, event, helper) {
        debugger
  
        
        const optionsSelected=[{'Id':1,'Name':'Norton HealthCare'},
                               {'Id':2,'Name':'AA New Org'},
                               {'Id':3,'Name':'AB New Org'},];
        component.set("v.optionsSelected", optionsSelected);
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
        component.set("v.selectedOptionsList", []);
        //Clear check mark from drop down items
        helper.rebuildPicklist(component);
        //Set picklist name
        helper.setSinglePickListName(component, component.get("v.selectedOptionsList"));
    },
    
    /**
     * This function will be called when clear button is clicked
     * This will clear any current filters in place
     * */
    
    onClearClick : function(component, event, helper) {
        
        //clear filter input box
        component.getElement().querySelector('#ms-filter-input').value = '';
        //reset filter
        helper.resetAllFilters(component);
    },
    /**
     * This function will handle clicks on within and outside the component
     * */
    
    handleSelectedClick: function(component, event, where) {       
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
    
    setSinglePickListName : function(component, selectedOptionsList) {
       
			const maxSelectionShow = component.get("v.maxSelectedShow");
            //Set drop-down name based on selected value
            if(selectedOptionsList.length < 1){
                component.set("v.selectedOrganisationGroup", component.get("v.selectedValueList"));
            } else if(selectedOptionsList.length > maxSelectionShow){
                component.set("v.selectedOrganisationGroup", selectedOptionsList.length+' Options Selected');
            } else{
                var selections = '';
                selectedOptionsList.forEach(option => {
                    selections += option.Name+',';
                });
                component.set("v.selectedOrganisationGroup", selections.slice(0, -1));
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
            var selectedOptionsList = component.get("v.selectedOptionsList");
            //Boolean to indicate if value is already present
            var alreadySelected = false;
            //Looping through all selected option to check if clicked value is already present
            selectedOptionsList.forEach((option,index) => {
                if(option.Id === clickedValue.Id){
                    //Clicked value already present in the set
                    selectedOptionsList.splice(index, 1);
                    //Make already selected variable true	
                    alreadySelected = true;
                    //remove check mark for the list item
                    ddOption.closest("li").classList.remove('slds-is-selected');
                }
            });
            //If not already selected, add the element to the list
            if(!alreadySelected){
                selectedOptionsList.push(clickedValue);
                //Add check mark for the list item
                 ddOption.closest("li").classList.add('slds-is-selected');
                //css for check mark will come here
            }
        //Set picklist label
        this.setSinglePickListName(component, selectedOptionsList);
    },
                               
                               
})