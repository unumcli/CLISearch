@isTest
global class claimleaveListHttpCalloutMock implements HttpCalloutMock {
    
    global HTTPResponse respond(HTTPRequest request) {
        // Create a fake response
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('{"Header":{"EmployeeID":"string","FirstName":"string","LastName":"string","DateOfBirth":"2019-06-27T08:38:45.873Z","SSN":"string","MiddleName":"string","ClaimNumber":"Number","Coverage":"string","CurrentStatus":"string","PolicyNumber":"","Division":"string","ClaimHistory":"string"},"ClaimStatus":{"ClaimNumber":"","StatusReason":"string","ReceivedDate":"2019-06-27T08:38:45.873Z","LastPaymentAmount":"","LastPaymentDate":"2019-06-27T08:38:45.873Z","BaseCoverage":"","SupplementalCoverage":"","TotalCoverage":"","DisabilityDate":"2019-06-27T08:38:45.873Z","Division":"string","BenefitStartDate":"2019-06-27T08:38:45.873Z","EligibilityGroup":"string","ApprovedThruDate":"2019-06-27T08:38:45.873Z","Choice":"string","MaximumDurationDate":"2019-06-27T08:38:45.873Z","ReturntoWorkDate":"2019-06-27T08:38:45.873Z","DiagnosticCode":"","ClaimClosedDate":"2019-06-27T08:38:45.873Z","DiagnosticDescription":"string","ClaimClosedReason":"string","WorkRelated":"string","DisabilityBenefitsSpecialist":"string","RelatedLeaves":"string","MonthsPaid":"","TotalPaidtoDate":"2019-06-27T08:38:45.873Z","PaidThroughDate":"2019-06-27T08:38:45.873Z","SSDIAwardDate":"2019-06-27T08:38:45.873Z","ApprovalDate":"2019-06-27T08:38:45.873Z","LifeBenefitsSpecialist":"string"},"Payments":[{"PaymentDate":"2019-06-27T08:38:45.873Z","PaymentType":"string","PaymentAmount":"","PaymentPeriod":"2019-06-27T08:38:45.873Z"},{"PaymentDate":"2019-06-27T08:38:45.873Z","PaymentType":"string","PaymentAmount":"","PaymentPeriod":"2019-06-27T08:38:45.873Z"}]}');
        response.setStatusCode(200);
        return response; 
    }
    
    
}