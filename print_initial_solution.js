// print_initial_solution.js

function print_initial_solution() {

  console.log("\nInitial_basis:");
  let basisStr = "";
  for (let i = 0; i < m; i++) {
      basisStr += ` ${Initial_basis[i]}  `;
  }
  console.log(basisStr + "\n");

  console.log("\nBasic Solution:");
  let solutionStr = "";
  for (let i = 0; i < m; i++) {
      solutionStr += ` X${Initial_basis[i]} = ${Initial_BIb[i].toFixed(6)} `;
  }
  console.log(solutionStr + "\n");
  

} // print_initial_solution

