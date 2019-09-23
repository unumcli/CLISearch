public with sharing class CLISearchEmployeeList {
    @AuraEnabled
    public static List<EmployeeList__c> getEmpLists() {
        List<EmployeeList__c> empList = new List<EmployeeList__c>(); 
        EmployeeList__c emp1 = new EmployeeList__c(LastName__c = 'Aradhya', FirstName__c = 'Nandini', SSN__c = 12 ); 
        EmployeeList__c emp2 = new EmployeeList__c(LastName__c = 'Sharma', FirstName__c = 'Archit', SSN__c = 56 ); 
        EmployeeList__c emp3 = new EmployeeList__c(LastName__c = 'Roy', FirstName__c = 'Aditya', SSN__c = 78);
        EmployeeList__c emp4 = new EmployeeList__c(LastName__c = 'D`souza', FirstName__c = 'william', SSN__c = 90);
        EmployeeList__c emp5 = new EmployeeList__c(LastName__c = 'A', FirstName__c = 'F', SSN__c = 1 );
        EmployeeList__c emp6 = new EmployeeList__c(LastName__c = 'B', FirstName__c = 'G', SSN__c = 2 );
        EmployeeList__c emp7 = new EmployeeList__c(LastName__c = 'C', FirstName__c = 'H', SSN__c = 3 );
        EmployeeList__c emp8 = new EmployeeList__c(LastName__c = 'D', FirstName__c = 'I', SSN__c = 4 );
        EmployeeList__c emp9 = new EmployeeList__c(LastName__c = 'abc', FirstName__c = 'J', SSN__c = 5 );
        EmployeeList__c emp10 = new EmployeeList__c(LastName__c = 'qwe', FirstName__c = 'J', SSN__c = 6 );
        EmployeeList__c emp11 = new EmployeeList__c(LastName__c = 'qwee', FirstName__c = 'J', SSN__c = 7 );
        EmployeeList__c emp12 = new EmployeeList__c(LastName__c = 'emp12', FirstName__c = 'J', SSN__c = 8 );
        EmployeeList__c emp13 = new EmployeeList__c(LastName__c = 'ytu', FirstName__c = 'J', SSN__c = 9 );
        EmployeeList__c emp14 = new EmployeeList__c(LastName__c = 'Emp12', FirstName__c = 'J', SSN__c = 10 );
        empList.add(emp1);
        empList.add(emp2);
        empList.add(emp3);
        empList.add(emp4);
        empList.add(emp5);
        empList.add(emp6);
        empList.add(emp7);
        empList.add(emp8);
        empList.add(emp9);
        empList.add(emp10);
        empList.add(emp11);
        empList.add(emp12);
        empList.add(emp13);
        empList.add(emp14);
        return empList;
    }

}