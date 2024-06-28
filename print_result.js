// print_result.js

function print_result() {
  console.log("Optimal Basis:");
  for (let i = 0; i < m; i++) {
    process.stdout.write(` ${basis[i]} `);
  }
  console.log();

  console.log("Optimal Solution:");
  for (let i = 0; i < m; i++) {
    process.stdout.write(` X${basis[i]} = ${BIb[i]} `);
  }
  console.log();
}
