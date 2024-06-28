// set_A_aux.js

function set_A_aux() {
  const m = A.length;
  const n = A[0].length;

  for (let i = 0; i < n; i++) {
    const k = d[i];
    for (let j = 0; j < m; j++) {
      A_aux[j][i] = A[j][k];
    }
  }
}
