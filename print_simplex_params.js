// print_simplex_params.js

function print_simplex_params(A, A_aux, c, b, n, m, B, BID, D, basis, d, cb, cd) {
  console.log(`m = ${m}, n = ${n}`);
  console.log("A:");
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(` ${A[i][j]} `);
    }
    console.log();
  }

  console.log("c:");
  for (let i = 0; i < n; i++) {
    process.stdout.write(` ${c[i]} `);
  }
  console.log();

  console.log("b:");
  for (let i = 0; i < m; i++) {
    process.stdout.write(` ${b[i]} `);
  }
  console.log();

  console.log("A_aux:");
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(` ${A_aux[i][j]} `);
    }
    console.log();
  }

  console.log("B:");
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      process.stdout.write(` ${B[i][j]} `);
    }
    console.log();
  }

  console.log("basis:");
  for (let i = 0; i < m; i++) {
    process.stdout.write(` ${basis[i]} `);
  }
  console.log();
}