@isTest
public class TestemployeeDetailsController {

        @isTest static void testCallout1() {
        EmployeeDetail obj = new EmployeeDetail();
            obj.EmployeeID = '';
            obj.FirstName = '';
            obj.LastName = '';
            obj.MiddleName = '';
            obj.DateOfBirth = '';
            obj.ssnFilter = '';
            obj.IsClaimOrLeave = 1;
            obj.SSN = '';
            obj.OpenClaimNumber = '';
            obj.OpenLeaveNumber = '';
            obj.Coverage = '';
            obj.LeaveReason = '';
            obj.Abbr = '';
            obj.AvatarColor = '';
            obj.middleNameWithDot = '';
        EmployeeDetail.UserInfo userinfo = new EmployeeDetail.UserInfo();
         	userinfo.userName = '';
            userinfo.userId = '';
            userinfo.userEmail = '';
            userinfo.SSNAccess = true;
            userinfo.diagnosisCodeAccess = true;
            userinfo.diagnosisNameAccess = true;
            userinfo.leaveReasonAccess = true;
            userinfo.leaveProtectionTextAccess = true;
            userinfo.RTWRestrictionsAccess = true;
            userinfo.specialistContactAccess = true;
            userinfo.selfInsuredDisabilityClaimAccess = true;
            userinfo.historicalLeaveAccess = true;
            userinfo.managerNameAccess = true;
            userinfo.dateOfBirthAccess = true;
            userinfo.letterContentAccess = true;
            userinfo.imageContentAccess = true;
        EmployeeDetail.OrgCollection orgcollection = new EmployeeDetail.OrgCollection();
            orgcollection.organizationId = 1;
            orgcollection.orgnizationName = '';
            orgcollection.organizationType = '';
            orgcollection.parentId = 2;
        EmployeeDetail.Authorization auth = new EmployeeDetail.Authorization();
            auth.tableauUserId = '';
            auth.tableauSiteId = '';
            auth.tableauToken = '';
        Test.setMock(HttpCalloutMock.class, new employeeDetailHttpCalloutMock());  
        List<EmployeeDetail> response = EmployeeDetail.SearchByLastName('userId', 'orgId', 'searchString', 'searchBy');
        System.debug(response);
        String expectedValue = ('[{"EmployeeID": "29307","FirstName": "Amber", "MiddleName": " ", "LastName": "Smith", "DateOfBirth": "1989-07-02T00:00:00.000Z","SSN": "406-37-0481","Coverage": "Leave","IsClaimOrLeave": 1,"OpenLeaveNumber": "","OpenClaimNumber": "","LeaveReason": ""},{ "EmployeeID": "11595","FirstName": "Angela","MiddleName": "K","LastName": "Smith","DateOfBirth": "1985-07-31T00:00:00.000Z","SSN": "316-02-3266","Coverage": "Leave", "IsClaimOrLeave": 1,"OpenLeaveNumber": "","OpenClaimNumber": "","LeaveReason": ""}]');
      //  System. (response,  (List<EmployeeDetail>)expectedValue);
    }
    
    @isTest static void testCallout2() {
        
        Test.setMock(HttpCalloutMock.class, new employeeDetailHttpCalloutMock());  
        EmployeeDetail.AutoSearch response = EmployeeDetail.GetAutoSearch('searchBy', 'searchText', 'userId', 'orgId');
        System.debug(response);
        String expectedValue = ('[{"searchText": "aaa1"},{"searchText": "aaa2"}]');
      //  System.assertEquals(response.toString(), expectedValue);
    }
    
    @isTest static void testCallout3() {
        
        
        Test.setMock(HttpCalloutMock.class, new employeeDetailHttpCalloutMock());  
        EmployeeDetail.Authorization response = EmployeeDetail.GetAuthorization('forgerock_auth', 'emailId', true);
        System.debug(response);
        String expectedValue = ('[{"EmployeeID":"29301","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1},{"EmployeeID":"29302","FirstName": "John","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1}]');
      //  System.assertEquals(response.toString(), expectedValue);
    }
    
  /*  @isTest static void testCallout4() {
        
        Test.setMock(HttpCalloutMock.class, new employeeDetailHttpCalloutMock());  
        List<EmployeeDetail.CLISearchRelatedOrgList> response = EmployeeDetail.getRelatedOrganizationList('forgerock_auth', 'emailId', true);
        System.debug(response);
        String expectedValue = ('[{"OrgID":"29301","OrgName": "Amber"},{"OrgID":"29302","OrgName": "Archit"},{"OrgID":"29303","OrgName": "Snehal"},{"OrgID":"29304","OrgName": "Nandini"}]');
      //  System.assertEquals(response.toString(), expectedValue);
    }*/
       
}