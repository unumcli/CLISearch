({
    doInit:function(component, event, helper)
    {
        debugger
        helper.doInit(component, event, helper); 
    },

    onRender : function(component, event, helper) {
        
        if(!component.get("v.initializationCompletedList")){
            //Attaching document listener to detect clicks
            component.getElement().addEventListener("click", function(event){
                //handle click component
                helper.handleSelectedClick(component, event, 'component');
            });
            //Document listner to detect click outside multi select component
            document.addEventListener("click", function(event){
                helper.handleSelectedClick(component, event, 'document');
            });
            //Marking initializationCompleted property true
            component.set("v.initializationCompletedList", true);
            //Set picklist name
            helper.setSinglePickListName(component, component.get("v.selectedOptionsList")); 
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
        helper.setSinglePickListName(component, component.get("v.selectedOptionsList"));
    },
    
    /**
     * This function will be called when clear button is clicked
     * This will clear any current filters in place
     * */
    
    onClearClick : function(component, event, helper) {
        
        helper.onClearClick(component, event, helper);
        helper.resetAllFilters(component);
    }
})