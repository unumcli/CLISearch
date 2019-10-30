({
	scriptsLoaded : function(component, event, helper)
    {
        helper.scriptsLoaded(component, event, helper);
    },
    
  /*  doInit : function(component,event,helper)
    {
        helper.doInit(component,event,helper);
    }, */

    fetchEmpData : function(component, event, helper)
    {
        helper.fetchEmpData(component, event, helper);
    },
    
    onNext : function(component, event, helper) 
    {
        helper.buildData(component, helper);
        helper.onNext(component, event, helper);
    },
    
    onPrev : function(component, event, helper)
    {
		helper.onPrev(component, event, helper);
        helper.buildData(component, helper);
    },
    
    processMe : function(component, event, helper) {
        debugger
        component.set("v.currentPageNumber", parseInt(event.target.name));
        helper.buildData(component, helper);
    },
    
    onFirst : function(component, event, helper)
    {
		helper.onFirst(component, event, helper);
        helper.buildData(component, helper);
    },
    
    onLast : function(component, event, helper)
    {
		helper.onLast(component, event, helper);
        helper.buildData(component, helper);
    },
    
   selectedClaimDetails : function(component, event, helper) 
    {
        debugger
        helper.selectedClaimDetails(component, event, helper);
    },
    
   selectedLeaveDetails : function(component, event, helper)
    {
        debugger
		helper.selectedLeaveDetails(component, event, helper);
    },
    
    loadJquery : function(component, event, helper) {
    	helper.loadJquery(component, event, helper);
    },
    
    setDateFormat : function(component, event, helper) 
    {
        helper.setDateFormat(component, event, helper); 
    },
    
   downloadCSV : function(component, event, helper) 
    {
        var csvFile;
        var downloadLink;
        csvFile = new Blob([csv],{type:"text/csv"});
        downloadLink = document.createElement("a");
        downloadLink.download = filename;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        
        document.body.appendChild(downloadLink);
        downloadLink.click()
    },
    
    exportTableToCSV : function(component, event, helper) 
    {
        debugger
        var csv=[];
        var rows = document.querySelectorAll("table tr");
        
        for(var i=0; i<rows.length;i++)
        {
            var row = [],cols = rows[i].querySelectorAll("td,th");
            for(var j=0;j<cols.length;j++)
                row.push(cols[j].innerText);
            
            csv.push(row.join(","));
        }
        
       // downloadCSV(csv.join("\n"),filename);
        
   //     var csvFile;
     //   var downloadLink;
        var csv = csv.join("\n");
        
     //   for(const row of csv){
      //      const values = csv.map(header => {
       //         const val = rows[csv];
       //         const escaped = (''+row[header]).replace('/"/g','\\"');
        //        return `"${escaped}"`;
        //    });
       //     console.log(values.join(','));
     //   }
        
       // csvFile = new Blob([csv],{type:"text/csv"});
       // csvFile = new Blob([csv],{type:"text/csv;charset=utf-8;"});
       // downloadLink = document.createElement("a");
       // downloadLink.download = filename;
       // downloadLink.href = window.URL.createObjectURL(csvFile);
       // downloadLink.style.display = "none";
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'unum'+'.csv'; 
        hiddenElement.click();
     /*   downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        downloadLink.download = "unum";
        hiddenElement.target = '_self';
        document.body.appendChild(downloadLink);
        downloadLink.click(); */
        
      
    },
    exportToPDF : function(component, event, helper) 
    {
        var compEvent = component.getEvent("pdfEvent");
        compEvent.setParams({"type" : "PDF"});
        compEvent.fire();
     },
    print : function(component, event, helper) 
    {
        helper.print(component, event, helper); 
    },
    changeLeaveLabel : function(component, event, helper) 
    {
        debugger
        //b6d991 user-details
        document.getElementsByClassName("user-details")[0].style.cssText ="background:#a1d3ea";
        document.getElementsByClassName("moving-tab")[0].style.cssText ="background:#3273af";
        document.getElementsByClassName("claim_leave_details_area")[0].style.cssText ="border-color:#3273af";
        document.getElementsByClassName("employee_box active")[0].style.cssText ="border-color:#3273af";
        component.set("v.recordTitle", "LEAVE RECORDS");
    },
    changeClaimLabel : function(component, event, helper) 
    {
        debugger
        document.getElementsByClassName("user-details")[0].style.cssText ="background:#b6d991";
        document.getElementsByClassName("moving-tab")[0].style.cssText ="background:#5fa143";
        document.getElementsByClassName("claim_leave_details_area")[0].style.cssText ="border-color:#5fa143";
        document.getElementsByClassName("employee_box active")[0].style.cssText ="border-color:#5fa143";
        component.set("v.recordTitle", "CLAIM RECORDS");
        
    },
    showHideColumns : function(component, event, helper) 
    {
    $(document).ready(function(){
                $('.no').click(function(){
                    $('.moving-tab').css({'left':'50%'}).html('HIDE');
                });
                $('.yes').click(function(){
                    $('.moving-tab').css({'left':'0%'}).html('SHOW');
                });
            });
    }

})