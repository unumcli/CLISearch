@isTest
public class TestemployeeDetailsController {

        @isTest static void testCallout1() {
        Test.setMock(HttpCalloutMock.class, new employeeDetailHttpCalloutMock());  
        List<EmployeeDetail> response = EmployeeDetail.SearchByLastName('userId', 'orgId', 'searchString', 'searchBy');
        System.debug(response);
        String expectedValue = ('[{"EmployeeID": "29307","FirstName": "Amber", "MiddleName": " ", "LastName": "Smith", "DateOfBirth": "1989-07-02T00:00:00.000Z","SSN": "406-37-0481","Coverage": "Leave","IsClaimOrLeave": 1,"OpenLeaveNumber": "","OpenClaimNumber": "","LeaveReason": ""},{ "EmployeeID": "11595","FirstName": "Angela","MiddleName": "K","LastName": "Smith","DateOfBirth": "1985-07-31T00:00:00.000Z","SSN": "316-02-3266","Coverage": "Leave", "IsClaimOrLeave": 1,"OpenLeaveNumber": "","OpenClaimNumber": "","LeaveReason": ""}]');
      //  System. (response,  (List<EmployeeDetail>)expectedValue);
    }
    
    @isTest static void testCallout2() {
        Test.setMock(HttpCalloutMock.class, new employeeDetailHttpCalloutMock());  
        List<EmployeeDetail.AutoSearch> response = EmployeeDetail.GetAutoSearch('searchBy', 'searchText', 'userId', 'orgId');
        System.debug(response);
        String expectedValue = ('[{"searchText": "aaa1"},{"searchText": "aaa2"}]');
      //  System.assertEquals(response.toString(), expectedValue);
    }
       
}