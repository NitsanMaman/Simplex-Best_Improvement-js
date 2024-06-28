// Initial_set_d.js

function Initial_set_d() {
  for (let i = 0; i < m; i++) {
    Initial_d[i] = Initial_basis[i];
  }

  let pos = m;

  for (let i = 0; i < Initial_n; i++) {
    let flag = 1;

    for (let j = 0; j < m && flag === 1; j++) {
      if (i === Initial_basis[j]) {
        flag = 0;
      }
    }

    if (flag === 1) {
      Initial_d[pos++] = i;
    }
  }
}
