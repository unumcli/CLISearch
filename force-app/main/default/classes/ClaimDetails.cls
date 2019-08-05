public with sharing class ClaimDetails {

	@AuraEnabled public Header EmployeeDetail {get;set;} 
	@AuraEnabled public ClaimStatus ClaimStatus {get;set;} 
	@AuraEnabled public List<Payments> Payments {get;set;} 

	public with sharing class ClaimStatus {
		@AuraEnabled public String ClaimNumber {get;set;} 
		@AuraEnabled public String StatusReason {get;set;} 
		@AuraEnabled public String ReceivedDate {get;set;} 
		@AuraEnabled public String LastPaymentAmount {get;set;} 
		@AuraEnabled public String LastPaymentDate {get;set;} 
		@AuraEnabled public String BaseCoverage {get;set;} 
		@AuraEnabled public String SupplementalCoverage {get;set;} 
		@AuraEnabled public String TotalCoverage {get;set;}
        @AuraEnabled public String DisabilityDate {get;set;} 
		@AuraEnabled public String Division {get;set;} 
		@AuraEnabled public String BenefitStartDate {get;set;} 
		@AuraEnabled public String EligibilityGroup {get;set;} 
		@AuraEnabled public String ApprovedThruDate {get;set;} 
		@AuraEnabled public String Choice {get;set;} 
		@AuraEnabled public String MaximumDurationDate {get;set;} 
		@AuraEnabled public String ReturntoWorkDate {get;set;} 
		@AuraEnabled public String DiagnosisCode {get;set;} 
		@AuraEnabled public String ClaimClosedDate {get;set;} 
		@AuraEnabled public String DiagnosisDescription {get;set;} 
		@AuraEnabled public String ClaimClosedReason {get;set;} 
		@AuraEnabled public String WorkRelated {get;set;} 
		@AuraEnabled public String DisabilityBenefitsSpecialist {get;set;} 
		@AuraEnabled public String RelatedLeaves {get;set;} 
		@AuraEnabled public String MonthsPaid {get;set;} 
		@AuraEnabled public String TotalPaidtoDate {get;set;} 
		@AuraEnabled public String PaidThroughDate {get;set;} 
		@AuraEnabled public String SSDIAwardDate {get;set;} 
		@AuraEnabled public String ApprovalDate {get;set;} 
        @AuraEnabled public String LifeBenefitsSpecialist {get;set;} 
	}
	
	public with sharing class Payments {
		@AuraEnabled public String PaymentDate {get;set;} 
		@AuraEnabled public String PaymentType {get;set;} 
		@AuraEnabled public String PaymentAmount {get;set;} 
		@AuraEnabled public String PaymentPeriod {get;set;} 
	}
	
	public with sharing class Header {
		@AuraEnabled public String EmployeeID {get;set;} 
		@AuraEnabled public String FirstName {get;set;} 
		@AuraEnabled public String LastName {get;set;} 
		@AuraEnabled public String DateOfBirth {get;set;} 
		@AuraEnabled public String SSN {get;set;} 
		@AuraEnabled public String MiddleName {get;set;} 
        @AuraEnabled public String ClaimNumber {get;set;} 
		@AuraEnabled public String Coverage {get;set;} 
		@AuraEnabled public String CurrentStatus {get;set;} 
		@AuraEnabled public String PolicyNumber {get;set;} 
		@AuraEnabled public String Division {get;set;} 
		@AuraEnabled public String ClaimHistory {get;set;} 
	}
	
	@AuraEnabled
    public static ClaimDetails GetEmployeeClaimDetail (String userId, String orgId, String employeeId, String ClaimNo) {
        
        String mockRespone = '{"Header":{"EmployeeID":"string","FirstName":"string","LastName":"string","DateOfBirth":"2019-06-27T08:38:45.873Z","SSN":"string","MiddleName":"string","ClaimNumber":"Number","Coverage":"string","CurrentStatus":"string","PolicyNumber":"","Division":"string","ClaimHistory":"string"},"ClaimStatus":{"ClaimNumber":"","StatusReason":"string","ReceivedDate":"2019-06-27T08:38:45.873Z","LastPaymentAmount":"","LastPaymentDate":"2019-06-27T08:38:45.873Z","BaseCoverage":"","SupplementalCoverage":"","TotalCoverage":"","DisabilityDate":"2019-06-27T08:38:45.873Z","Division":"string","BenefitStartDate":"2019-06-27T08:38:45.873Z","EligibilityGroup":"string","ApprovedThruDate":"2019-06-27T08:38:45.873Z","Choice":"string","MaximumDurationDate":"2019-06-27T08:38:45.873Z","ReturntoWorkDate":"2019-06-27T08:38:45.873Z","DiagnosticCode":"","ClaimClosedDate":"2019-06-27T08:38:45.873Z","DiagnosticDescription":"string","ClaimClosedReason":"string","WorkRelated":"string","DisabilityBenefitsSpecialist":"string","RelatedLeaves":"string","MonthsPaid":"","TotalPaidtoDate":"2019-06-27T08:38:45.873Z","PaidThroughDate":"2019-06-27T08:38:45.873Z","SSDIAwardDate":"2019-06-27T08:38:45.873Z","ApprovalDate":"2019-06-27T08:38:45.873Z","LifeBenefitsSpecialist":"string"},"Payments":[{"PaymentDate":"2019-06-27T08:38:45.873Z","PaymentType":"string","PaymentAmount":"","PaymentPeriod":"2019-06-27T08:38:45.873Z"},{"PaymentDate":"2019-06-27T08:38:45.873Z","PaymentType":"string","PaymentAmount":"","PaymentPeriod":"2019-06-27T08:38:45.873Z"}]}';
            
        ClaimDetails claimDetails;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.ClaimDetails);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
       //request.setHeader('ms2-authorization','bearer 7ba46bf7-cccf-45dc-be54-6f796dd04c71');
				
	    // Set the body as a JSON object
        request.setBody('{"claimNo": "1234","userId": "12","orgId": "12","employeeId": "123"}');
        System.debug('request= ' + request);
        HttpResponse response = http.send(request);             
        
		if (response.getStatusCode() != 200) {
    	System.debug('The status code returned was not expected: ' +
        response.getStatusCode() + ' ' + response.getStatus());
		} 
        else {
    	System.debug(response.getBody());
            try{
        claimDetails = (ClaimDetails)JSON.deserialize(mockRespone,ClaimDetails.class);
		System.debug(claimDetails);  
            }catch(Exception ex){
                System.debug('exception'+ ex.getMessage());
            }
       }
        return claimDetails; 
        
    }   

	
}