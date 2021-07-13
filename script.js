function load() {
    console.log("Page load finished"); 
    //Parts of this code adapted from
    // https://www.mysamplecode.com/2012/04/generate-html-table-using-javascript.html
}

//global count variable for labelling rows
var count = 0; 

function addRow() {
    
    var fDom = Number(document.getElementById("AA").value); //Frequency of double dominant allele
    var fHet = Number(document.getElementById("Aa").value); //Frequency of heterozygous variant
    var fRec = Number(document.getElementById("aa").value); //Frequency of homozygous recessive 
    var table = document.getElementById("valueTable");
    //Observed allele count #A: 2(AA) + Aa
    var numDom = 2*fDom + fHet;
    //Observed allele count #a: 2(aa) + Aa
    var numRec = 2*fRec + fHet;

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    //Increment row count
    count++;
    row.insertCell(0).innerHTML= "Pop. " + count;
    row.insertCell(1).innerHTML= fDom; //AA
    row.insertCell(2).innerHTML= fHet; //Aa
    row.insertCell(3).innerHTML= fRec; //aa
    //Calculated data
    row.insertCell(4).innerHTML= fDom + fHet + fRec; //Display total N
    row.insertCell(5).innerHTML= numDom; //Display #A
    row.insertCell(6).innerHTML= numRec; //Display #a
    row.insertCell(7).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteRow(this)">';
}

function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("valueTable");
    table.deleteRow(index);
    
}