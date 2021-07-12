function load() {
    console.log("Page load finished"); 
    //Parts of this code repurposed from
    // https://www.mysamplecode.com/2012/04/generate-html-table-using-javascript.html
}
function addRow() {
          
    var myAA = document.getElementById("AA");
    var myAa = document.getElementById("Aa");
    var myaa = document.getElementById("aa");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= myAA.value;
    row.insertCell(1).innerHTML= myAa.value;
    row.insertCell(2).innerHTML= myaa.value;
    row.insertCell(3).innerHTML= Number(myAA.value) + Number(myAa.value) + Number(myaa.value);
    row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="Javascript:deleteRow(this)">';
}

function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}