var table = document.createElement("table");
table.className = "table";

var thead = document.createElement("thead");
thead.className = "thead-dark";

var tr = document.createElement("tr");
var th1 = createElement('th','firstname');
var th2 = createElement('th','lastname');
tr.append(th1,th2);
thead.append(tr);

var tbody1 = document.createElement('tbody');
 tr = document.createElement('tr');
var td1 = createElement('td','mark');
var td2 = createElement('td','otto');
tr.append(td1,td2);
tbody1.append(tr);

var tbody2 = document.createElement('tbody');
 tr = document.createElement('tr');
var td1 = createElement('td','guvi');
var td2 = createElement('td','geek');
tr.append(td1,td2);
tbody2.append(tr);

table.append(thead, tbody1, tbody2);
document.body.append(table);
function createElement(element,value =""){
    var td = document.createElement(element);
    td.innerHTML = value;
    //td.className = className;
    return td;
}