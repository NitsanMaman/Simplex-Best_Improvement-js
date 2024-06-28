// invert_matrix.js

// Assuming W, N and epsilon are globally declared, or passed as parameters

function swapRows(matrix, n, row1, row2) {
  for (let j = 0; j < 2 * n; j++) {
      let temp = matrix[row1][j];
      matrix[row1][j] = matrix[row2][j];
      matrix[row2][j] = temp;
  }
}

function inv_gaussian(B, A, n) {
  let W = new Array(n).fill(0).map(row => new Array(2 * n).fill(0));

  for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
          W[i][j] = A[i][j];

  for (let i = 0; i < n; i++)
      for (let j = n; j < 2 * n; j++)
          W[i][j] = 0.0;

  for (let i = 0; i < n; i++)
      W[i][n + i] = 1.0;

  console.log("\nBefore loop W:");
  for (let i = 0; i < n; i++) {
      console.log(W[i].map(value => ` ${value.toFixed(2)} `).join(''));
  }

  for (let k = 0; k < n; k++) {
    console.log(`\nk = ${k}`);
      let p = k;
      let MaxValue = Math.abs(W[k][k]);

      for (let i = k + 1; i < n; i++)
          if (Math.abs(W[i][k]) > MaxValue) {
              p = i;
              MaxValue = Math.abs(W[i][k]);
          }
      console.log(`\np = ${p}, k = ${k}`);
      if (p != k) {
          swapRows(W, n, k, p);
      }

      let RelativeValue = W[k][k];
      console.log(`\nRelativeValue = ${RelativeValue.toFixed(2)}`);
      W[k][k] = 1.0;

      for (let j = k + 1; j < 2 * n; j++) {
          let temp = W[k][j] / RelativeValue;
          W[k][j] = (Math.abs(temp) < epsilon) ? 0.0 : temp;
      }

      for (let i = 0; i < n; i++) {
          if (i !== k) {
              RelativeValue = W[i][k];
              W[i][k] = 0.0;
              for (let j = k + 1; j < 2 * n; j++) {
                  let temp = W[i][j] - RelativeValue * W[k][j];
                  W[i][j] = (Math.abs(temp) < epsilon) ? 0.0 : temp;
              }
          }
      }

      console.log("\nW:");
      for (let i = 0; i < n; i++) {
          console.log(W[i].map(value => ` ${value.toFixed(2)} `).join(''));
      }
  }

  for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
          B[j][i] = W[j][i + n];

  console.log("\nBI:");
  for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(` ${B[i][j].toFixed(6)} `);
      }
      console.log(row.join(''));
  }
            

  console.log("\nW:");
  for (let i = 0; i < n; i++) {
      console.log(W[i].map(value => ` ${value.toFixed(2)} `).join(''));
  }
}

// You might also want to export the function if you're using a module system
// export { invGaussian };
