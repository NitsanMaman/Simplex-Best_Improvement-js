// vector_matrix_mult.js

function vector_matrix_mult(c, b, A, n, m) {
  for (let i = 0; i < m; i++) {
    let sum = 0.0;
    for (let k = 0; k < n; k++) {
      sum += A[k][i] * b[k];
    }
    c[i] = sum;
  }
}