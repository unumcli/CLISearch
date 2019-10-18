({
	CloseLeavePopup : function(component, event, helper) {
		debugger
        component.set("v.toogleLeavesModal",false);
        $(document).ready(function(){
            $('html,body').animate({ScrollTop:0},500).css({'overflow-y':'auto'}); ; 
            $('.overflow-y-scroll').css({'overflow-y':'hidden'}); 
        });
	},
    
    fetchLeaveDetails : function(component, event, helper) {
        debugger
        
         $(document).ready(function(){
                $('html,body').animate({ScrollTop:0},500).css({'overflow-y':'hidden'});
                $('.overflow-y-scroll').css({'overflow-y':'scroll'}); 
            });
        var params = JSON.parse(JSON.stringify(event.getParam('arguments')));
        component.set("v.LeaveDetailsHeader", params.LeaveDetailsHeader);
        component.set("v.LeaveDetailsLeaveSummary", params.LeaveDetailsLeaveSummary);
        component.set("v.LeaveDetailsLeavePeriod", params.LeaveDetailsLeavePeriod);
        component.set("v.LeaveDetailsIntermittentAbsence", params.LeaveDetailsIntermittentAbsence);
        component.set("v.LeaveDetailsProtection", params.LeaveDetailsProtection);
        component.set("v.LeaveDetailsAvailableTime", params.LeaveDetailsAvailableTime);
		component.set("v.toogleLeavesModal",true);
    }
})