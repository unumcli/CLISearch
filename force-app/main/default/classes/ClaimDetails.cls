public with sharing class ClaimDetails {
		@AuraEnabled public ClaimData ClaimData;
		@AuraEnabled public ClaimInfo ClaimInfo;
		@AuraEnabled public ClaimStatus ClaimStatus;
		@AuraEnabled public EmployeeDetail EmployeeDetail;
		@AuraEnabled public String PaymentDetails;
		@AuraEnabled public String PolicyNo;
		@AuraEnabled public String ServerTime;
		@AuraEnabled public Boolean isASR;
    
    public with sharing class ClaimData {
        @AuraEnabled public Integer ClaimNo;
        @AuraEnabled public String PolicyDiv;
        @AuraEnabled public String Coverage;
        @AuraEnabled public Date ReceivedDate;
        @AuraEnabled public Date Disability;
        @AuraEnabled public Boolean CurrentStatus;
        @AuraEnabled public String RTWDate;
        @AuraEnabled public Boolean RTWStatus;
        @AuraEnabled public String ClaimEmpId;
    }
    
    public with sharing class ClaimInfo {
		@AuraEnabled public String ApprovedThruDate;
		@AuraEnabled public String BenefitStartDate;
		@AuraEnabled public String Choice;
		@AuraEnabled public String ClaimClosedDate;
		@AuraEnabled public String ClaimClosedReason;
		@AuraEnabled public Integer DaysPaid;
		@AuraEnabled public String DiagnosticCode;
		@AuraEnabled public String DiagnosticDescription;
		@AuraEnabled public String DisabilityBenefitsSpecialist;
		@AuraEnabled public String DisabilityDate;
		@AuraEnabled public String Division;
		@AuraEnabled public String EligibilityGroup;
		@AuraEnabled public String MaximumDuartionDate;
		@AuraEnabled public String RTWDateFT;
		@AuraEnabled public String RTWDatePT;
		@AuraEnabled public String RelatedLeaves;
		@AuraEnabled public Double TotalPaidToDate;
		@AuraEnabled public String WorkRelated;
	}
    
    public with sharing class ClaimStatus {
		@AuraEnabled public Double LastPaymentAmount;
		@AuraEnabled public String LastPaymentDate;
		@AuraEnabled public String ReceivedDate;
		@AuraEnabled public String StatusReason;
	}
    
    public with sharing class EmployeeDetail {
		@AuraEnabled public String DateOfBirth;
		@AuraEnabled public String EmployeeID;
		@AuraEnabled public String LastName;
		@AuraEnabled public String MiddleName;
		@AuraEnabled public String SSN;
	}
    
    //Use @AuraEnabled to enable client- and server-side access to the method
    @AuraEnabled
    public static ClaimDetails GetEmployeeClaimDetail (String userId, String orgId, String lastname, String ssn) {
        system.debug('inside searchByLastName' + userId + ' ' + orgId + ' ' + lastname + ' ' +  ssn);
        String mockRespone = '[{"EmployeeID":"29307","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1},{"EmployeeID":"29307","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1}]';
            
        ClaimDetails claimDetails;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://anypoint.mulesoft.com/mocking/api/v1/links/40930352-1007-455a-b14d-5f330f8dc7af/api/GetClaimDetails');
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
       // request.setHeader('ms2-authorization','bearer 7ba46bf7-cccf-45dc-be54-6f796dd04c71');
				
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
        claimDetails = (ClaimDetails)JSON.deserialize(mockRespone,ClaimDetails.class);
		System.debug(claimDetails);         
       }
        return claimDetails; 
        
    }   

    
    
}