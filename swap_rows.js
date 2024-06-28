// swap_rows.js

function swap_rows(W, n, m1, m2) {
  for (let i = 0; i <= 2 * n; i++) {
    const temp = W[m1][i];
    W[m1][i] = W[m2][i];
    W[m2][i] = temp;
  }
}