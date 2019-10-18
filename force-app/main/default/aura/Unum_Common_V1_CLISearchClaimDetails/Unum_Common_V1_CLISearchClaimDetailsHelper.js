({
	CloseClaimPopup : function(component, event, helper) {
        debugger
        $(document).ready(function(){
            $('html,body').animate({ScrollTop:0},500).css({'overflow-y':'auto'}); ; 
            $('.overflow-y-scroll').css({'overflow-y':'hidden'}); 
        });
        //have to review this code 
        component.set("v.claimDetailsEmployeeDetail", null);
        component.set("v.claimDetailsClaimStatus", null);
        component.set("v.claimDetailsPayments", null);
        //till here 
        component.set("v.toogleClaimsModal",false);
    },

    fetchEmpClaimData : function(component, event, helper) {
        debugger
        $(document).ready(function(){
            $('html,body').animate({ScrollTop:0},500).css({'overflow-y':'hidden'});
            $('.overflow-y-scroll').css({'overflow-y':'scroll'}); 
        });
        var params = JSON.parse(JSON.stringify(event.getParam('arguments')));
        component.set("v.claimDetailsEmployeeDetail", params.claimDetailsEmployeeDetail);
        component.set("v.claimDetailsClaimStatus", params.claimDetailsClaimStatus);
        component.set("v.claimDetailsPayments", params.claimDetailsPayments);
        component.set("v.toogleClaimsModal",true);
        
        
    }
})