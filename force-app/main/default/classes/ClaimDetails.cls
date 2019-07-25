public with sharing class ClaimDetails {
		@AuraEnabled public ClaimData ClaimData {get; set;}
		@AuraEnabled public ClaimInfo ClaimInfo {get; set;}
		@AuraEnabled public ClaimStatus ClaimStatus {get; set;}
		@AuraEnabled public EmployeeDetail EmployeeDetail {get; set;}
		@AuraEnabled public String PaymentDetails {get; set;}
		@AuraEnabled public String PolicyNo {get; set;}
		@AuraEnabled public String ServerTime {get; set;}
		@AuraEnabled public Boolean isASR {get; set;}
    
    public with sharing class ClaimData {
        @AuraEnabled public Integer ClaimNo {get; set;}
        @AuraEnabled public String PolicyDiv {get; set;}
        @AuraEnabled public String Coverage {get; set;}
        @AuraEnabled public Date ReceivedDate {get; set;}
        @AuraEnabled public Date Disability {get; set;}
        @AuraEnabled public Boolean CurrentStatus {get; set;}
        @AuraEnabled public String RTWDate {get; set;}
        @AuraEnabled public Boolean RTWStatus {get; set;}
        @AuraEnabled public String ClaimEmpId {get; set;}
    }
    
    public with sharing class ClaimInfo {
		@AuraEnabled public String ApprovedThruDate {get; set;}
		@AuraEnabled public String BenefitStartDate {get; set;}
		@AuraEnabled public String Choice {get; set;}
		@AuraEnabled public String ClaimClosedDate {get; set;}
		@AuraEnabled public String ClaimClosedReason {get; set;}
		@AuraEnabled public Integer DaysPaid {get; set;}
		@AuraEnabled public String DiagnosticCode {get; set;}
		@AuraEnabled public String DiagnosticDescription {get; set;}
		@AuraEnabled public String DisabilityBenefitsSpecialist {get; set;}
		@AuraEnabled public String DisabilityDate {get; set;}
		@AuraEnabled public String Division {get; set;}
		@AuraEnabled public String EligibilityGroup {get; set;}
		@AuraEnabled public String MaximumDuartionDate {get; set;}
		@AuraEnabled public String RTWDateFT {get; set;}
		@AuraEnabled public String RTWDatePT {get; set;}
		@AuraEnabled public String RelatedLeaves {get; set;}
		@AuraEnabled public Double TotalPaidToDate {get; set;}
		@AuraEnabled public String WorkRelated {get; set;}
	}
    
    public with sharing class ClaimStatus {
		@AuraEnabled public Double LastPaymentAmount {get; set;}
		@AuraEnabled public String LastPaymentDate {get; set;}
		@AuraEnabled public String ReceivedDate {get; set;}
		@AuraEnabled public String StatusReason {get; set;}
	}
    
    public with sharing class EmployeeDetail {
		@AuraEnabled public String DateOfBirth {get; set;}
		@AuraEnabled public String EmployeeID {get; set;}
		@AuraEnabled public String LastName {get; set;}
		@AuraEnabled public String MiddleName {get; set;}
		@AuraEnabled public String SSN {get; set;}
	}
    
    //Use @AuraEnabled to enable client- and server-side access to the method
    @AuraEnabled
    public static ClaimDetails GetEmployeeClaimDetail (String userId, String orgId, String lastname, String ssn) {
        
        String mockRespone = '{"EmployeeDetail":{"EmployeeID":"17421","LastName":"Smith","DateOfBirth":"2002-10-02","SSN":"454-97-7271","MiddleName":"M"},"ClaimData":{"ClaimNo":11273084,"PolicyDiv":"PHYSICIANS,ICC,CMAC/ONORTONHEALTHCAREINC.","Coverage":"SI-STD","ReceivedDate":"2002-10-02","Disability":"2002-10-02","CurrentStatus":"Closed","RTWDate":"10/12/2015","RTWStatus":""},"PolicyNo":"00604656","ClaimStatus":{"ReceivedDate":"2002-10-02","StatusReason":"RTW-OwnER","LastPaymentAmount":11417.72,"LastPaymentDate":"2002-10-02"},"ClaimInfo":{"DisabilityDate":"2002-10-02","BenefitStartDate":"2002-10-02","ApprovedThruDate":"2002-10-02","MaximumDuartionDate":"2002-10-02","RTWDatePT":"2002-10-02","RTWDateFT":"2002-10-02","ClaimClosedDate":"2002-10-02","ClaimClosedReason":"RTW-OwnER","DisabilityBenefitsSpecialist":"Taslimi,Shannon","Division":"0004-PHYSICIANS,ICC,CMAC/ONORTONHEALTHCARE,INC.","EligibilityGroup":"Allfull-timeandpart-timeemployeeswhoarestatusedtoworkaminimumof32hours(.4FTE)perbi-weeklypay","Choice":"0","DiagnosticCode":"174.9","DiagnosticDescription":"MALIGNANTNEOPLASMOFBREAST(FEMALE),UNSPECIFIED","DaysPaid":53,"TotalPaidToDate":11417.72,"WorkRelated":"N","RelatedLeaves":"5843061"},"PaymentDetails":null,"ServerTime":"2019-06-28","isASR":"False"}';
            
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