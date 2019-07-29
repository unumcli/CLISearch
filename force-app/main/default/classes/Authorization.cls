public with sharing class Authorization {

	@AuraEnabled public String Valid {get;set;} 
	@AuraEnabled public String TableauUserId {get;set;} 
	@AuraEnabled public String TableauSiteId {get;set;} 
	@AuraEnabled public String TableauToken {get;set;} 
	@AuraEnabled public UserInfo userInfo {get;set;} 
	@AuraEnabled public OtherInfo otherInfo {get;set;} 

	public with sharing class OrganizationCollection {
		@AuraEnabled public String organizationId {get;set;} 
		@AuraEnabled public String orgnizationName {get;set;} 
	}
	
	public with sharing class SelfInsuredDisabilityClaims {
		@AuraEnabled public String DiagnosisCode {get;set;} 
		@AuraEnabled public String DiagnosisName {get;set;} 
		@AuraEnabled public String LetterContent {get;set;} 
		@AuraEnabled public String ImageContent {get;set;} 
	}
	
	public with sharing class LeaveManagement {
		@AuraEnabled public String leaveReason  {get;set;} 
		@AuraEnabled public String leaveProtectionText {get;set;} 
		@AuraEnabled public String returnToWorkRestrictions {get;set;} 
		@AuraEnabled public String letterContent {get;set;} 
		@AuraEnabled public String imageContent {get;set;} 
	}
	
	public with sharing class ManagerInformation {
		@AuraEnabled public String managerName {get;set;} 
	}
	
	public with sharing class General {
		@AuraEnabled public String restrictionsLimitations {get;set;} 
		@AuraEnabled public String specialistContactInfo {get;set;} 
		@AuraEnabled public String employeeSocialSecurityNumber {get;set;} 
		@AuraEnabled public String claimLeaveHistory {get;set;} 
	}
	
	public with sharing class PolicyCollection {
		@AuraEnabled public String organizationId {get;set;} 
		@AuraEnabled public String organizationName {get;set;} 
		@AuraEnabled public String policyId {get;set;} 
	}
	
	public with sharing class UserInfo {
		@AuraEnabled public String userId {get;set;} 
		@AuraEnabled public String userEmail {get;set;} 
		@AuraEnabled public String SSNAccess {get;set;} 
		@AuraEnabled public String DiagnosisCodeAccess {get;set;} 
		@AuraEnabled public String DiagnosisNameAccess {get;set;} 
		@AuraEnabled public String LeaveReasonAccess {get;set;} 
		@AuraEnabled public String LeaveProtectionTextAccess {get;set;} 
		@AuraEnabled public String RTWRestrictionsAccess {get;set;} 
		@AuraEnabled public String SpecialistContactAccess {get;set;} 
		@AuraEnabled public String SelfInsuredDisabilityClaimAccess {get;set;} 
		@AuraEnabled public String HistoricalLeaveAccess {get;set;} 
		@AuraEnabled public List<OrganizationCollection> organizationCollection {get;set;} 
		@AuraEnabled public List<PolicyCollection> policyCollection {get;set;} 
		@AuraEnabled public List<ReportGroupCollection> reportGroupCollection {get;set;} 
	}
	
	public with sharing class ReportGroupCollection {
		@AuraEnabled public String organizationId {get;set;} 
		@AuraEnabled public String organizationName {get;set;} 
		@AuraEnabled public String reportGroupId {get;set;} 
	}
	
	public with sharing class OtherInfo {
		@AuraEnabled public General general {get;set;} 
		@AuraEnabled public SelfInsuredDisabilityClaims selfInsuredDisabilityClaims {get;set;} 
		@AuraEnabled public LeaveManagement leaveManagement {get;set;} 
		@AuraEnabled public ManagerInformation managerInformation {get;set;} 
	}
    
    @AuraEnabled
    public static Authorization GetAuthorization()
    {   
        string mockResponse = '{"Valid":"boolean","TableauUserId":"string","TableauSiteId":"string","TableauToken":"string","userInfo":{"userId":"","userEmail":"","SSNAccess":"None","DiagnosisCodeAccess":"string","DiagnosisNameAccess":"string","LeaveReasonAccess":"string","LeaveProtectionTextAccess":"string","RTWRestrictionsAccess":"string","SpecialistContactAccess":"string","SelfInsuredDisabilityClaimAccess":"string","HistoricalLeaveAccess":"string","orgCollection":[{"organizationId":"123","orgnizationName":"Norton"},{"organizationId":"123","orgnizationName":"Norton"}],"policyCollection":[{"organizationId":"123","organizationName":"Norton","policyId":"435"},{"organizationId":"123","organizationName":"Norton","policyId":"435"}],"reportGroupCollection":[{"organizationId":"123","organizationName":"Norton","reportGroupId":"435"},{"organizationId":"123","organizationName":"Norton","reportGroupId":"435"}]},"otherInfo":{"general":{"restrictionsLimitations":"Boolean","specialistContactInfo":"Boolean","employeeSocialSecurityNumber":"String","claimLeaveHistory":"Boolean"},"selfInsuredDisabilityClaims":{"DiagnosisCode":"Boolean","DiagnosisName":"Boolean","LetterContent":"Boolean","ImageContent":"Boolean"},"leaveManagement":{"leaveReason":"String","leaveProtectionText":"String","returnToWorkRestrictions":"Boolean","letterContent":"Boolean","imageContent":"Boolean"},"managerInformation":{"managerName":"Boolean"}}}';
        Authorization authorization;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.Authorization);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
        request.setBody('{"userId": "1","orgId": "1","employeeId": "1234"}');
        HttpResponse response = http.send(request);             
        if (response.getStatusCode() != 200) {
    		System.debug(response.getStatusCode() + ' - ' + response.getStatus());
            try
            {
                authorization = (Authorization)JSON.deserialize(mockResponse,Authorization.class);
                System.debug(authorization);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try
            {
                System.debug(response.getBody());
                authorization = (Authorization)JSON.deserialize(response.getBody(),Authorization.class);
            }
            catch(Exception ex)
            {
                System.debug('Invalid JSON Response');
            }
    		System.debug(authorization);         
       }
       return authorization;
    }
}