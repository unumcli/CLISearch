({
	organsationReset : function(component, event, helper) {
       debugger
        var OrganisationName = component.find("selectedOrg").get("v.value");
        var searchBoxValue = component.find("searchBox").get("v.value");
        if(OrganisationName==='Select Organisation'){
        	component.set('v.OrganisationFlag',false);
        	component.set('v.isButtonActive',true);
        }
        else
        {
        	component.set('v.OrganisationFlag',true); 
            if(((component.get('v.OrganisationFlag'))===true && (component.get('v.SearchFlag')===true))) 
            {
            	component.set('v.isButtonActive',false);  
            }
            else 
            {
                component.set('v.isButtonActive',true);
            }
        }
		 
	}
})