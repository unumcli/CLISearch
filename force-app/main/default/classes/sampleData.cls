public class sampleData {
    @AuraEnabled
    public static List<EmployeeList__c> getEmpData() {
        List<EmployeeList__c> empData = new List<EmployeeList__c>();
        EmployeeList__c emp1 = new EmployeeList__c(LastName__c = 'Aradhya', FirstName__c = 'Nandini', SSN__c = 12 );
        EmployeeList__c emp2 = new EmployeeList__c(LastName__c = 'Sharma', FirstName__c = 'Archit', SSN__c = 56 );
        EmployeeList__c emp3 = new EmployeeList__c(LastName__c = 'Roy', FirstName__c = 'Aditya', SSN__c = 78);
        EmployeeList__c emp4 = new EmployeeList__c(LastName__c = 'D`souza', FirstName__c = 'william', SSN__c = 90);
        EmployeeList__c emp5 = new EmployeeList__c(LastName__c = 'Kane', FirstName__c = 'williamson', SSN__c = 99);
        EmployeeList__c emp6 = new EmployeeList__c(LastName__c = 'kohli', FirstName__c = 'virat', SSN__c = 11);
        EmployeeList__c emp7 = new EmployeeList__c(LastName__c = 'Smith', FirstName__c = 'G', SSN__c = 21);
        EmployeeList__c emp8 = new EmployeeList__c(LastName__c = 'SMith', FirstName__c = 'John', SSN__c = 23);
        EmployeeList__c emp9 = new EmployeeList__c(LastName__c = 'SMith', FirstName__c = 'Will', SSN__c = 45);
        EmployeeList__c emp10 = new EmployeeList__c(LastName__c = 'Sharma', FirstName__c = 'Rohit', SSN__c = 76);
        EmployeeList__c emp11 = new EmployeeList__c(LastName__c = 'Dhoni', FirstName__c = 'MS', SSN__c = 97);
        EmployeeList__c emp12 = new EmployeeList__c(LastName__c = 'Z', FirstName__c = 'A', SSN__c = 45);
        empData.add(emp1);
        empData.add(emp2);
        empData.add(emp3);
        empData.add(emp4);
        empData.add(emp5);
        empData.add(emp6);
        empData.add(emp7);
        empData.add(emp8);
        empData.add(emp9);
        empData.add(emp10);
        empData.add(emp11);
        empData.add(emp12);
        return empData;
    }
}