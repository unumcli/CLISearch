public class TextVFPDFController {
    
    public String data{get;set;}
    
    public TextVFPDFController(){
        
        data = apexpages.currentpage().getparameters().get('testData');
        System.debug(data);
    }
}