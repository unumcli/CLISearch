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
    },
    saveComponentHealer : function (component, event, helper,auraid,type){
        debugger
        if(component.get("v.toogleClaimsModal")){
            var element = component.find(auraid).getElements()[0].innerHTML;
            var data = [];
            var obj = {};
            obj.sobjectType ="PDFStorage__c";
            obj.Content__c = element;
            data.push(obj);
            helper.savePDFHTML(component, event, helper,"saveHTML",data,type);
        }
    },
    savePDFHTML :function (component, event, helper,methodName,data,type){
        var action = component.get("c."+methodName);
        action.setParams({"sObjectList":data});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state =="SUCCESS"){
                var result = response.getReturnValue();
                if(result[0].Id && type == 'Pdf'){
                    var recordId=result[0].Id;
                    window.open('/apex/UNUM_ClaimPDFCreation?recordId='+recordId);  
                }
                if(result[0].Id && type == 'Print'){
                    var recordId=result[0].Id;
                    window.open('/apex/UNUM_ClaimPrintCreation?recordId='+recordId);  
                }
            }else{
                console.log(result.getError()) 
            }
        });
        $A.enqueueAction(action); 
    }
})