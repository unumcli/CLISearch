public class UNM_PDFController {
    public ClaimLeaveList data{get;set;}
    public UNM_PDFController(){
        String ReqId = Apexpages.currentPage().getparameters().get('data');
        ClaimLeaveList claim = (ClaimLeaveList)JSON.deserialize(ReqId, ClaimLeaveList.class);
        data = claim;
        System.debug('UNM_PDFController'+ReqId);
        System.debug('UNM_PDFController1'+claim);
    }
}