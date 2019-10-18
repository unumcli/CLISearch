({
	onKeyUp : function(component, event, helper) {
        var searchText = component.find("inputElement").getElements()[0].value;
        if(helper.validateSearchText(component, event, helper,searchText)){
            if(searchText.length >= 2 ){
                var items = component.get("v.allRecords");
                component.set("v.showLabel",'Searching...')
                component.set("v.show",true);
                if(items.length == 0){
                    component.set("v.itemList",[]);
                    component.set("v.allRecords",[]);
                    var cmpEvent = component.getEvent("onSearch");
                    cmpEvent.setParams({
                        "searchText" : searchText
                    });
                    cmpEvent.fire();
                }else{
                    helper.filterRecords(component, event, helper,searchText);
                }
            }else{
                component.set("v.allRecords",[]);
                component.set("v.itemList",[]);
                component.set("v.show",false); 
            } 
        }
	},
    onselect :  function(component, event, helper) {
        var selectedItem = component.get("v.itemList")[event.currentTarget.getAttribute("data-index")]//alert(2);//;
        var visibleProperty = component.get("v.visibleProperty");
        component.set("v.searchText",null);
        component.set("v.searchText",selectedItem[visibleProperty]);
        component.set("v.selectedItem",selectedItem);
        component.set("v.show",false);
        var cmpEvent = component.getEvent("onSelect");
        cmpEvent.setParams({
            "selectedItem" : selectedItem
        });
        cmpEvent.fire();
    },
    onRemove :  function(component, event, helper) {
        component.set("v.searchText",null);
        component.set("v.selectedItem",null);
        component.set("v.show",false);
        var cmpEvent = component.getEvent("onRemove");
        cmpEvent.fire();
    },
    setItemList : function(component, event, helper) {
        var params = event.getParam('arguments');
        if(params.itemsList.length == 0){
            component.set("v.showLabel",'No Matchd Data Found')
        }
        component.set("v.allRecords",params.itemsList);
        component.set("v.itemList",params.itemsList);
    }
})