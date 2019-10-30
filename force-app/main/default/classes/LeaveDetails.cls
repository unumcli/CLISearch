public with sharing class LeaveDetails
{
    @AuraEnabled public Header Header {get;set;} 
	@AuraEnabled public LeaveSummary LeaveSummary {get;set;} 
	@AuraEnabled public List<LeavePeriod> LeavePeriod {get;set;} 
	@AuraEnabled public List<IntermittentAbsence> IntermittentAbsence {get;set;} 
	@AuraEnabled public List<Protection> Protection {get;set;} 
	@AuraEnabled public List<AvailableTime> AvailableTime {get;set;} 
		
	public with sharing class LeaveSummary {
		@AuraEnabled public string LeaveNo {get;set;} 
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
		@AuraEnabled public Boolean isASR {get;set;} 
	}
		public with sharing class IntermittentAbsence {
		@AuraEnabled public String BeginDateTime {get;set;} 
		@AuraEnabled public String EndDateTime {get;set;} 
		@AuraEnabled public String TimeAbsent {get;set;} 
		@AuraEnabled public String ReportedDate {get;set;} 
		@AuraEnabled public String LeavePeriod {get;set;} 
		@AuraEnabled public String PeriodStatus {get;set;} 
	}
	
	public with sharing class Header {
		@AuraEnabled public String EmployeeID {get;set;} 
		@AuraEnabled public String FirstName {get;set;} 
		@AuraEnabled public String LastName {get;set;} 
		@AuraEnabled public String DateOfBirth {get;set;} 
		@AuraEnabled public String SSN {get;set;} 
		@AuraEnabled public String MiddleName {get;set;} 
		@AuraEnabled public String LeaveNo {get;set;} 
		@AuraEnabled public String ReportGroup {get;set;} 
		@AuraEnabled public String LeaveReason {get;set;} 
		@AuraEnabled public String Historical {get;set;} 
		@AuraEnabled public String LeaveStatus {get;set;} 
		@AuraEnabled public String LeaveHistory {get;set;}
        @AuraEnabled public String middleNameWithDot {get;set;}
        @AuraEnabled public String Abbr {get;set;}

	}
	
	public with sharing class AvailableTime {
		@AuraEnabled public String ProtectionDescription {get;set;} 
		@AuraEnabled public String HoursTaken {get;set;} 
		@AuraEnabled public String HoursAvailable {get;set;} 
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
    @AuraEnabled
    public static List<Sobject> saveHTML(List<Sobject> sObjectList){
        return ClaimLeaveList.saveHTML(sObjectList);
        
    }
    
}