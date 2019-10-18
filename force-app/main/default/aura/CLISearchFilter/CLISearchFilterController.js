({   
   doInit:function(component, event, helper) {
       helper.doInit(component, event, helper);
     
	}, 
        onRender : function(component, event, helper) {
        
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
     * */  
    
    onInputChange : function(component, event, helper) {
        
        
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
        
        helper.onRefreshClick(component, event, helper);
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
        
        helper.onClearClick(component, event, helper);
        helper.resetAllFilters(component);
    },
    
    OnGo: function(component, event, helper) 
    {
        debugger
        helper.OnGo(component, event, helper);
    },
       
    ValidationCheck: function (component,event,helper) 
    {
        
		helper.ValidationCheck(component,event,helper);
    },
    
    clearSearchInput: function (component, event, helper)
    {
        
        helper.clearSearchInput(component, event, helper);
    },
    
    ClearSearch: function(component, event, helper)
    {
        
		helper.ClearSearch(component, event, helper);
    },
    
    onInit: function(component, event, helper)
    {
        
       helper.onInit(component, event, helper);
    },
    
    onOrgansationChange: function(component, event, helper)
    {
        
        helper.onOrgansationChange(component, event, helper);
    },
    
    //this function automatic call by aura:waiting event  
	showSpinner: function(component, event, helper) 
    {
		helper.showSpinner(component, event, helper);
   	},
    
 	//this function automatic call by aura:doneWaiting event 
    hideSpinner : function(component,event,helper)
    {
		helper.hideSpinner(component,event,helper);   
    },
    keyPressController : function(component,event,helper)
    {
		debugger
        var searchText = event.target.value;
        var searchBy = "lastName";
        var userId = 0;
        var orgId = 27232;
        if(searchText.length > 2){
        component.set("v.showAutoComplete",true);
            
        //AutoSearch API Call
        	var actionAutoSearch = component.get("c.GetAutoSearch");
            actionAutoSearch.setStorable();
       
        	actionAutoSearch.setParams({ searchBy : searchBy, searchText : searchText,userId : userId,orgId : orgId });
        	$A.enqueueAction(actionAutoSearch); 
   	    	actionAutoSearch.setCallback(this, function(response) 
            {
            	var state = response.getState();
            	if (state === "SUCCESS") 
                {
                	console.log("From server: " + response.getReturnValue());
                    component.set("v.ResultSet1",response.getReturnValue());
                    
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
                        	console.log("Error message: ");
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
    
    scriptsLoaded: function(component,event,helper){
        
        alert("loaded");
    }
    


 })