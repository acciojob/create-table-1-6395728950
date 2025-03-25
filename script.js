function insert_Row() {
    const table = document.getElementById("sampleTable");
    const tbody = table.tBodies[0];  // get the first <tbody> element in the table
    const tr = document.createElement("tr");
    tr.innerHTML += `<td>New Cell1</td>`;
    tr.innerHTML += `<td>New Cell2</td>`;
    
    // insert the new row at the top of the tbody
    tbody.insertBefore(tr, tbody.firstChild);
}
