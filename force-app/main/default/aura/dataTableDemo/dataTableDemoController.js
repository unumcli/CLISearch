({
	scriptsLoaded : function(component, event, helper) {
        console.log('datatable Script loaded..'); 
    },
    
    doInit : function(component,event,helper){
        //call apex class method
        var action = component.get('c.getEmpLists');
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                //set response value in lstOpp attribute on component.
                component.set('v.empList', response.getReturnValue());
               
               
    				$('#tableId').DataTable( {
        			dom: 'Bfrtip',
        			buttons: [
            			'copy', 'csv', 'excel', 'pdf', 'print'
       				 ]
    				} );
					
                // when response successfully return from server then apply jQuery dataTable after 500 milisecond
         /*       setTimeout(function(){ 
                    var claimLeaveTable = $('#tableId').DataTable({
                        dom: 'Bfrtip',
                        "paging":   true,
        				"ordering": true,
       					"info":     true,
                        "lengthChange": false,
						"pagingType": "full_numbers",
      					"pageLength": 1,
      				//	"processing": true,
      				//	"destroy": true,
      					"searching": false,	
      				    "sorting": true,
					buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                			]                        
                    });
                    
                    $('a.toggle-vis').on( 'click', function (e) {
                        debugger
        				e.preventDefault();
 
        			// Get the column API object
        			var column = claimLeaveTable.column( $(this).attr('data-column') );
 
        			// Toggle the visibility
        			column.visible( ! column.visible() );
   	 				} );
                    
            
            //claimLeaveTable.buttons().container().appendTo( $('#empGridBtn', claimLeaveTable.table().container() ) );
            //.container().appendTo($('#empGridBtn'));  
                    
                    
                    // add lightning class to search filter field with some bottom margin..  
                    $('div.dataTables_filter input').addClass('slds-input');
                    $('div.dataTables_filter input').css("marginBottom", "10px");
                }, 500);
                */
                /*
                setTimeout(function(){ 
                    var claimLeaveTable = $('#tableId').DataTable({
                        "paging":   true,
        				"ordering": true,
       					"info":     true,
                        "lengthChange": false,
						"pagingType": "full_numbers",
      					"pageLength": 5,
      				//	"processing": true,
      				//	"destroy": true,
      					"searching": false,	
      				    "sorting": true,                        
                    });
                    
                    $('a.toggle-vis').on( 'click', function (e) {
                        debugger
        				e.preventDefault();
 
        			// Get the column API object
        			var column = claimLeaveTable.column( $(this).attr('data-column') );
 
        			// Toggle the visibility
        			column.visible( ! column.visible() );
   	 				} );
                    
                   var buttons = new $.fn.dataTable.Buttons(claimLeaveTable, {
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: '<i class="fas fa-file-excel"></i>',
                        titleAttr: 'Download as Excel',
                        filename: function () {
                            return "EmployeeRecord";
                        },
                        title: "Employee Details",
                        messageTop: "Employee Details will come here",
                    },                   
                    {
                        extend: 'pdfHtml5',
                        text: '<i class="fas fa-file-pdf"></i>',
                        titleAttr: 'Download as Pdf',
                        filename: function () {
                            return "EmployeeRecord";
                        },
                        title: "Employee Details",
                        messageTop: "Employee Details will come here",
                    },
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print" title="Print"></i>',
                        titleAttr: 'Print',
                        title: "Employee Record - UNUM Reporting",
                        messageTop: "Employee Details will come here",
                    }
                ]
            }).container().appendTo($('#empGridBtn'));  
                    
                    
                    // add lightning class to search filter field with some bottom margin..  
                    $('div.dataTables_filter input').addClass('slds-input');
                    $('div.dataTables_filter input').css("marginBottom", "10px");
                }, 500);   
                */
            }
        });
        $A.enqueueAction(action); 
    },
})