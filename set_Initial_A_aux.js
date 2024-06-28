// set_Initial_A_aux.js

function set_Initial_A_aux() {
  const Initial_n = Initial_A[0].length;

  for (let i = 0; i < Initial_n; i++) {
    const k = Initial_d[i];
    for (let j = 0; j < m; j++) {
      Initial_A_aux[j][i] = Initial_A[j][k];
    }
  }
}