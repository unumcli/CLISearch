public with sharing class RestCalls {
    public RestCalls() {

    }

    public class EmployeeDetail{
        public String EmployeeID;
        public String FirstName;
        public String LastName;
        public String MiddleName;
        public String DateOfBirth;
        public String ssnFilter;
        public Integer IsClaimOrLeave;
        public String SSN;
    }

    public class ClaimLeaveData{
        public ClaimData ClaimData;
        public LeaveData LeaveData;
        public Boolean IsClaim;
    }

    public class ClaimData {
        public Integer ClaimNo;
        public String PolicyDiv;
        public String Coverage;
        public Date ReceivedDate;
        public Date Disability;
        public Boolean CurrentStatus;
        public String RTWDate;
        public Boolean RTWStatus;
        public String ClaimEmpId;
    }

    public class LeaveData {
        public Integer LeaveNo;
        public String ReportGroup;
        public String Coverage;
        public String LeaveReason;
        public Date ReceivedDate;
        public Date LeaveStartDate;
        public Boolean CurrentStatus;
        public String RTWDate;
        public Boolean RTWStatus;
    }

    public class EmployeeCLIDetail {
        public EmployeeDetail EmployeeDetail;
        public ClaimLeaveData[] ClaimLeaveData;
    }

    public class LeaveDetails {
        public EmployeeDetail EmployeeDetail;
        public LeaveData LeaveData;
        public String Historical;
        public Date LastDayWorked;
        public String OfficeLocation;
        public String ManagerName;
        public Date LeaveStartDate;
        public Date LeaveEndDate;
        public String LeaveSpecialist;
        public String RelatedSTDClaims;
        public Date ServerTime;
        public Boolean isASR;
        public Availabletime[] AvailableTime;
    }

    public class AvailableTime {
        public String Description;
        public String HoursTaken;
        public String HoursAvailable;
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
    public static List<EmployeeDetail> SearchByLastName (String userId, Integer organisationId, String lastName, String ssn) {
        system.debug('inside searchByLastName' + userId + ' ' + organisationId + ' ' + lastName + ' ' +  ssn);
        List<EmployeeDetail> results;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/ffb51f70-e8be-4e18-b031-10f4e8bb7b1c/testapi/1.0.11/m/api/SearchByLastName?userId=architdutt@gmail.com&organisationId=1&lastName=sharma&ssn=123');
        request.setMethod('GET');
        //request.setHeader('Content-Type','application/json');
        request.setHeader('ms2-authorization','bearer 7ba46bf7-cccf-45dc-be54-6f796dd04c71');
        //request.setHeader('userId','architdutt@gmail.com');
       // request.setHeader('organisationId','1');
       // request.setHeader('lastName','sharma');
       // request.setHeader('ssn','123');
		//System.debug('request= ' + request);		
	    // Set the body as a JSON object
		//request.setBody('{"userId":"architdutt@gmail.com"},{"organisationId":1},{"lastName":"sharma"},{"ssn":"123"}');       
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
       	results = (List<EmployeeDetail>)JSON.deserialize(response.getBody(),List<EmployeeDetail>.class);
		System.debug('results= ' + results);     
        //EmployeeDetail result1 = (EmployeeDetail) map_results.get('EmployeeDetail');
		//system.debug('result1= ' + result1.EmployeeID);
        //return(result1.animal.name);             
       }
        return results; 
        
    }
}