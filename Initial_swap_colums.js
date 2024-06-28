// Initial_swap_colums.js

function Initial_swap_colums(i, j) {
  for (let k = 0; k < m; k++) {
    const temp = Initial_A_aux[k][i];
    Initial_A_aux[k][i] = Initial_A_aux[k][j];
    Initial_A_aux[k][j] = temp;
  }
}
