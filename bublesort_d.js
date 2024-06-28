// bublesort_d.js


function bublesort_d(array, darr, n) {
  let i, j, limit, flag, temp;
  let dtemp;

  flag = 1;
  for (i = 0; i < n && flag === 1; i++) {
      flag = 0;
      limit = n - i - 1;
      for (j = 0; j < limit; j++) {
          if (array[j] > array[j + 1]) {
              flag = 1;
              dtemp = darr[j];
              darr[j] = darr[j + 1];
              darr[j + 1] = dtemp;
              temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
          }
      }
  }
}
