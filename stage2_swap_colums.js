// stage2_swap_colums.js

function stage2_swap_colums(A, A_aux, i, j, m) {
  for (let k = 0; k < m; k++) {
    const temp = A_aux[k][i];
    A_aux[k][i] = A[k][j];
    A_aux[k][j] = temp;
  }
}