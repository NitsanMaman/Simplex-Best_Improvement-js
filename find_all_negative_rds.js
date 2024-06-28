// find_most_negative.js

function find_all_negative_rds(neg_ids) {
  // Assumptions: d[i] is original index, rd ordered by i=0,..., n-1 
  //                                                  d[0] ... d[n-1]

  let index = 0;
  for (let i = 0; i < (n - m); i++) {
      if (rd[i] < 0) {
          neg_ids[index] = d[m + i];
          index++;
          console.log(`\nXX:i = ${i}, rd[${i}] = ${rd[i].toFixed(2)}, d[${i}] =  ${d[i]}, index = ${index}`);
      }
  }

  // Return the count of negative rds.
  return index;
}

