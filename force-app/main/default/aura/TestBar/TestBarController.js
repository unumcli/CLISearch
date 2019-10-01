({   
     handleNavigation: function(component, event, helper) {
         debugger
        document.querySelectorAll('li').forEach(e => { e.classList.remove('active'); });
        if(event.srcElement.parentElement.childNodes.length === 1)
         {
           event.srcElement.parentNode.classList.add('active');
         }                                            
        event.srcElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('active');
         //
        //event.srcElement.classList.add("active");
       	//achorList.forEach(e => { e.classList.remove('active'); })
         //event.currentTarget.classList.add('active');
         var mainNav = event.currentTarget.getAttribute('data-mainNav');
         var pageReference = {
            type: "comm__namedPage",
    		attributes: {
        		pageName: mainNav
   			 }
        };
        component.set("v.pageReference", pageReference);
        var navService = component.find("navService");
        // Uses the pageReference definition to handle navigation
        var pageReference = component.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    }
})