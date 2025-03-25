function insert_Row() {
    const table = document.getElementById("sampleTable");
    const tr = document.createElement("tr");
    tr.innerHTML += `<td>New Cell1</td>`;
    tr.innerHTML += `<td>New Cell2</td>`;
    
    // insert the new row at the top of the table
    table.insertBefore(tr, table.firstChild);
}
