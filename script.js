function insert_Row() {
    const table = document.getElementById("sampleTable");
const tr = document.createElement("tr");
// tr.innerHTML += `<td>New Cell1</td>`;
// tr.innerHTML += `<td>New Cell2</td>`;
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	td1.textContent="New Cell1";
	td2.textContent ="New Cell2"
	tr.appendChild(td1);
	tr.appendChild(td2);
	table.appendChild(tr);
  
  
}
