// find_Initial_exiting_id.js

function find_Initial_exiting_id(y, x, enter_id, n, m) {
  let i, temp_min_index = 11, init_flag = 0, q;
  let temp_min = 0.0, temp;

  for (i = 0; i < Initial_n; i++) {
      if (Initial_d[i] === enter_id) {
          q = i;
      }
  }

  for (i = 0; i < m; i++) {
      console.log(`y[${i}][${q}] = ${y[i][q].toFixed(6)}, x[${i}] = ${x[i].toFixed(6)} ${y[i][q].toFixed(6)}`);
      console.log(`init_flag = ${init_flag}`);

      if (y[i][q] > 0.0) {
          temp = x[i] / y[i][q];
          console.log(`i = ${i}, temp = ${temp.toFixed(6)}`);
          
          if (init_flag === 0) {
              temp_min = temp;
              temp_min_index = i;
              init_flag = 1;
          } else if (temp < temp_min) {
              temp_min = temp;
              temp_min_index = i;
          }
      }
      console.log(`temp_min_index  = ${temp_min_index}, temp_min  = ${temp_min.toFixed(6)}`);
  }
  return temp_min_index;
}


