({
    doInit : function(component, event, helper) {
        var childCmp = component.find("dateCmp");
        // call the aura:method in the child component
        childCmp.dateJSON("2019-10-21T06:55:35Z",false,"MM/DD/YYYY","Date");
         childCmp.dateJSON("2019-10-21T06:55:35Z",false,"MM/DD/YYYY","DateTime");
    }
})