// vector_subtract.js

function vector_subtract(resultV, v1, v2, n) {
  for (let i = 0; i < n; i++) {
    resultV[i] = v1[i] - v2[i];
  }
}