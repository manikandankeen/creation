const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//productfrom
const productFrom = document.getElementById("productfrom");


productFrom.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
});

var table = document.getElementById("producttable");

//functions
function addData() {
    var batchNo = document.getElementById("batchNo").value;
    // Create row element
    let newRow = document.createElement("tr")
   // Create cells
   let c1 = document.createElement("td")
   let c2 = document.createElement("td")
   let c3 = document.createElement("td")
   let c4 = document.createElement("td")
   // Insert data to cells
   c1.innerText = "Elon"
   c2.innerText = "42"
   c3.innerText = "Houston"
   c4.innerText = "C++"
   
   // Append cells to row
   newRow.appendChild(c1);
   newRow.appendChild(c2);
   newRow.appendChild(c3);
   newRow.appendChild(c4);
   
   // Append row to table body
    document.getElementById("rows").appendChild(newRow);
}