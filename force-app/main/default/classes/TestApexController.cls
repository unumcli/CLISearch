public class TestApexController {

    public TestApexController(){
        String recordId = Apexpages.currentPage().getparameters().get('recordId');
        save(recordId); 
        System.debug(recordId);
    }
    public PageReference save(String recordId) {
        PageReference pr = new PageReference('/apex/UNUM_PDFCreation');
		pr.getParameters().put('recordId',recordId); 
        pr.setRedirect(true);
        return pr;
    }
}