var myArray = [];


var req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.onload = function () {
  var reqw = JSON.parse(req.responseText);
  console.log(reqw);
  buildTable(reqw);
};
req.send();

function buildTable(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
							<td>${data[i].id}</td>
							<td>${data[i].name}</td>
							<td>${data[i].email}</td>
					  </tr>`;
    table.innerHTML += row;
  }
}
