({
    executeCLISearch_FilterDataEvent : function (component, event, helper) 
    {   
        debugger
        var params = JSON.parse(JSON.stringify(event.getParam('arguments')));
        component.set("v.selectedOrgEvent", params.selectedOrgGroup);
        component.set("v.searchByValueEvent", params.searchByValue);
        component.set("v.searchBoxEvent", params.searchBox);
        component.set("v.ssnDisplayEvent", params.ssnDisplay);
        component.set("v.EmployeeDetail",params.EmployeeDetail);
        component.set("v.showHideMatchingResults", params.showEmployeeListComponent);
        component.set("v.empCountEvent", params.empCount); 
        component.set("v.CLISearchClaimLeaveListFlag",false);
        component.set("v.enableActiveClass",true);
    },
    
    executeHideCLISearchEmployeeList : function (component, event, helper) 
    {   
        debugger
        var params = JSON.parse(JSON.stringify(event.getParam('arguments')));
        component.set("v.showHideMatchingResults", params.hideEmployeeListComponent);
    },
    
    selectedEmployeeDetails : function(component, event, helper) {
        debugger
        // component.set("v.Spinner", true);
        var lastSelectedEmployee = document.querySelectorAll('.employee_box');
        lastSelectedEmployee.forEach(e => { e.classList.remove('active'); 
                                           document.getElementsByClassName("employee_box")[0].style.cssText ="border-color:#f6f8fa"; })
                                           //lastSelectedEmployee.classList.remove('active');
                                           event.currentTarget.classList.add("active");       
                                           component.set("v.showHideMatchingResults",true);
                                           component.set("v.CLISearchClaimLeaveListFlag",true);
                                           component.set("v.enableActiveClass",false);
                                           var a = component.get('c.loadJquery');
                                           $A.enqueueAction(a);
                                           var selectedEmployeeID = event.currentTarget.getAttribute('data-empDetail-EmployeeID');
                                           var IsClaimOrLeave = parseInt(event.currentTarget.getAttribute('data-empDetail-IsClaimOrLeave'));
                                           var toggleCLISearchClaimLeaveListFlag = component.get("v.CLISearchClaimLeaveListFlag");
                                           var ClaimLeaveList;
                                           var passEmployeeDetail;
                                           
                                           //Passing the date format across the application 
                                           var appEvent = $A.get("e.c:Unum_CLISearch_DateFormat");
                                           var formattedDateTime = "numeric";
                                           appEvent.setParams({"FormattedDateTime": formattedDateTime});
        appEvent.fire();
        
        //GetClaimLeave API Call
        var actionGetClaimLeave = component.get("c.GetClaimLeaveList");
        actionGetClaimLeave.setStorable();
        actionGetClaimLeave.setParams({ userId : "architdutt@gmail.com", organisationId : "1",employeeId: selectedEmployeeID,IsClaimOrLeave: IsClaimOrLeave });
        $A.enqueueAction(actionGetClaimLeave); 
        actionGetClaimLeave.setCallback(this, function(response) 
                                        {
                                            var state = response.getState();
                                            if (state === "SUCCESS") 
                                            {
                                                // console.log("From server: " + response.getReturnValue());
                                                component.set("v.ClaimLeaveList",response.getReturnValue());
                                                component.set("v.passEmployeeDetail",response.getReturnValue().EmployeeDetail);
                                                component.set("v.claimLeaveListClaimLeaveData",response.getReturnValue().ClaimLeaveData);
                                                console.log("From v.ClaimLeaveList: " + component.get("v.ClaimLeaveList"));
                                                // console.log("From v.claimLeaveListEmployeeDetail: " + component.get("v.claimLeaveListEmployeeDetail"));
                                                // console.log("From v.claimLeaveListClaimLeaveData: " + component.get("v.claimLeaveListClaimLeaveData"));
                                                ClaimLeaveList = component.get("v.ClaimLeaveList");
                                                passEmployeeDetail = response.getReturnValue().EmployeeDetail;
                                                var First = passEmployeeDetail.FirstName.charAt(0);
                                                var Last = passEmployeeDetail.LastName.charAt(0);
                                                passEmployeeDetail.Abbr = Last + "" + First; 
                                                if(passEmployeeDetail.MiddleName != " ") {
                                                    var Middle = passEmployeeDetail.MiddleName + ".";
                                                    passEmployeeDetail.middleNameWithDot = Middle; 
                                                }
                                                
                                                
                                                //  var data = JSON.stringify(response.getReturnValue());
                                                //  var url = '/apex/UNM_MainPage?data=' + data; 
                                                //  var urlEvent = $A.get("e.force:navigateToURL");
                                                //  urlEvent.setParams({
                                                //     "url": url
                                                //  });
                                                //  urlEvent.fire(); 
                                                
                                                //Passing the selectedEmployeeDetails Details
                                                // var appEvent = $A.get("e.c:Unum_CLISearch_LoadEmployeeRecordsEvent");
                                                var Unum_CLISearch_LoadEmployeeRecords = component.find("CLISearchClaimLeaveList");
                                                Unum_CLISearch_LoadEmployeeRecords.Unum_CLISearch_LoadEmployeeRecords(selectedEmployeeID,IsClaimOrLeave,ClaimLeaveList,toggleCLISearchClaimLeaveListFlag,ClaimLeaveList.EmployeeDetail,ClaimLeaveList.ClaimLeaveData,passEmployeeDetail);
                                                //appEvent.setParams({ "selectedEmployeeID" : selectedEmployeeID , "IsClaimOrLeave" : IsClaimOrLeave , "toggleCLISearchClaimLeaveListFlag": toggleCLISearchClaimLeaveListFlag,"ClaimLeaveList": ClaimLeaveList,"claimLeaveListEmployeeDetail": ClaimLeaveList.EmployeeDetail,"claimLeaveListClaimLeaveData": ClaimLeaveList.ClaimLeaveData});
                                                //appEvent.fire();
                                                //component.set("v.Spinner", false);
                                            }
                                            else if (state === "INCOMPLETE") 
                                            {
                                                // do something
                                            }
                                                else if (state === "ERROR") 
                                                {
                                                    var errors = response.getError();
                                                    if (errors) 
                                                    {
                                                        if (errors[0] && errors[0].message) 
                                                        {
                                                            console.log("Error message: " + errors[0].message);
                                                        }
                                                    } 
                                                    else 
                                                    {
                                                        console.log("Unknown error");
                                                    }
                                                }
                                        });
    },
    
    loadJquery : function(component, event, helper) {
        debugger
        $(document).ready(function(){ 
            $(this).addClass("active");
        });
    },
    
    iterateEmployeeListMethod : function (component, event, helper){
        debugger
        component.set('v.empNames', response.getReturnValue());
        // component.set('v.empCount', response.getReturnValue());
        
    },
    saveComponentHealer : function (component, event, helper,auraid,type){
        debugger
        if(component.get("v.CLISearchClaimLeaveListFlag")){
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
                    window.open('/apex/UNUM_PDFCreation?recordId='+recordId);  
                }
                if(result[0].Id && type == 'Print'){
                    var recordId=result[0].Id;
                    window.open('/apex/UNUM_PrintCreation?recordId='+recordId);  
                }
            }else{
                console.log(result.getError()) 
            }
        });
        $A.enqueueAction(action); 
    }
})