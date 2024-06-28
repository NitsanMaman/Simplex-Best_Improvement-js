// copy_submatrix.js

function copy_submatrix(Dest, Source, istart, depth, jstart, length) {
  for (let i = istart; i < depth; i++) {
      for (let j = jstart; j < jstart + length; j++) {
          Dest[i - istart][j - jstart] = Source[i][j];
      }
  }
}
