public with sharing class TestAppController 
{
    @AuraEnabled public String data {get;set;}
       
	@AuraEnabled
    public static String savePDFAccount(String TestData){
      TestAppController obj = new TestAppController();
     obj.data = TestData;
    //    htmlData = TestData;
        String test = TestData ;
     //   PageReference pr = new PageReference('/apex/TextVFPDF');
		//pr.getParameters().put('key','value');
	//	pr.setRedirect(true); // If you want a redirect. Do not set anything if you want a forward.
		//return pr;
    //    PageReference pdfPage = new PageReference('/apex/TextVFPDF');
    //    pdfPage.getParameters().put('testData',test);
    //    Blob pdfContent = pdfPage.getContent();
    //    Attachment attach1= new Attachment();
        //attach1.ParentId = parentId;
//        attach1.Name = 'Test Attachment for PDF';
    //    attach1.Body = pdfContent;
   //     attach1.contentType = 'application/pdf';
   //     insert attach1;
        return test;
        
    }
   
 /*   @AuraEnabled
    public static void savePDFAccount(String TestData){
        PageReference pdfPage = new PageReference('/apex/TextVFPDF');
        pdfPage.getParameters().put('testData',TestData);
       // Blob pdfContent = pdfPage.getContent();
       // Attachment attach1= new Attachment();
        //attach1.ParentId = parentId;
     //   attach1.Name = 'Test Attachment for PDF';
      //  attach1.Body = pdfContent;
      //  attach1.contentType = 'application/pdf';
      //  insert attach1;
        
    }
*/
}