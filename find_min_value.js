// find_min_value.js

function find_min_value(rd, n) {
  // Assumptions: d[i] is the original index, rd ordered by i = 0, ..., n - 1
  // d[0] ... d[n - 1]

  let most_index = d[0];
  let temp_value = rd[0];

  for (let i = 0; i < n; i++) {
    if (rd[i] < temp_value) {
      most_index = d[i];
      temp_value = rd[i];
    }
  }

  return temp_value;
}
