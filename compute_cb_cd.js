// compute_cb_cd.js

function compute_cb_cd() {
  for (let i = 0; i < m; i++) {
      cb[i] = c[d[i]];
  }

  for (let i = m; i < n; i++) {
      cd[i - m] = c[d[i]];
  }

  console.log("\nd:");
  let dStr = "";
  for (let i = 0; i < n; i++) {
      dStr += ` ${d[i]} `;
  }
  console.log(dStr);

  console.log("\ncb:");
  let cbStr = "";
  for (let i = 0; i < m; i++) {
      cbStr += ` ${cb[i].toFixed(6)} `;
  }
  console.log(cbStr);

  console.log("\ncd:");
  let cdStr = "";
  for (let i = 0; i < n; i++) {  
      cdStr += ` ${cd[i].toFixed(6)} `;
  }
  console.log(cdStr);
}

