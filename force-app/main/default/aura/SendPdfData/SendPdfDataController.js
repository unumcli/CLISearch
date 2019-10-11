({
	savePDF : function(component, event, helper) {
        debugger
        var sendData = component.get("c.savePDFAccount");
        var data = "Test data";
        sendData.setParams({ TestData : data});      
        $A.enqueueAction(sendData);
        sendData.setCallback(this, function(response) {
            debugger
            var state = response.getState();
            if (state === "SUCCESS") {
                 var url = '/apex/TextVFPDF';
        		window.open(url, '_self');
                component.set("v.PDFdata",response.getReturnValue());
                console.log('Attachment saved successfully');
                              
            }        
               else {
                        console.log("Unknown error");
                    }
                
        });

    }
})