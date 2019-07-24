({
    iterateEmployeeListMethod : function (component, event, helper){
        debugger
                component.set('v.empNames', response.getReturnValue());
                component.set('v.empCount', response.getReturnValue());
            
    }
   /* iterateEmployeeListMethod : function (component, event, helper){
        debugger
        var action = component.get("c.getEmpLists");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.empNames', response.getReturnValue());
                component.set('v.empCount', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);  
    } */
})