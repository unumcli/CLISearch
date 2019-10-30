({
	dateJSON : function(component, event, helper){
        var dateobj = {};
        var params = event.getParam('arguments');
        if (params) {
            dateobj.dateTimeValue=params.dateTimeValue;
            dateobj.isEdit=params.isEdit;
            dateobj.formate=params.formate;
            dateobj.type=params.type;
            component.set("v.dateComponentJSON",dateobj);
            helper.setDate(component, event, helper);        
        
        }

    }
})