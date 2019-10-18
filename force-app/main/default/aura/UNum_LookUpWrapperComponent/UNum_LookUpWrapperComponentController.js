({
	getResult : function(component, event, helper) {
        var param = event.getParam("searchText");
        helper.getResultHelper(component, event, helper,param,'lastName');
	}
})