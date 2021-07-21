function load() {
    console.log("Page load finished"); 
    //Very small parts of this code adapted from
    // https://www.mysamplecode.com/2012/04/generate-html-table-using-javascript.html
}

//global count variable for labelling rows
var count = 0; 
function addRow() { //Check input data as positive whole numbers
    var fDom = Number(document.getElementById("AA").value); //Frequency of double dominant allele
    var fHet = Number(document.getElementById("Aa").value); //Frequency of heterozygous variant
    var fRec = Number(document.getElementById("aa").value); //Frequency of homozygous recessive 
    if(fDom < 0 || fHet < 0 || fRec < 0 || !(fDom%1 == 0) || !(fHet%1 == 0) || !(fRec%1 == 0)){
        alert("Invalid input: please enter non-negative whole numbers.");
    }
    else
        validRow(fDom, fHet, fRec);
}

function validRow(fDom, fHet, fRec) {
    var valTable = document.getElementById("valueTable");
    //Total number of observations (N):
    var totalNum = fDom + fHet + fRec;
    //Observed allele count #A: 2(AA) + Aa
    var numDom = 2*fDom + fHet;
    //Observed allele count #a: 2(aa) + Aa
    var numRec = 2*fRec + fHet;
    //f(A) = #A/2*N
    var freqDom = numDom/(2*totalNum);
    //f(a) = #a/2*N
    var freqRec = numRec/(2*totalNum);

    var rowCount = valTable.rows.length;
    var row = valTable.insertRow(rowCount);

    //Increment row count
    count++;
    row.insertCell(0).innerHTML= "Pop. " + count;
    row.insertCell(1).innerHTML= fDom; //AA
    row.insertCell(2).innerHTML= fHet; //Aa
    row.insertCell(3).innerHTML= fRec; //aa
    //Calculated data
    row.insertCell(4).innerHTML= totalNum; //Display total N
    row.insertCell(5).innerHTML= numDom; //Display #A
    row.insertCell(6).innerHTML= numRec; //Display #a
    row.insertCell(7).innerHTML= freqDom; //Display f(A)
    row.insertCell(8).innerHTML= freqRec; //Display f(a)
    row.insertCell(9).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteRow(this)">';
}

function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var valTable = document.getElementById("valueTable");
    valTable.deleteRow(index);
    
}