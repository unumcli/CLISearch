public with sharing class LeaveDetails {
	@AuraEnabled public EmployeeDetail EmployeeDetail {get;set;} 
	@AuraEnabled public LeaveData LeaveData {get;set;} 
	@AuraEnabled public LeaveSummary LeaveSummary {get;set;} 
	@AuraEnabled public List<LeavePeriod> LeavePeriod {get;set;} 
	@AuraEnabled public List<IntermittentAbsence> IntermittentAbsence {get;set;} 
	@AuraEnabled public List<Protection> Protection {get;set;} 
	@AuraEnabled public List<AvailableTime> AvailableTime  {get;set;} 
    
    
    public with sharing class AvailableTime  {
    	@AuraEnabled public String ProtectionDescription  {get;set;} 
    	@AuraEnabled public String HoursTaken {get;set;} 
    	@AuraEnabled public String HoursAvailable {get;set;} 
	}
	
	public with sharing class LeaveSummary {
        @AuraEnabled public String LeaveNo {get;set;} 
        @AuraEnabled public String ReceivedDate {get;set;} 
        @AuraEnabled public String LastDayWorked {get;set;} 
        @AuraEnabled public String LeaveStartDate {get;set;} 
        @AuraEnabled public String LeaveEndDate {get;set;} 
        @AuraEnabled public String RTWDate {get;set;} 
        @AuraEnabled public String LeaveSpecialist {get;set;} 
        @AuraEnabled public String LeaveStatus {get;set;} 
        @AuraEnabled public String LeaveReason {get;set;} 
        @AuraEnabled public String OfficeLocation {get;set;} 
        @AuraEnabled public String RTWStatus {get;set;} 
        @AuraEnabled public String RelatedSTDClaims {get;set;} 
        @AuraEnabled public String ServerTime {get;set;} 
        @AuraEnabled public String isASR {get;set;} 
	}
	
	public with sharing class IntermittentAbsence {
        @AuraEnabled public String BeginDate {get;set;} 
        @AuraEnabled public String EndDate {get;set;} 
        @AuraEnabled public String TimeAbsent {get;set;} 
        @AuraEnabled public String ReportedDate {get;set;} 
        @AuraEnabled public String LeavePeriod {get;set;} 
        @AuraEnabled public String PeriodStatus {get;set;} 
    }
	
	public with sharing class LeavePeriod {
		@AuraEnabled public String LeavePeriod {get;set;} 
		@AuraEnabled public String Type_Z {get;set;} 
		@AuraEnabled public String HoursOff {get;set;} 
		@AuraEnabled public String Dates {get;set;} 
		@AuraEnabled public String Classification {get;set;} 
		@AuraEnabled public String Status {get;set;} 
		@AuraEnabled public String StatusReason {get;set;} 
	}
	
	public with sharing class Protection {
		@AuraEnabled public String LeavePeriod {get;set;} 
		@AuraEnabled public String Dates {get;set;} 
		@AuraEnabled public String ProtectionDescription {get;set;} 
		@AuraEnabled public String Status {get;set;} 
		@AuraEnabled public String StatusReason {get;set;} 
	}
	
	public with sharing class LeaveData {
		@AuraEnabled public String LeaveNo {get;set;} 
		@AuraEnabled public String ReportGroup {get;set;} 
		@AuraEnabled public String LeaveReason {get;set;} 
		@AuraEnabled public String Historical {get;set;} 
		@AuraEnabled public String LeaveStatus {get;set;} 
		@AuraEnabled public String LeaveHistory {get;set;} 
	}
    
    
    @AuraEnabled
    public static LeaveDetails GetLeaveDetails(string leaveNumber, string userId, string organizationId, string employeeId)
    {   
        string mockResponse = '{"EmployeeDetail":{"EmployeeID":"string","FirstName":"string","LastName":"string","DateOfBirth":"2019-06-27T09:10:24.912Z","SSN":"string","MiddleName":"string"},"LeaveData":{"LeaveNo":"","ReportGroup":"string","LeaveReason":"string","Historical":"string","LeaveStatus":"string","LeaveHistory":"string"},"LeaveSummary":{"LeaveNo":0,"ReceivedDate":"2019-06-27T09:10:24.912Z","LastDayWorked":"2019-06-27T09:10:24.912Z","LeaveStartDate":"2019-06-27T09:10:24.912Z","LeaveEndDate":"2019-06-27T09:10:24.912Z","RTWDate":"string","LeaveSpecialist":"string","LeaveStatus":"string","LeaveReason":"string","OfficeLocation":"string","RTWStatus":"string","RelatedSTDClaims":"string","ServerTime":"2019-06-27T09:10:24.912Z","isASR":true},"LeavePeriod":[{"LeavePeriod":"","Type":"string","HoursOff":"","Dates":"2019-06-27T09:10:24.912Z","Classification":"string","Status":"string","StatusReason":"string"}],"IntermittentAbsence":[{"BeginDate/Time":"2019-06-27T09:10:24.912Z","EndDate/Time":"2019-06-27T09:10:24.912Z","TimeAbsent":"string","ReportedDate":"2019-06-27T09:10:24.912Z","LeavePeriod":"","PeriodStatus":"string"}],"Protection":[{"LeavePeriod":"","Dates":"2019-06-27T09:10:24.912Z","ProtectionDescription":"string","Status":"string","StatusReason":"string"}],"AvailableTime":[{"ProtectionDescription":"string","HoursTaken":"","*HoursAvailable":""}]}';
        LeaveDetails leaveDetails;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.LeaveDetails);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
        request.setBody('{"leaveNo": "'+ leaveNumber +'","userId": "'+ userId +'","orgId": "' + organizationId + '","employeeId": "'+ employeeId +'"}');
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
                System.debug(response.getBody());
                leaveDetails = (LeaveDetails)JSON.deserialize(response.getBody(),LeaveDetails.class);
            }
            catch(Exception ex)
            {
                System.debug('Invalid JSON Response');
            }
    		System.debug(leaveDetails);         
       }
       return leaveDetails;
    }
}