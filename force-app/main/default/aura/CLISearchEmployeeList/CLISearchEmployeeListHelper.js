({
    iterateEmployeeListMethod : function (component, event, helper){
        debugger
        var action = component.get("c.getEmpLists");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.empNames', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);  
    } 
    
   /* iterateEmployeeListMethod : function(component, event, helper) {
            var action = component.get("c.getEmpLists");
            action.setCallback(this,function(response){              
            component.set("v.empNames",response.getReturnValue());     
            });
            //4.ENQUE ACTION
            $A.enqueueAction(action);
 } */
})