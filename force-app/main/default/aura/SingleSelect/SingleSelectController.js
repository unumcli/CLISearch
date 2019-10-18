({
	scriptsLoaded : function(component, event, helper) {
		console.log("scripts loaded!!");
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