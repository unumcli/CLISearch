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
    },
     saveComponentHealer : function (component, event, helper,auraid,type){
        debugger
        if(component.get("v.toogleLeavesModal")){
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
                    window.open('/apex/UNUM_LeavePDFCreation?recordId='+recordId);  
                }
                if(result[0].Id && type == 'Print'){
                    var recordId=result[0].Id;
                    window.open('/apex/UNUM_LeavePrintCreation?recordId='+recordId);  
                }
            }else{
                console.log(result.getError()) 
            }
        });
        $A.enqueueAction(action); 
    }
})