public with sharing class RestCalls {
    public RestCalls() {

    }
    
    public with sharing class EmployeeDetail{
    	
        @AuraEnabled public String EmployeeID {get;set;}
        @AuraEnabled public String FirstName {get;set;}
        @AuraEnabled public String LastName {get;set;}
        @AuraEnabled public String MiddleName {get;set;}
        @AuraEnabled public String DateOfBirth {get;set;}
        @AuraEnabled public String ssnFilter {get;set;}
        @AuraEnabled public Integer IsClaimOrLeave {get;set;}
        @AuraEnabled public String SSN {get;set;}
    }

    public with sharing class ClaimLeaveData{
        @AuraEnabled public ClaimData ClaimData;
        @AuraEnabled public LeaveData LeaveData;
        @AuraEnabled public Boolean IsClaim;
    }

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

    public with sharing class LeaveData {
        @AuraEnabled public Integer LeaveNo;
        @AuraEnabled public String ReportGroup;
        @AuraEnabled public String Coverage;
        @AuraEnabled public String LeaveReason;
        @AuraEnabled public Date ReceivedDate;
        @AuraEnabled public Date LeaveStartDate;
        @AuraEnabled public Boolean CurrentStatus;
        @AuraEnabled public String RTWDate;
        @AuraEnabled public Boolean RTWStatus;
    }

    public with sharing class EmployeeCLIDetail {
        @AuraEnabled public EmployeeDetail EmployeeDetail;
        @AuraEnabled public ClaimLeaveData[] ClaimLeaveData;
    }

    public with sharing class LeaveDetails {
        @AuraEnabled public EmployeeDetail EmployeeDetail;
        @AuraEnabled public LeaveData LeaveData;
        @AuraEnabled public String Historical;
        @AuraEnabled public Date LastDayWorked;
        @AuraEnabled public String OfficeLocation;
        @AuraEnabled public String ManagerName;
        @AuraEnabled public Date LeaveStartDate;
        @AuraEnabled public Date LeaveEndDate;
        @AuraEnabled public String LeaveSpecialist;
        @AuraEnabled public String RelatedSTDClaims;
        @AuraEnabled public Date ServerTime;
        @AuraEnabled public Boolean isASR;
        @AuraEnabled public Availabletime[] AvailableTime;
    }

    public with sharing class AvailableTime {
        @AuraEnabled public String Description;
        @AuraEnabled public String HoursTaken;
        @AuraEnabled public String HoursAvailable;
    }

    public class JSONOutput{
	//public cls_animal animal;

   	//public JSONOutput parse(String json){
	//return (JSONOutput) System.JSON.deserialize(json, JSONOutput.class);
	//}
    }
    public static EmployeeDetail parse(String json) {
		return (EmployeeDetail) System.JSON.deserialize(json, EmployeeDetail.class);
	}

    //Use @AuraEnabled to enable client- and server-side access to the method
    @AuraEnabled
    public static List<EmployeeDetail> SearchByLastName (String userId, String orgId, String searchString, String searchBy) {
        system.debug('inside searchByLastName' + userId + ' ' + orgId + ' ' + searchString + ' ' +  searchBy);
        
        List<EmployeeDetail> employeeDetail;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://anypoint.mulesoft.com/mocking/api/v1/links/40930352-1007-455a-b14d-5f330f8dc7af/api/SearchByLastName');
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
       // request.setHeader('ms2-authorization','bearer 7ba46bf7-cccf-45dc-be54-6f796dd04c71');
        //request.setHeader('userId','architdutt@gmail.com');
       // request.setHeader('organisationId','1');
       // request.setHeader('lastName','sharma');
       // request.setHeader('ssn','123');
				
	    // Set the body as a JSON object
		//request.setBody('{"userId":"1"},{"orgId":"orgId"},{"searchString":"searchString"},{"searchBy":"searchBy"}');
        request.setBody('{"searchBy": "we","userId": "12","orgId": "12","searchString": "we"}');
        System.debug('request= ' + request);
        HttpResponse response = http.send(request);             
        //Object results = (Object) map_results.get('animal');
		//system.debug('results= ' + results.animal.name);
        //return(results.animal.name);
        //system.debug('results= ' + results);
        // Parse the JSON response
		if (response.getStatusCode() != 200) {
    	System.debug('The status code returned was not expected: ' +
        response.getStatusCode() + ' ' + response.getStatus());
		} else {
    	System.debug(response.getBody());
        //Map<String,EmployeeDetail> map_results = (Map<String,EmployeeDetail>) JSON.deserializeUntyped(response.getBody());
       //	results = (List<EmployeeDetail>)JSON.deserialize(response.getBody(),List<EmployeeDetail>.class);
		//System.debug('results= ' + results);     
        //EmployeeDetail result1 = (EmployeeDetail) map_results.get('EmployeeDetail');
		//system.debug('result1= ' + result1.EmployeeID);
        //return(result1.animal.name);             
       }
        return employeeDetail; 
        
    }  
    
  /*   @AuraEnabled
   public static List<EmployeeDetail> SearchByLastName (String userId, String orgId, String searchString, String searchBy) {
        system.debug('inside searchByLastName' + userId + ' ' + orgId + ' ' + searchString + ' ' +  searchBy);
        List<EmployeeDetail> employeeDetailMock = new List<EmployeeDetail>();
        EmployeeDetail emp1 = new EmployeeDetail (EmployeeID = 111 , FirstName='James' , LastName='Abe' , MiddleName='Smith' , DateOfBirth='01-03-1978' , ssnFilter='6789' , IsClaimOrLeave=1 , SSN='123456789');
        EmployeeDetail emp2 = new EmployeeDetail (EmployeeID = 112 , FirstName='Maria' , LastName='R' , MiddleName='Gracia' , DateOfBirth='01-04-1978' , ssnFilter='567894123' , IsClaimOrLeave=1 , SSN='567894123');
        EmployeeDetail emp3 = new EmployeeDetail (EmployeeID = 113 , FirstName='David' , LastName='k' , MiddleName='Smith' , DateOfBirth='01-05-1978' , ssnFilter='567423891' , IsClaimOrLeave=1 , SSN='567423891');
        EmployeeDetail emp4 = new EmployeeDetail (EmployeeID = 114 , FirstName='Peter' , LastName='John' , MiddleName='White' , DateOfBirth='01-06-1980' , ssnFilter='4123' , IsClaimOrLeave=0 , SSN='657894123');
        EmployeeDetail emp5 = new EmployeeDetail (EmployeeID = 115 , FirstName='Ruby' , LastName='Mie' , MiddleName='Yang' , DateOfBirth='01-04-1982' , ssnFilter='567894167' , IsClaimOrLeave=1 , SSN='567894167');
   		employeeDetailMock.add(emp1);
        employeeDetailMock.add(emp2);
        employeeDetailMock.add(emp3);
        employeeDetailMock.add(emp4);
        employeeDetailMock.add(emp5);  
        
        return employeeDetailMock; 
        
    }
*/
    
    
}