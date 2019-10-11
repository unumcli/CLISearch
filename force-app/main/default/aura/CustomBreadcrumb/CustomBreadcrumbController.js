({
	doInit: function (component, event, helper) {
        component.set("v.Title", "Search for Claims &#38; Leaves");
        component.set("v.Path", "SEARCH");
    },
    navigateToCustomPlace1: function (component, event, helper) {
        event.preventDefault();
        alert('CUSTOM PLACE 1');
    },
    navigateToCustomPlace2: function (component, event, helper) {
        event.preventDefault();
        alert('CUSTOM PLACE 2');
    }
})