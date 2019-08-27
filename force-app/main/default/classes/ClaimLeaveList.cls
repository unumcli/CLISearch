public with sharing class ClaimLeaveList
{

    @AuraEnabled public EmployeeDetail EmployeeDetail {get; set;}
    @AuraEnabled public List<ClaimLeaveData> ClaimLeaveData {get; set;}

    public with sharing class ClaimLeaveData
    {
        @AuraEnabled public ClaimData ClaimData {get; set;}
        @AuraEnabled public LeaveData LeaveData {get; set;}
        @AuraEnabled public Boolean IsClaim {get; set;}
    }

    public with sharing class ClaimData
    {
        @AuraEnabled public Integer ClaimNo {get; set;}
        @AuraEnabled public String PolicyDiv {get; set;}
        @AuraEnabled public String Coverage {get; set;}
        @AuraEnabled public String ReceivedDate {get; set;}
        @AuraEnabled public String Disability {get; set;}
        @AuraEnabled public String CurrentStatus {get; set;}
        @AuraEnabled public String RTWDate {get; set;}
        @AuraEnabled public String RTWStatus {get; set;}
        @AuraEnabled public String ClaimEmpId {get; set;}
    }

    public with sharing class LeaveData
    {
        @AuraEnabled public Integer LeaveNo {get; set;}
        @AuraEnabled public String ReportGroup {get; set;}
        @AuraEnabled public String Coverage {get; set;}
        @AuraEnabled public String LeaveReason {get; set;}
        @AuraEnabled public String ReceivedDate {get; set;}
        @AuraEnabled public String LeaveStartDate {get; set;}
        @AuraEnabled public String CurrentStatus {get; set;}
        @AuraEnabled public String RTWDate {get; set;}
        @AuraEnabled public String RTWStatus {get; set;}
    }
    
    @AuraEnabled(cacheable=true)
    public static ClaimDetails GetEmployeeClaimDetail (String userId, String orgId, String employeeId, String ClaimNo) {
        
        String mockResponse = '{"Header":{"EmployeeID":"string","FirstName":"string","LastName":"string","DateOfBirth":"2019-06-27T08:38:45.873Z","SSN":"string","MiddleName":"string","ClaimNumber":"Number","Coverage":"string","CurrentStatus":"string","PolicyNumber":"","Division":"string","ClaimHistory":"string"},"ClaimStatus":{"ClaimNumber":"","StatusReason":"string","ReceivedDate":"2019-06-27T08:38:45.873Z","LastPaymentAmount":"","LastPaymentDate":"2019-06-27T08:38:45.873Z","BaseCoverage":"","SupplementalCoverage":"","TotalCoverage":"","DisabilityDate":"2019-06-27T08:38:45.873Z","Division":"string","BenefitStartDate":"2019-06-27T08:38:45.873Z","EligibilityGroup":"string","ApprovedThruDate":"2019-06-27T08:38:45.873Z","Choice":"string","MaximumDurationDate":"2019-06-27T08:38:45.873Z","ReturntoWorkDate":"2019-06-27T08:38:45.873Z","DiagnosticCode":"","ClaimClosedDate":"2019-06-27T08:38:45.873Z","DiagnosticDescription":"string","ClaimClosedReason":"string","WorkRelated":"string","DisabilityBenefitsSpecialist":"string","RelatedLeaves":"string","MonthsPaid":"","TotalPaidtoDate":"2019-06-27T08:38:45.873Z","PaidThroughDate":"2019-06-27T08:38:45.873Z","SSDIAwardDate":"2019-06-27T08:38:45.873Z","ApprovalDate":"2019-06-27T08:38:45.873Z","LifeBenefitsSpecialist":"string"},"Payments":[{"PaymentDate":"2019-06-27T08:38:45.873Z","PaymentType":"string","PaymentAmount":"","PaymentPeriod":"2019-06-27T08:38:45.873Z"},{"PaymentDate":"2019-06-27T08:38:45.873Z","PaymentType":"string","PaymentAmount":"","PaymentPeriod":"2019-06-27T08:38:45.873Z"}]}';
        String body = '{"userId":"' + userId + '","orgId":"' + orgId + '","employeeId":"' + employeeId + '","claimNo":"' + ClaimNo + '"}';    
        ClaimDetails claimDetails;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.ClaimDetails);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
        System.debug(body);
        request.setBody(body);
        HttpResponse response = http.send(request);
        if (response.getStatusCode() != 200) {
    		System.debug(response.getStatusCode() + ' - ' + response.getStatus());
            try
            {
                claimDetails = (ClaimDetails)JSON.deserialize(mockResponse,ClaimDetails.class);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try
            {
                System.debug('From API' + response.getBody());
                claimDetails = (ClaimDetails)JSON.deserialize(response.getBody(),ClaimDetails.class);
            }
            catch(Exception ex)
            {
                System.debug('Invalid JSON Response');
            }
    		System.debug(claimDetails);      
            
       }
    /*    try{
            claimDetails = (ClaimDetails)JSON.deserialize(mockResponse,ClaimDetails.class);
            System.debug(claimDetails.Header); 
            System.debug(claimDetails.ClaimStatus);  
            System.debug(claimDetails.Payments);  
        }
        catch(Exception ex){
            System.debug('exception'+ ex.getMessage());
        } */
        return claimDetails;   
    }  
    
    @AuraEnabled(cacheable=true)
    public static LeaveDetails GetLeaveDetails(string leaveNumber, string userId, string organizationId, string employeeId)
	{

        String mockResponse = '{"Header":{"EmployeeID":"string","FirstName":"string","LastName":"string","DateOfBirth":"2019-06-27T09:10:24.912Z","SSN":"string","MiddleName":"string","LeaveNo":"","ReportGroup":"string","LeaveReason":"string","Historical":"string","LeaveStatus":"string","LeaveHistory":"string"},"LeaveSummary":{"LeaveNo":0,"ReceivedDate":"2019-06-27T09:10:24.912Z","LastDayWorked":"2019-06-27T09:10:24.912Z","LeaveStartDate":"2019-06-27T09:10:24.912Z","LeaveEndDate":"2019-06-27T09:10:24.912Z","RTWDate":"string","LeaveSpecialist":"string","LeaveStatus":"string","LeaveReason":"string","OfficeLocation":"string","RTWStatus":"string","RelatedSTDClaims":"string","ServerTime":"2019-06-27T09:10:24.912Z","isASR":true},"LeavePeriod":[{"LeavePeriod":"","Type":"string","HoursOff":"","Dates":"2019-06-27T09:10:24.912Z","Classification":"string","Status":"string","StatusReason":"string"}],"IntermittentAbsence":[{"BeginDate/Time":"2019-06-27T09:10:24.912Z","EndDate/Time":"2019-06-27T09:10:24.912Z","TimeAbsent":"string","ReportedDate":"2019-06-27T09:10:24.912Z","LeavePeriod":"","PeriodStatus":"string"}],"Protection":[{"LeavePeriod":"","Dates":"2019-06-27T09:10:24.912Z","ProtectionDescription":"string","Status":"string","StatusReason":"string"}],"AvailableTime":[{"ProtectionDescription":"string","HoursTaken":"","HoursAvailable":""}]}';
        String body = '{"leaveNo":"' + leaveNumber + '","userId":"' + userId + '","orgId":"' + organizationId + '","employeeId":"' + employeeId + '"}';
        LeaveDetails leaveDetails;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.LeaveDetails);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
        System.debug(body);
        request.setBody(body); 
        HttpResponse response = http.send(request);             
        if (response.getStatusCode() != 200) {
    		System.debug(response.getStatusCode() + ' - ' + response.getStatus());
            try
            {
                leaveDetails = (LeaveDetails)JSON.deserialize(mockResponse,LeaveDetails.class);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try
            {
                System.debug('From API' + response.getBody());
                leaveDetails = (LeaveDetails)JSON.deserialize(response.getBody(),LeaveDetails.class);
            }
            catch(Exception ex)
            {
                System.debug('Invalid JSON Response');
            }
    		System.debug(leaveDetails);      
            
       }
        
        /* try{
            leaveDetails = (LeaveDetails)JSON.deserialize(mockResponse,LeaveDetails.class);
            System.debug(leaveDetails.Header);
            System.debug(leaveDetails.LeaveSummary);
            System.debug(leaveDetails.LeavePeriod);
            System.debug(leaveDetails.IntermittentAbsence);
            System.debug(leaveDetails.Protection);
            System.debug(leaveDetails.AvailableTime);
             
        }
        catch(Exception ex){
            System.debug('exception'+ ex.getMessage());
        } */
        return leaveDetails; 
       
    } 

    @AuraEnabled(cacheable=true)
    public static ClaimLeaveList GetClaimLeaveList(string userId, string organizationId, string employeeId,Integer IsClaimOrLeave)
    {  
        System.debug(userId + 'organizationId ' + organizationId + 'employeeId ' + employeeId + 'isClaimOrLeave' + IsClaimOrLeave);
        string mockResponse = '{"EmployeeDetail":{"EmployeeID":"6430","FirstName":"Snehal","LastName":"T","DateOfBirth":"2019-06-27T08:06:51.195Z","SSN":"12344","MiddleName":"P"},"ClaimLeaveData":[{"ClaimData":{"ClaimNo":"1456789","PolicyDiv":"3424332-343","Coverage":"coverage","ReceivedDate":"2019-06-27T08:06:51.195Z","Disability":"2019-06-27T08:06:51.195Z","CurrentStatus":"string","RTWDate":"string","RTWStatus":"string","ClaimEmpId":"string"},"LeaveData":{"LeaveNo":"342432","ReportGroup":"string","Coverage":"string","LeaveReason":"string","ReceivedDate":"2019-06-27T08:06:51.195Z","LeaveStartDate":"2019-06-27T08:06:51.195Z","CurrentStatus":"string","RTWDate":"string","RTWStatus":"string"},"IsClaim":true}]}';
        String body = '{"userId":"' + userId + '","orgId":"' + organizationId + '","employeeId":"' + employeeId + '","isClaimOrLeave":' + IsClaimOrLeave + '}';
        ClaimLeaveList claimLeaveList;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.ClaimLeaveList);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
        System.debug(body);
        request.setBody(body);       
        HttpResponse response = http.send(request);             
        if (response.getStatusCode() != 200) {
    		System.debug(response.getStatusCode() + ' - ' + response.getStatus());
            try
            {
                claimLeaveList = (ClaimLeaveList)JSON.deserialize(mockResponse,ClaimLeaveList.class);
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try
            {
                System.debug('From API' + response.getBody());
                claimLeaveList = (ClaimLeaveList)JSON.deserialize(response.getBody(),ClaimLeaveList.class);
            }
            catch(Exception ex)
            {
                System.debug('Invalid JSON Response');
            }
    		System.debug(claimLeaveList);      
            
       }
       return claimLeaveList;
    }
}