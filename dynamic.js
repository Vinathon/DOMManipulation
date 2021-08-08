var container = document.createElement("div");
container.className="container";

var row = document.createElement("div");
row.className="row";

var column = document.createElement("div");
column.className="col";

row.append(column);
container.append(row);
document.body.append(container);
