({
	getResultHelper : function(component, event, helper,param,searchBy) {
		var action = component.get("c.GetAutoSearch");
        action.setParams({
            "userId":"architdutt@gmail.com",
            "orgId":"1",
            "searchString":param,
            "searchBy":searchBy
        });
        action.setCallback(this,function(response){
            if(response.getState() == 'SUCCESS'){
                var result = response.getReturnValue();
                console.log(result);
                if(searchBy == 'lastName'){
                    var childCmp = component.find("lookupcmp");
                    childCmp.setItemList(result.ResultSet1); 
                }else{
                    
                }
                
            }
        });
        $A.enqueueAction(action); 
	}
})