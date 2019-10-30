({
    scriptsLoaded : function(component, event, helper) {
        debugger
        //alert("Select2 loaded!!");
        // In your Javascript (external .js resource or <script> tag)
        //component.set("v.truthy",true);
        var data = [{id:0,text:'enhancement'},{id:1,text:'bug'},{id:2,text:'duplicate'},{id:3,text:'invalid'},{id:4,text:'wontfix'}];  
        
        //component.set("v.truthy",true);
        $(document).ready(function() { 
           // var $disabledResults = $(".js-example-disabled-results");
          //  $disabledResults.select2({
         //       data: sampleArray
        //    });
            
            $(".js-example-data-array").select2({
                data: data
            })
            component.set("v.truthy",true);
         /*   $(".js-example-data-array-selected").select2({
                data: sampleArray
            })	*/
           // component.set("v.truthy",true);
        });
        
    },
    doInit : function(component, event, helper) {
        //  alert("doInit loaded!!");
        //component.set("v.truthy",true);
        
    },
    filterFunction: function(component, event, helper) {
        let container, input, filter, li, input_val;
        var thisData = event.currentTarget.getAttribute('data-this');
        container = $(this).closest(".searchable");
        input_val = container.find("input").val().toUpperCase();
        
        if (["ArrowDown", "ArrowUp", "Enter"].indexOf(event.key) != -1) {
            keyControl(event, container)
        } else {
            li = container.find("ul li");
            li.each(function (i, obj) {
                if ($(this).text().toUpperCase().indexOf(input_val) > -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
            
            container.find("ul li").removeClass("selected");
            setTimeout(function () {
                container.find("ul li:visible").first().addClass("selected");
            }, 100)
        }
    },
    
    keyControl:function(component, event, helper) {
        var params = event.getParam('arguments');
        if(params) {
            var param1 = params.param1;
            // rest of the code here
        }
    }
    
    
    
    
})