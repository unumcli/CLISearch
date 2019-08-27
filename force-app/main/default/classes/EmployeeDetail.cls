public with sharing class EmployeeDetail {
    
    	@AuraEnabled public String EmployeeID {get;set;}
        @AuraEnabled public String FirstName {get;set;}
        @AuraEnabled public String LastName {get;set;}
        @AuraEnabled public String MiddleName {get;set;}
        @AuraEnabled public String DateOfBirth {get;set;}
        @AuraEnabled public String ssnFilter {get;set;}
        @AuraEnabled public Integer IsClaimOrLeave {get;set;}
        @AuraEnabled public String SSN {get;set;}
    	@AuraEnabled public String OpenClaimNumber {get;set;}
    	@AuraEnabled public String OpenLeaveNumber {get;set;}
    	@AuraEnabled public String Coverage {get;set;}
    	@AuraEnabled public String LeaveReason {get;set;}
        @AuraEnabled public String Abbr {get;set;}
    
    
    
    public with sharing class AutoSearch
    {
        @AuraEnabled public String searchText {get; set;}        
    }
    	
    //	@AuraEnabled public List<EmployeeDetail> listEmployeeDetail {get;set;}

    //Use @AuraEnabled to enable client- and server-side access to the method
    @AuraEnabled(cacheable=true)
    public static List<EmployeeDetail> SearchByLastName (String userId, String orgId, String searchString, String searchBy) {
        system.debug('inside searchByLastName' + userId + ' ' + orgId + ' ' + searchString + ' ' +  searchBy);
        
        String mockResponse = '[{"EmployeeID":"29301","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1},{"EmployeeID":"29302","FirstName": "John","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1}]';
        String body = '{"searchBy":"' + searchBy + '","userId":"' + userId + '","orgId":"' + orgId + '","searchString":"' + searchString + '"}';   
        List<EmployeeDetail> employeeDetail;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();        
        request.setEndpoint(APIEndPoints.EmployeeDetails);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
     		
	    // Set the body as a JSON object
        request.setBody(body);
        System.debug('body= ' + body);
        System.debug('request= ' + request);
        HttpResponse response = http.send(request);             
        
		if (response.getStatusCode() != 200) {
    	System.debug('The status code returned was not expected: ' +
        response.getStatusCode() + ' ' + response.getStatus());
            try
            {
                employeeDetail = (List<EmployeeDetail>)JSON.deserialize(mockResponse,List<EmployeeDetail>.class);
                System.debug(employeeDetail);                
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try{
    			System.debug('response.getBody()' + response.getBody());
        		employeeDetail = (List<EmployeeDetail>)JSON.deserialize(response.getBody(),List<EmployeeDetail>.class);
				System.debug(employeeDetail);
               }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
       }
        return employeeDetail; 
        
    }
    
    // AutoSearch 
    @AuraEnabled(cacheable=true)
    public static List<AutoSearch> GetAutoSearch (String searchBy, String searchText, String userId, String orgId) {
        system.debug('inside AutoSearch' + searchBy + ' ' + searchText + ' ' + userId + ' ' +  orgId);
        
        String mockRespone = '[{"searchText": "aaa1"},{"searchText": "aaa2"}]';
        String body = '{"searchBy":"' + searchBy + '","searchText":"' + searchText + '","userId":"' + userId + '","orgId":"' + orgId + '"}';   
        List<AutoSearch> autoSearch;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        
        request.setEndpoint(APIEndPoints.AutoSearch);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
     		
	    // Set the body as a JSON object
        request.setBody(body);
        System.debug('body= ' + body);
        System.debug('request= ' + request);
        HttpResponse response = http.send(request);             
        
		if (response.getStatusCode() != 200) {
    	System.debug('The status code returned was not expected: ' +
        response.getStatusCode() + ' ' + response.getStatus());
            try
            {
                autoSearch = (List<AutoSearch>)JSON.deserialize(mockRespone,List<AutoSearch>.class);
                System.debug(autoSearch);                
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try{
    			System.debug('response.getBody()' + response.getBody());
        		autoSearch = (List<AutoSearch>)JSON.deserialize(response.getBody(),List<AutoSearch>.class);
				System.debug(autoSearch);
               }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
       }
        return autoSearch; 
        
    }

}