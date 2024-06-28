// print_solution.js

function print_solution() {
  // Print basis:
  console.log("\nbasis:");
  let basisStr = "";
  for (let i = 0; i < m; i++) {
    basisStr += ` ${basis[i]}  `;
  }
  console.log(basisStr + "\n");

  // Print Basic Solution:
  console.log("\nBasic Solution:");
  let solutionStr = "";
  for (let i = 0; i < m; i++) {
    solutionStr += ` X${basis[i] + 1} = ${BIb[i].toFixed(6)}  `;
  }
  console.log(solutionStr + "\n");

  // Print Solution value:
  console.log("\nSolution value:");
  let sum = 0;
  let valueStr = "";
  for (let i = 0; i < m; i++) {
    const term = c[basis[i]] * BIb[i];
    sum += term;
    valueStr += `${c[basis[i]].toFixed(6)} * ${BIb[i].toFixed(6)}`;
    if (i < m - 1){
      valueStr += ' + '
    }
  }
  console.log(valueStr);
  console.log("[EMPHASIS] = " + sum.toFixed(6));
}