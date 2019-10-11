({
	doInit: function (component, event, helper) {
        component.set("v.Title", "Search for Claims & Leaves in Three Steps");
        component.set("v.Path", "SEARCH");
    },
    setPagePath: function (component, event, helper) {
        component.set("v.Title", "Search for Claims & Leaves");
        component.set("v.Path", "SEARCH");
    }
})