// find_Initial_most_negative.js

function find_Initial_most_negative() {
  // Assumptions: d[i] is the original index, Initial_rd ordered by i = 0, ..., n - 1
  // Initial_d[0] ... Initial_d[n - 1]

  let most_index = Initial_d[m];
  let temp_value = Initial_rd[0];

  for (let i = 0; i < Initial_n - m; i++) {
    if (Initial_rd[i] < temp_value) {
      most_index = Initial_d[m + i];
      temp_value = Initial_rd[i];
    }
  }

  return most_index;
}
