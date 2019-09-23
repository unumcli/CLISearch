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
        
        var LeaveDetailsHeader = event.getParam("LeaveDetailsHeader");
        var LeaveDetailsLeaveSummary = event.getParam("LeaveDetailsLeaveSummary");
        var LeaveDetailsLeavePeriod = event.getParam("LeaveDetailsLeavePeriod");
        var LeaveDetailsIntermittentAbsence = event.getParam("LeaveDetailsIntermittentAbsence");
        var LeaveDetailsProtection = event.getParam("LeaveDetailsProtection");
        var LeaveDetailsAvailableTime = event.getParam("LeaveDetailsAvailableTime");
        
        component.set("v.LeaveDetailsHeader", LeaveDetailsHeader);
        component.set("v.LeaveDetailsLeaveSummary", LeaveDetailsLeaveSummary);
        component.set("v.LeaveDetailsLeavePeriod", LeaveDetailsLeavePeriod);
        component.set("v.LeaveDetailsIntermittentAbsence", LeaveDetailsIntermittentAbsence);
        component.set("v.LeaveDetailsProtection", LeaveDetailsProtection);
        component.set("v.LeaveDetailsAvailableTime", LeaveDetailsAvailableTime);
		component.set("v.toogleLeavesModal",true);
    }
})