// copy_to_initial_matrix.js

function copy_to_initial_matrix() {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      Initial_A[i][j] = Initial_A_aux[i][j] = A[i][j];
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = n; j < n + m; j++) {
      if (i === j - n) {
        Initial_A[i][j] = Initial_A_aux[i][j] = 1.0;
      } else {
        Initial_A[i][j] = Initial_A_aux[i][j] = 0.0;
      }
    }
  }
}
