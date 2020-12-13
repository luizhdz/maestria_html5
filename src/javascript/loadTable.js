(function () {

	loadTable()
	
})();

function loadTable(){
	const table = document.querySelector("table#main_table")
	var tbody =  table.querySelector("tbody")

	for (const item of data) {
		appendRow(tbody, [item.img ,item.name, item.country, item.description])			
	}
}

function appendRow(tbody, cells){
	var newRow = tbody.insertRow();
	for (const cell of cells) {
		var newCell = newRow.insertCell();
		var content;
		if(cell.split(".").pop() == "jpg" ){
			content = document.createElement("img")
			content.src = "./src/img/"+cell
			content.className = "img-thumbnail"
		}else{
			content = document.createTextNode(cell);
		}

		newCell.appendChild(content);		
		
	}
}