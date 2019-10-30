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
    @AuraEnabled public String AvatarColor {get;set;}
    @AuraEnabled public String middleNameWithDot {get;set;}
             
    public with sharing class UserInfo
    {
        @AuraEnabled public String userName {get;set;}
        @AuraEnabled public String userId {get;set;}
        @AuraEnabled public String userEmail {get;set;}
        @AuraEnabled public Boolean SSNAccess {get;set;}
        @AuraEnabled public Boolean diagnosisCodeAccess {get;set;}
        @AuraEnabled public Boolean diagnosisNameAccess {get;set;}
        @AuraEnabled public Boolean leaveReasonAccess {get;set;}
        @AuraEnabled public Boolean leaveProtectionTextAccess {get;set;}
        @AuraEnabled public Boolean RTWRestrictionsAccess {get;set;}
        @AuraEnabled public Boolean specialistContactAccess {get;set;}
        @AuraEnabled public Boolean selfInsuredDisabilityClaimAccess {get;set;}
        @AuraEnabled public Boolean historicalLeaveAccess {get;set;}
        @AuraEnabled public Boolean managerNameAccess {get;set;}
        @AuraEnabled public Boolean dateOfBirthAccess {get;set;}
        @AuraEnabled public Boolean letterContentAccess {get;set;}
        @AuraEnabled public Boolean imageContentAccess {get;set;}
    }
    
  /*   public with sharing class PolicyPartyIDNumber
	{
    	@AuraEnabled public String policyId {get;set;}
    	@AuraEnabled public String partyNumber {get;set;}           
	} */
    
    public with sharing class OrgCollection
    {
        @AuraEnabled public Integer organizationId {get;set;}
        @AuraEnabled public String orgnizationName {get;set;}
        @AuraEnabled public String organizationType {get;set;}
        @AuraEnabled public Integer parentId {get;set;}                
    }
    
    public with sharing class Authorization
    {
        @AuraEnabled public String tableauUserId {get; set;}
        @AuraEnabled public String tableauSiteId {get; set;}        
        @AuraEnabled public String tableauToken {get; set;}
        @AuraEnabled public UserInfo UserInfo {get; set;}
        @AuraEnabled public List<OrgCollection> OrgCollection {get; set;}  
        
         public Authorization()
         {  
             UserInfo = new UserInfo();
             OrgCollection = new List<OrgCollection>();  
    	}
        
    }
    
    public with sharing class AutoSearch
    {     
		@AuraEnabled public List<ResultSet1> ResultSet1 {get; set;}
        
          public AutoSearch()
         {  
             ResultSet1 = new List<ResultSet1>();  
    	 }
    }
    public with sharing class ResultSet1 
    {
		@AuraEnabled public string LASTNAME {get; set;}
	} 
   
    //	@AuraEnabled public List<EmployeeDetail> listEmployeeDetail {get;set;}
    
    //Use @AuraEnabled to enable client- and server-side access to the method
    
