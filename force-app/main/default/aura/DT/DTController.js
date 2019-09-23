({
	scriptsLoaded : function(component, event, helper) {
		alert("Scripts loaded");
        $(document).ready(function() {
    			$('#example').DataTable( {
        			dom: 'Bfrtip',
        			buttons: [
            				'print'
        						]
    			} );
			} );
		}
})