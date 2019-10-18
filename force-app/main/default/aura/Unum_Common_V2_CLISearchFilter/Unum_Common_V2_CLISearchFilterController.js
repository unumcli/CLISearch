({
    doInit:function(component, event, helper)
    {
        debugger
        helper.doInit(component, event, helper); 
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
    
    onRender : function(component, event, helper) 
    {
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
    
    onOrgansationGroupChange: function(component, event, helper)
    {
        debugger
        helper.onOrgansationGroupChange(component, event, helper);
    },
    
    onInputChange : function(component, event, helper) 
    {
        var inputText = event.target.value;
        helper.filterDropDownValues(component, inputText);
    },   
    
    onSelectedInputChange : function(component, event, helper) 
    {
        var inputText = event.target.value;
        helper.filterDropDownValues(component, inputText);
    },
    
    onRefreshClick : function(component, event, helper)
    {
        helper.onRefreshClick(component, event, helper);
        helper.rebuildPicklist(component);
        helper.setPickListName(component, component.get("v.selectedOptions"));
    },
	
    onClearClick : function(component, event, helper) 
    {
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
        debugger
		helper.ValidationCheck(component,event,helper);
    },
    
    clearSearchInput: function (component, event, helper)
    {
        debugger
        helper.clearSearchInput(component, event, helper);
    },
    
    ClearSearch: function(component, event, helper)
    {
        debugger
		helper.ClearSearch(component, event, helper);
    },
    
    onInit: function(component, event, helper)
    {
        
       helper.onInit(component, event, helper);
    },
    
    getResult : function(component, event, helper) 
    {
        var param = event.getParam("searchText");
        helper.getResultHelper(component, event, helper,param,'lastName');
	},
    
    onSelectValue : function (component,event,helper) 
    {
        helper.onSelectValue(component,event,helper);
    },
    
    onRemove :  function (component,event,helper)
    {
		helper.onRemove(component,event,helper);;
    }
    
})