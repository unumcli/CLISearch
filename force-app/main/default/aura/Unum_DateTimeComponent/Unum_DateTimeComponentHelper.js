({
	setDate : function(component, event, helper) {
		var dateJSON = component.get("v.dateComponentJSON");
        var dateValue = dateJSON.dateTimeValue;
        if( dateJSON.type=="Date"  && dateJSON.formate == 'MM/DD/YYYY'){
            var value = dateValue.split("T");
            var date = value[0];
            var dateItem = date.split('-');
            component.set("v.outputDate",dateItem[1]+'/'+dateItem[2]+'/'+dateItem[0]);
        }
        if( dateJSON.type=="DateTime"  && dateJSON.formate == 'MM/DD/YYYY'){
            var value = dateValue.split("T");
            var value1 = value[1].split("Z");
            var date = value[0];
            var dateItem = date.split('-');
            component.set("v.outputDate",dateItem[1]+'/'+dateItem[2]+'/'+dateItem[0] +' '+ value1[0]);
        }
	}
})