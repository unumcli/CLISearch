public with sharing class EmployeeDetail {
    
    	@AuraEnabled public String EmployeeID {get;set;}
        @AuraEnabled public String FirstName {get;set;}
        @AuraEnabled public String LastName {get;set;}
        @AuraEnabled public String MiddleName {get;set;}
        @AuraEnabled public String DateOfBirth {get;set;}
        @AuraEnabled public String ssnFilter {get;set;}
        @AuraEnabled public Integer IsClaimOrLeave {get;set;}
        @AuraEnabled public String SSN {get;set;}
    	@AuraEnabled public List<EmployeeDetail> listEmployeeDetail {get;set;}
    
    
    @AuraEnabled
  public static List<EmployeeDetail> SearchByLastName(String userId, String orgId, String searchString, String searchBy){
        System.debug('inside searchByLastName' + userId + ' ' + orgId + ' ' + searchString + ' ' +  searchBy);
        
     //create class instance
  	  EmployeeDetail obj1 = new EmployeeDetail();
      EmployeeDetail obj2 = new EmployeeDetail();
      List<EmployeeDetail> EmployeeDetailList = new List<EmployeeDetail>();
     //set value in class properties
   	obj1.EmployeeID = '123';
   	obj1.FirstName = 'Archit';
   	obj1.LastName = 'Sharma';
    obj1.MiddleName = 'Dutt';
    obj1.DateOfBirth = '17/06/1995';
 	obj1.ssnFilter = '6789';
    obj1.IsClaimOrLeave = 1;
    obj1.SSN = '123456789';
      obj2.EmployeeID = '123';
   	obj2.FirstName = 'Rohit';
   	obj2.LastName = 'Sharma';
    obj2.MiddleName = 'Dutt';
    obj2.DateOfBirth = '27/06/1995';
 	obj2.ssnFilter = '3789';
	obj2.IsClaimOrLeave = 1;
    obj2.SSN = '123459789';
    EmployeeDetailList.add(obj1);
    EmployeeDetailList.add(obj2);
   // query accounts list for lstOfAccount property
   //obj.lstOfAccount = 
   System.debug(EmployeeDetailList);
   // return class instance
   return EmployeeDetailList;
   }
    
    
    //Use @AuraEnabled to enable client- and server-side access to the method
 /*   @AuraEnabled
    public static List<EmployeeDetail> SearchByLastName (String userId, String orgId, String searchString, String searchBy) {
        system.debug('inside searchByLastName' + userId + ' ' + orgId + ' ' + searchString + ' ' +  searchBy);
        
        List<EmployeeDetail> employeeDetail;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://anypoint.mulesoft.com/mocking/api/v1/links/40930352-1007-455a-b14d-5f330f8dc7af/api/SearchByLastName');
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
       // request.setHeader('ms2-authorization','bearer 7ba46bf7-cccf-45dc-be54-6f796dd04c71');
        //request.setHeader('userId','architdutt@gmail.com');
       // request.setHeader('organisationId','1');
       // request.setHeader('lastName','sharma');
       // request.setHeader('ssn','123');
				
	    // Set the body as a JSON object
		//request.setBody('{"userId":"1"},{"orgId":"orgId"},{"searchString":"searchString"},{"searchBy":"searchBy"}');
        request.setBody('{"searchBy": "we","userId": "12","orgId": "12","searchString": "we"}');
        System.debug('request= ' + request);
        HttpResponse response = http.send(request);             
        //Object results = (Object) map_results.get('animal');
		//system.debug('results= ' + results.animal.name);
        //return(results.animal.name);
        //system.debug('results= ' + results);
        // Parse the JSON response
		if (response.getStatusCode() != 200) {
    	System.debug('The status code returned was not expected: ' +
        response.getStatusCode() + ' ' + response.getStatus());
		} else {
    	System.debug(response.getBody());
        //Map<String,EmployeeDetail> map_results = (Map<String,EmployeeDetail>) JSON.deserializeUntyped(response.getBody());
        //employeeDetail = (List<EmployeeDetail>)JSON.deserialize(JSON.stringify('[' + response.getBody() + ']'),List<EmployeeDetail>.class);
		//employeeDetail = (List<EmployeeDetail>)response.getBody();
		
         //System.debug('employeeDetails = ' + employeeDetail);    
        //EmployeeDetail result1 = (EmployeeDetail) map_results.get('EmployeeDetail');
		//system.debug('result1= ' + result1.EmployeeID);
        //return(result1.animal.name);             
       }
        return employeeDetail; 
        
    }   */

}