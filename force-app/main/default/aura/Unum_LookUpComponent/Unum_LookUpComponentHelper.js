({
	filterRecords : function(component, event, helper,searchText) {
		var allRecords = component.get("v.allRecords");
        var filteredData = [];
        for(var i=0;i<allRecords.length;i++){
            var item = allRecords[i];
            if(item[component.get("v.visibleProperty")].toLowerCase().includes(searchText.toLowerCase())){
                filteredData.push(item);
            }
        }
        if(filteredData.length == 0){
            component.set("v.showLabel",'No Matchd Data Found')
            component.set("v.itemList",[]) 
        }else{
            component.set("v.itemList",filteredData);   
        }
	},
    validateSearchText : function(component, event, helper,searchText) {
        if(searchText && searchText.trim().length>0){
            var patternLastname = new RegExp("^[A-Za-z]+$");;
            if(patternLastname.test(searchText)){
                component.set("v.error",false);
                return true;
            }else{
                component.set("v.error",true);
                component.set("v.errorMessage",'Number and special character not allowed');
                component.set("v.itemList",[]);
                component.set("v.show",false); 
                return false;
            }  
        }
    },
    showToast : function(component, event, helper,title,message,type) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode":"dismissible",
            "title": title,
            "type":type,
            "message": message
        });
        toastEvent.fire();
    }
})