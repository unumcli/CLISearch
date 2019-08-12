({
	onMarksSelection: function(marksEvent){
        
        marksEvent.getMarksAsync().then(function(marks)
         {
        
        if (marks.length != 0) {
            var leaveClaimNo, employeeId, coverage;
            var filterObject = {
        'Employee Id': null, 'Claim#/Leave#': null, 'Claim#': null, 'Leave#': null,
        'Coverage': null, 'SSN': null };
   
            for (var markIndex = 0; markIndex < marks.length; markIndex++) {
                var pairs = marks[markIndex].getPairs();
                for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
                    var pair = pairs[pairIndex];

                    if (pair.fieldName == 'Employee Id') {
                        employeeId = pair.formattedValue;
                        filterObject['Employee Id'] = employeeId; 
                    }
                    if (pair.fieldName == 'Coverage') {
                        coverage = pair.formattedValue;
                        filterObject['Coverage'] = coverage; 
                    }
                    if (pair.fieldName == 'Claim#/Leave#') {
                        leaveClaimNo = pair.formattedValue;
                        filterObject['Claim#/Leave#'] = leaveClaimNo; 
                    }
                    if (pair.fieldName == 'Claim#') {
                        leaveClaimNo = pair.formattedValue;
                        filterObject['Claim#'] = leaveClaimNo;
                    }
                    if (pair.fieldName == 'Leave#') {
                        
                        leaveClaimNo = pair.formattedValue;
                       // sessionStorage.setItem('leaveClaimNo', leaveClaimNo);
                       //var leaveClaimNoValue = sessionStorage.getItem('leaveClaimNo');
                        filterObject['Leave#'] = leaveClaimNo;
                    }
                    if (pair.fieldName == 'SSN') {                       
                        var selectedSSN = pair.formattedValue;
                        filterObject['SSN#'] = selectedSSN;
                    }
                }
            }
           
    		var filterObjectInJson = JSON.stringify(filterObject);
        var filterObjectInJsonParse = JSON.parse(filterObjectInJson);
        console.log(filterObjectInJson);
        console.log(filterObjectInJsonParse);
        //drillDown(filterObjectInJson);
        sessionStorage.setItem('filterdata', filterObjectInJson);
        console.log(sessionStorage.getItem('filterdata', filterObjectInJson));
        }
      
    });
    },
    
})