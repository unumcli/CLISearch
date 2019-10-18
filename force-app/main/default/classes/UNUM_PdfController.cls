public with sharing class UNUM_PdfController {
    public static UNUM_SobjectModel model{set;get;}
    public string recordId{set;get;}
    
    public UNUM_PdfController(){
        recordId = Apexpages.currentPage().getparameters().get('recordId');
        System.debug('construction - '+recordId);
    }
    
    public void MyActionMethod()
   {
       System.debug('action method'+recordId);
       UNUM_SobjectModel sobjModel = new UNUM_SobjectModel();
       try{
           PDFStorage__c pdfData = [SELECT Id, Content__c FROM PDFStorage__c Where Id=:recordId ];
           sobjModel.Id = pdfData.Id;
           sobjModel.content=pdfData.Content__c;
           model = sobjModel;
           PDFStorage__c p = new PDFStorage__c();
           p.Id= pdfData.Id;
           Delete p;
           Database.emptyRecycleBin(p);
       }catch(Exception e){
           System.debug('Error Message :'+e.getMessage());
       }
       
   }
}