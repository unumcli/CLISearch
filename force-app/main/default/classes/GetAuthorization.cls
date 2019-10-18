public with sharing class GetAuthorization {
    
    @AuraEnabled public String UserName {get;set;} 
	@AuraEnabled public String UserId {get;set;} 
	@AuraEnabled public String UserEmail {get;set;} 
	@AuraEnabled public String isUserInternal {get;set;}
    @AuraEnabled public OrganizationCollection OrganizationCollection {get;set;}
    
    public with sharing class OrganizationCollection {
		@AuraEnabled public Integer OrganizationId {get;set;} 
        @AuraEnabled public String OrganizationIdISF {get;set;} 
		@AuraEnabled public String OrgnizationName {get;set;} 
        @AuraEnabled public Boolean isPartOfOrganizationGroup {get;set;}
        @AuraEnabled public String OrganizationType {get;set;}
        @AuraEnabled public String OrganizationGroupId {get;set;}
        @AuraEnabled public String OrgnizationGroupName {get;set;}
        @AuraEnabled public String SSNAccess {get;set;} 
        @AuraEnabled public String DiagnosisCodeAccess {get;set;} 
        @AuraEnabled public String DiagnosisNameAccess {get;set;}
        @AuraEnabled public String LeaveReasonAccess {get;set;}
        @AuraEnabled public String LeaveProtectionTextAccess {get;set;}
        @AuraEnabled public String RTWRestrictionsAccess {get;set;}
        @AuraEnabled public String SpecialistContactAccess {get;set;}
        @AuraEnabled public String SelfInsuredDisabilityClaimAccess {get;set;}
        @AuraEnabled public String HistoricalLeaveAccess {get;set;} 
        @AuraEnabled public String ManagerNameAccess {get;set;}
        @AuraEnabled public String DateOfBirthAccess {get;set;}
        @AuraEnabled public String LetterContentAccess {get;set;}
        @AuraEnabled public String ImageContentAccess {get;set;} 
	}
    
    @AuraEnabled
    public static GetAuthorization GetAuthorizationInfo(String emailId,Boolean isUserInternal)
    {   
        string mockResponse = '{"userName":"unum","userId":"unum@gmail.com","userEmail":"unum@gmail.com","isUserInternal":"Internal","orgCollection":[{"organizationId":"123","organizationIdISF":"organizationIdISF","orgnizationName":"string","isPartOfOrganizationGroup":"true","organizationType":"organizationType","organizationGroupId":"organizationGroupId","orgnizationGroupName":"orgnizationGroupName","SSNAccess":"None","DiagnosisCodeAccess":"DiagnosisCodeAccess","DiagnosisNameAccess":"DiagnosisNameAccess","LeaveReasonAccess":"LeaveReasonAccess","LeaveProtectionTextAccess":"LeaveProtectionTextAccess","RTWRestrictionsAccess":"RTWRestrictionsAccess","SpecialistContactAccess":"SpecialistContactAccess","SelfInsuredDisabilityClaimAccess":"SelfInsuredDisabilityClaimAccess","HistoricalLeaveAccess":"string","managerNameAccess":"managerNameAccess","dateOfBirthAccess":"dateOfBirthAccess","LetterContentAccess":"LetterContentAccess","ImageContentAccess":"ImageContentAccess"}]}';
        String body = '{"emailId":"' + emailId + '","isUserInternal":"' + isUserInternal + '"}';    
        GetAuthorization authorization;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.Authorization);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
        request.setBody(body);
        HttpResponse response = http.send(request);             
        if (response.getStatusCode() != 200) {
    		System.debug(response.getStatusCode() + ' - ' + response.getStatus());
           try
            {
                System.debug('inside if');
                authorization = (GetAuthorization)JSON.deserialize(mockResponse,GetAuthorization.class);
             //   System.debug(authorization);
         }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try
            {
                System.debug('inside else');
                System.debug(response.getBody());
               authorization = (GetAuthorization)JSON.deserialize(response.getBody(),GetAuthorization.class);
            }
            catch(Exception ex)
            {
                System.debug('Invalid JSON Response');
            }
    	      
       }

       return authorization;
    }

}