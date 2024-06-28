// matrix_vector_mult.js

function matrix_vector_mult(c, A, b, n, m) {
  for (let i = 0; i < n; i++) {
    let sum = 0.0;
    for (let k = 0; k < m; k++) {
      sum += A[i][k] * b[k];
    }
    c[i] = sum;
  }
}
