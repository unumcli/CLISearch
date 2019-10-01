({
	onClick : function(component, event, helper) {
        debugger
         component.get("v.menuItems");
       var id = event.target.dataset.menuItemId;
       if (id) {
           component.getSuper().navigate(id);
        }
  },
    onInit: function(component, event, helper) {
        debugger
        
       component.get("v.menuItems");
  }
})