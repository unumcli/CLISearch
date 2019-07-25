public with sharing class EmployeeDetail {
    
    	@AuraEnabled public String EmployeeID {get;set;}
        @AuraEnabled public String FirstName {get;set;}
        @AuraEnabled public String LastName {get;set;}
        @AuraEnabled public String MiddleName {get;set;}
        @AuraEnabled public String DateOfBirth {get;set;}
        @AuraEnabled public String ssnFilter {get;set;}
        @AuraEnabled public Integer IsClaimOrLeave {get;set;}
        @AuraEnabled public String SSN {get;set;}
    //	@AuraEnabled public List<EmployeeDetail> listEmployeeDetail {get;set;}
    
    
  /*  @AuraEnabled
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
    */
    
    //Use @AuraEnabled to enable client- and server-side access to the method
    @AuraEnabled
    public static List<EmployeeDetail> SearchByLastName (String userId, String orgId, String searchString, String searchBy) {
        system.debug('inside searchByLastName' + userId + ' ' + orgId + ' ' + searchString + ' ' +  searchBy);      
        String mockRespone = '[{"EmployeeID":"29307","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1},{"EmployeeID":"29307","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1}]';
            
        List<EmployeeDetail> employeeDetail;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        system.debug(APIEndPoints.EmployeeDetails);
        request.setEndpoint(APIEndPoints.EmployeeDetails);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
     		
	    // Set the body as a JSON object
        request.setBody('{"searchBy": searchBy,"userId": userID,"orgId": orgId,"searchString": searchString}');
        System.debug('request= ' + request);
        HttpResponse response = http.send(request);             
        
		if (response.getStatusCode() != 200) {
    	System.debug('The status code returned was not expected: ' +
        response.getStatusCode() + ' ' + response.getStatus());
            try
            {
                employeeDetail = (List<EmployeeDetail>)JSON.deserialize(mockRespone,List<EmployeeDetail>.class);
                System.debug(employeeDetail);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try{
    			System.debug(response.getBody());
        		employeeDetail = (List<EmployeeDetail>)JSON.deserialize(mockRespone,List<EmployeeDetail>.class);
				System.debug(employeeDetail);
               }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
       }
        return employeeDetail; 
        
    }   

}