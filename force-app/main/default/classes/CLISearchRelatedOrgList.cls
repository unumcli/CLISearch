public with sharing class CLISearchRelatedOrgList {
    
    	@AuraEnabled public String OrgID {get;set;}
        @AuraEnabled public String OrgName {get;set;}
    
    @AuraEnabled
    public static List<CLISearchRelatedOrgList> getRelatedOrganizationList () {
        
        String mockResponse = '[{"OrgID":"29301","OrgName": "Amber"}]';
        List<CLISearchRelatedOrgList> orgList;
        
		Http http = new Http();
        HttpRequest request = new HttpRequest();        
        request.setEndpoint(APIEndPoints.CLISearchRelatedOrgLists);
        request.setMethod('POST');
        request.setHeader('Content-Type','application/json');
     		
	   // Set the body as a JSON object
       //  request.setBody(body);
       //  System.debug('body= ' + body);
         System.debug('request= ' + request);
         HttpResponse response = http.send(request);             
        
		if (response.getStatusCode() != 200) {
    	System.debug('The status code returned was not expected: ' +
        response.getStatusCode() + ' ' + response.getStatus());
            try
            {
                orgList = (List<CLISearchRelatedOrgList>)JSON.deserialize(mockResponse,List<CLISearchRelatedOrgList>.class);
                System.debug(orgList);                
            }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
		} 
        else {
            try{
    			System.debug('response.getBody()' + response.getBody());
        		orgList = (List<CLISearchRelatedOrgList>)JSON.deserialize(response.getBody(),List<CLISearchRelatedOrgList>.class);
				System.debug(orgList);
               }
            catch(Exception ex)
            {
                System.debug(ex.getMessage());
            }
       }
        return orgList; 

}
    
}