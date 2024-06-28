// find_most_negative.js

function find_most_negative() {
  // Assumptions: d[i] is the original index, rd ordered by i = 0, ..., n - 1
  // d[0] ... d[n - 1]

  let most_index = d[m];
  let temp_value = rd[0];

  for (let i = 0; i < n - m; i++) {
    if (rd[i] < temp_value) {
      most_index = d[m + i];
      temp_value = rd[i];
    }
  }

  return most_index;
}
