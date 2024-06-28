// matrix_mult.js

function matrix_mult(C, A, B, n, m, p) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      let sum = 0.0;
      for (let k = 0; k < m; k++) {
        sum += A[i][k] * B[k][j];
      }
      C[i][j] = sum;
    }
  }
}
