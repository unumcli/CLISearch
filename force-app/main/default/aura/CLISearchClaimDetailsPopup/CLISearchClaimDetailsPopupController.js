({
	CloseClaimPopup : function(component, event, helper) {
        $(document).ready(function(){
            $('html,body').animate({ScrollTop:0},500).css({'overflow-y':'auto'}); ; 
            $('.overflow-y-scroll').css({'overflow-y':'hidden'}); 
        });
		component.set("v.toogleClaimsModal",false);
	},
    
    fetchEmpClaimData : function(component, event, helper) {
        debugger
         $(document).ready(function(){
                $('html,body').animate({ScrollTop:0},500).css({'overflow-y':'hidden'});
                $('.overflow-y-scroll').css({'overflow-y':'scroll'}); 
            });
        var claimDetailsEmployeeDetail = event.getParam("claimDetailsEmployeeDetail");
        var claimDetailsClaimStatus = event.getParam("claimDetailsClaimStatus");
        var claimDetailsPayments = event.getParam("claimDetailsPayments");
        component.set("v.claimDetailsEmployeeDetail", claimDetailsEmployeeDetail);
        component.set("v.claimDetailsClaimStatus", claimDetailsClaimStatus);
        component.set("v.claimDetailsPayments", claimDetailsPayments);
        component.set("v.toogleClaimsModal",true);
    }
 
})