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

    @AuraEnabled
    public static ClaimLeaveList GetClaimLeaveList(string userId, string organizationId, string employeeId,Integer isClaimOrLeave)
    {  
        System.debug(userId + 'organizationId ' + organizationId + 'employeeId ' + employeeId + 'isClaimOrLeave' + isClaimOrLeave);
        string mockResponse = '{"EmployeeDetail":{"EmployeeID":"6430","FirstName":"Snehal","LastName":"T","DateOfBirth":"2019-06-27T08:06:51.195Z","SSN":"12344","MiddleName":"P"},"ClaimLeaveData":[{"ClaimData":{"ClaimNo":"1456789","PolicyDiv":"3424332-343","Coverage":"coverage","ReceivedDate":"2019-06-27T08:06:51.195Z","Disability":"2019-06-27T08:06:51.195Z","CurrentStatus":"string","RTWDate":"string","RTWStatus":"string","ClaimEmpId":"string"},"LeaveData":{"LeaveNo":"342432","ReportGroup":"string","Coverage":"string","LeaveReason":"string","ReceivedDate":"2019-06-27T08:06:51.195Z","LeaveStartDate":"2019-06-27T08:06:51.195Z","CurrentStatus":"string","RTWDate":"string","RTWStatus":"string"},"IsClaim":true}]}';
        ClaimLeaveList claimLeaveList;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(APIEndPoints.ClaimLeaveList);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
       // request.setBody('{"userId": "'+ userId +'","orgId": "' + organizationId + '","employeeId": "'+ employeeId +'","isClaimOrLeave": "'+ isClaimOrLeave +'"}');
        request.setBody('{"userId": "userId","orgId": "organizationId","employeeId": "employeeId","isClaimOrLeave":1}');       
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
                claimLeaveList = (ClaimLeaveList)JSON.deserialize(mockResponse,ClaimLeaveList.class);
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