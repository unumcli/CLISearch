({
    doInit: function(component, event, helper) {
        component.set("v.ASRurl",'https://public.tableau.com/views/WorldIndicators/GDPpercapita?:embed=y&:display_count=yes&:origin=viz_share_link');
        component.set("v.Spinner", true);
        },

    scriptsLoaded : function(component, event, helper) {
        debugger
        var tempComp = component;
        var tempEvent = event;
        var tempHelp = helper;
        
        console.log("initial value " + component.get("v.var1"));
        
        var placeholderDiv = document.getElementById("vizContainer");
        var options = {
            hideToolbar: false,
            toolbarPosition: tableau.ToolbarPosition.TOP,
            onFirstInteractive: function () {
                debugger                
                console.log("inside onFirstInteractive");   
                console.log(component);
                console.log("get worked " + component.get("v.var1"));
                component.set("v.var1","valueChanged");
                console.log("set worked " + component.get("v.var1")); 
                component.set("v.Spinner", false); 
            }
        };
        
        var viz = new tableau.Viz(placeholderDiv, component.get("v.ASRurl"), options);
            
        viz.addEventListener('marksselection',function(marksEvent){
            debugger
            
        marksEvent.getMarksAsync().then(function(marks)
               {
                  debugger
                  console.log(tempComp);
                   if(marks.length!=0) {
                     var leaveClaimNo, employeeId, coverage;
                     var filterObject = {
                                          'Employee Id': null, 'Claim#/Leave#': null, 'Claim#': null, 'Leave#': null,
                                           'Coverage': null, 'SSN': null };
                                              for (var markIndex = 0; markIndex < marks.length; markIndex++) {
                                               var pairs = marks[markIndex].getPairs();
                                                for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
                                                 var pair = pairs[pairIndex];
                                                  if (pair.fieldName == 'Employee Id') {
                                                    employeeId = pair.formattedValue;
                                                     filterObject['Employee Id'] = employeeId; 
                                                            }
                                                      if (pair.fieldName == 'Coverage') {
                                                        coverage = pair.formattedValue;
                                                         filterObject['Coverage'] = coverage; 
                                                            }
                                                         if (pair.fieldName == 'Claim#/Leave#') {
                                                          leaveClaimNo = pair.formattedValue;
                                                           filterObject['Claim#/Leave#'] = leaveClaimNo; 
                                                              }
                                                          if (pair.fieldName == 'Claim#') {
                                                           leaveClaimNo = pair.formattedValue;
                                                            filterObject['Claim#'] = leaveClaimNo;
                                                              }
                                                            if (pair.fieldName == 'Leave#') {
                                                              leaveClaimNo = pair.formattedValue;
                                                               // sessionStorage.setItem('leaveClaimNo', leaveClaimNo);
                                                               //var leaveClaimNoValue = sessionStorage.getItem('leaveClaimNo');
                                                               filterObject['Leave#'] = leaveClaimNo;
                                                            }
                                                            if (pair.fieldName == 'SSN') {                       
                                                                var selectedSSN = pair.formattedValue;
                                                                filterObject['SSN#'] = selectedSSN;
                                                            }
                                                        }
                                                    }
              debugger                                      
             var filterObjectInJson = JSON.stringify(filterObject);
             var filterObjectInJsonParse = JSON.parse(filterObjectInJson);
             console.log(filterObjectInJson);
             console.log(filterObjectInJsonParse);
             //drillDown(filterObjectInJson);
             sessionStorage.setItem('filterdata', filterObjectInJson);
             console.log(sessionStorage.getItem('filterdata', filterObjectInJson));
             //filterObject['Coverage']=="Leave";
             // help.selectedLeaveDetails();
             var coverageValue = "Leave";//filterObject['Coverage'];                       
             component.set("v.Coverage", coverageValue);
             var empId = "123";//filterObject['Employee Id'];
             component.set("v.empId", empId);
             var claimNo = "111";//filterObject['Claim#'];
              component.set("v.claimNo", claimNo);
              var leaveNo = "222"//filterObject['Leave#'];
              component.set("v.leaveNo", leaveNo);
                        if(coverageValue=="Leave") {
                            component.set("v.isLeave",true);
                            tempHelp.selectedLeaveDetails(tempComp,tempEvent,tempHelp);   
                        }
                        else {
                            component.set("v.isLeave",false);
                            tempHelp.selectedClaimDetails(tempComp,tempEvent,tempHelp); 
                        }   
                   }
                   
               });
            
        });       
    }  
})