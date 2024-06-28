// swap_colums.js

function swap_colums(A, i, j, m) {
  for (let k = 0; k < m; k++) {
    const temp = A[k][i];
    A[k][i] = A[k][j];
    A[k][j] = temp;
  }
}