/*  @AuraEnabled(cacheable=true)
    public static PolicyPartyIDNumber GetUserPolicyID (String userId, String policyNumber, String partyId) {
        system.debug('After PolicyId' + userId + ' ' + policyNumber + ' ' + partyId);
        
        String mockResponse = '[{"EmployeeID":"29301","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1},{"EmployeeID":"29302","FirstName": "John","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1}]';
        String body = '{"userId":"' + userId + '","policyNumber":"' + policyNumber + '","partyId":"' + partyId + '"}';   
        PolicyPartyIDNumber policy;
        Http http = new Http();
        HttpRequest request = new HttpRequest();        
       // request.setEndpoint(APIEndPoints.Authorization);
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
                policy = (PolicyPartyIDNumber)JSON.deserialize(mockResponse,PolicyPartyIDNumber.class);
                System.debug(policy);                
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        } 
        else {
            try{
                System.debug('response.getBody()' + response.getBody());
                policy = (PolicyPartyIDNumber)JSON.deserialize(response.getBody(),PolicyPartyIDNumber.class);
                System.debug(policy);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        }
        return policy; 
        
    } */
    
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
    public static AutoSearch GetAutoSearch (String searchBy, String searchText, String userId, String orgId) {
        system.debug('inside AutoSearch' + searchBy + ' ' + searchText + ' ' + userId + ' ' +  orgId);
        
       String mockRespone = '{"resultSet1":[{"LASTNAME":"BBB"}]}';
      //  String body = '{"searchBy":"' + searchBy + '","searchText":"' + searchText + '","userId":"' + userId + '","orgId":"' + orgId + '"}';   
        AutoSearch autoSearch;
        autoSearch = (AutoSearch)JSON.deserialize(mockRespone,AutoSearch.class);
        return autoSearch;
        /*
        Http http = new Http();
        HttpRequest request = new HttpRequest();
       // httpReq.setEndpoint( 'https://apibibforceapi.test.tyrecheck.com/api/tcUser?Query=UserCode = \''+userCode+ '\' ');               
        String endpoint = 'http://employees-cli-prc-api.us-e1.cloudhub.io/api/cli/employees/v1?searchBy='+searchBy+'&searchText='+searchText+'&userId='+userId+'&orgId='+orgId+'';
      // request.setEndpoint('http://employees-cli-prc-api.us-e1.cloudhub.io/api/cli/employees/v1?searchBy='+searchBy+'&searchText='+searchText+'&userId='+userId+'&orgId='+orgId+'');
        request.setEndpoint(endpoint);
        request.setMethod('GET');
        request.setHeader('Content-Type','application/json');
        
        // Set the body as a JSON object
       // request.setBody(body);
        HttpResponse response = http.send(request);             
        
        if (response.getStatusCode() != 200) {
            System.debug('The status code returned was not expected: ' +
                         response.getStatusCode() + ' ' + response.getStatus());
            try
            {
                autoSearch = (AutoSearch)JSON.deserialize(mockRespone,AutoSearch.class);
                System.debug(autoSearch);                
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        } 
        else {
            try{
                System.debug('response.getBody() : ' + response.getBody());
                autoSearch = (AutoSearch)JSON.deserialize(response.getBody(),AutoSearch.class);
                System.debug(autoSearch);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        }
        return autoSearch; */
    }
    
    
    @AuraEnabled(cacheable=true)
    public static Authorization GetAuthorization (String forgerock_auth, String emailId, Boolean isInternal) {
        system.debug('inside SignIn' + forgerock_auth + ' ' + emailId + ' ' + isInternal);
        
        String mockResponse = '[{"EmployeeID":"29301","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1},{"EmployeeID":"29302","FirstName": "John","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1}]';
        String body = '{"forgerock_auth":"' + forgerock_auth + '","emailId":"' + emailId + '","isInternal":"' + isInternal + '"}';   
        Authorization auth;
        Http http = new Http();
        HttpRequest request = new HttpRequest();        
        request.setEndpoint(APIEndPoints.Authorization);
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
                auth = (Authorization)JSON.deserialize(mockResponse,Authorization.class);
                System.debug(auth);                
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        } 
        else {
            try{
                System.debug('response.getBody()' + response.getBody());
                auth = (Authorization)JSON.deserialize(response.getBody(),Authorization.class);
                System.debug(auth);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        }
        return auth; 
        
    }
    
    @AuraEnabled  
    public static List<CLISearchRelatedOrgList> getRelatedOrganizationList () {
        
        String mockResponse = '[{"OrgID":"29301","OrgName": "Amber"},{"OrgID":"29302","OrgName": "Archit"},{"OrgID":"29303","OrgName": "Snehal"},{"OrgID":"29304","OrgName": "Nandini"}]';
        List<CLISearchRelatedOrgList> orgList;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();        
        //  request.setEndpoint(APIEndPoints.CLISearchRelatedOrgLists);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
        
        // Set the body as a JSON object
        //  request.setBody(body);
        //  System.debug('body= ' + body);
        System.debug('request= ' + request);
        HttpResponse response = http.send(request);             
        
        if (response.getStatusCode() != 200) {
            System.debug('The status code returned was not expected: ' +
                         response.getStatusCode() + ' ' + response.getStatus());
            try
            {
                orgList = (List<CLISearchRelatedOrgList>)JSON.deserialize(mockResponse,List<CLISearchRelatedOrgList>.class);
                System.debug(orgList);                
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        } 
        else {
            try{
                System.debug('response.getBody()' + response.getBody());
                orgList = (List<CLISearchRelatedOrgList>)JSON.deserialize(response.getBody(),List<CLISearchRelatedOrgList>.class);
                System.debug(orgList);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
        }
        return orgList; 
        
    }

}