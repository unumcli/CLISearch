({
	fetchEmpData : function(component, event, helper) {
        debugger
        component.set('v.mycolumns', [
            {label: 'Last Name', fieldName: 'LastName__c', type: 'text'},
                {label: 'First Name', fieldName: 'FirstName__c', type: 'text'},
                {label: 'SSN', fieldName: 'SSN__c', type: 'number'}
            ]);
        var action = component.get("c.getEmpData");
        //action.setStorable();
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('Response Time: '+((new Date().getTime())-requestInitiatedTime));
                component.set("v.totalPages", Math.ceil(response.getReturnValue().length/component.get("v.pageSize")));
                component.set("v.empNames", response.getReturnValue());
                component.set("v.currentPageNumber",1);
                helper.buildData(component, helper);
            }
        });
        var requestInitiatedTime = new Date().getTime();
        $A.enqueueAction(action);
        //helper.fetchEmpDataHelper(component, event, helper);
    },
    onNext : function(component, event, helper) {
debugger        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber+1);
        helper.buildData(component, helper);
    },
    
    onPrev : function(component, event, helper) {
debugger        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber-1);
        helper.buildData(component, helper);
    },
    processMe : function(component, event, helper) {
        debugger
        component.set("v.currentPageNumber", parseInt(event.target.name));
        helper.buildData(component, helper);
    },
    
    onFirst : function(component, event, helper) {
debugger        
        component.set("v.currentPageNumber", 1);
        helper.buildData(component, helper);
    },
    onLast : function(component, event, helper) {
debugger        
        component.set("v.currentPageNumber", component.get("v.totalPages"));
        helper.buildData(component, helper);
    },
})