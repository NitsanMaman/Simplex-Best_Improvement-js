// copy_matrix.js

function copy_matrix(Dest, Source, n, m) {
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              Dest[i][j] = Source[i][j];
          }
      }
  }
  