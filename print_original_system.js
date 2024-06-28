// print_original_system.js

function print_original_system() {
  console.log("Original System:");
  for (let i = 0; i < m; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += `${A[i][j].toFixed(3)}\t`;
    }
    console.log(row);
  }
}

