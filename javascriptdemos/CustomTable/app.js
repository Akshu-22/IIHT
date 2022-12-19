function myTable() {
    var myTableDiv = document.getElementById("myTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 3; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode(+ i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  myTable();