@isTest
global class employeeDetailHttpCalloutMock implements HttpCalloutMock {
    
    global HTTPResponse respond(HTTPRequest request) {
        // Create a fake response
      /*  HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('[{"EmployeeID":"29301","FirstName": "Amber","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1},{"EmployeeID":"29302","FirstName": "John","MiddleName": " ","LastName": "Smith","DateOfBirth": "1989-07-02T00:00:00","SSN": "406-37-0481","ssnFilter": "SSN: 0481","IsClaimOrLeave": 1}]');
        response.setStatusCode(200);
        return response; */
        System.assertEquals('https://anypoint.mulesoft.com/mocking/api/v1/links/e38620e6-e325-4540-b559-4f885ad97232/api/employee-details', request.getEndpoint());
        System.assertEquals('POST', request.getMethod());
        
        // Create a fake response
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('{"searchBy":"searchBy","userId":"userId","orgId":"orgId","searchString":"searchString"}');        
        response.setStatusCode(200);
        return response;
    }
}