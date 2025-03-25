function insert_Row() {
    const table = document.getElementById("sampleTable");
const tr = document.createElement("tr");
tr.innerHTML += `<td>New Cell1</td>`;
tr.innerHTML += `<td>New Cell2</td>`;
 
	table.appendChild(tr);
  
  
}
