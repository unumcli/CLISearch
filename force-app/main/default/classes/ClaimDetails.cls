public with sharing class ClaimDetails {

	@AuraEnabled public Header Header {get;set;} 
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
		@AuraEnabled public String PolicyNo {get;set;} 
		@AuraEnabled public String PolicyDiv {get;set;} 
		@AuraEnabled public String ClaimHistory {get;set;}
        @AuraEnabled public String Abbr {get;set;}
       
	}
     @AuraEnabled
    public static List<Sobject> saveHTML(List<Sobject> sObjectList){
       return ClaimLeaveList.saveHTML(sObjectList);
        
    }
	
}