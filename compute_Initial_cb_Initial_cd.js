// compute_Initial_cb_Initial_cd.js

function compute_Initial_cb_Initial_cd() {
  for (let i = 0; i < m; i++) {
      Initial_cb[i] = Initial_c[Initial_d[i]];
  }

  for (let i = m; i < Initial_n; i++) {
      Initial_cd[i - m] = Initial_c[Initial_d[i]];
  }

  console.log("\nInitial_d:");
  let dStr = "";
  for (let i = 0; i < Initial_n ; i++) {
      dStr += ` ${Initial_d[i]}  `;
  }
  console.log(dStr.trim());
  console.log("");
  
  console.log("\nInitial_cb:");
  let cbStr = "";
  for (let i = 0; i < m; i++) {
      cbStr += ` ${Initial_cb[i].toFixed(6)}  `;
  }
  console.log(cbStr.trim());

  console.log("\nInitial_cd:");
  let cdStr = "";
  for (let i = 0; i < Initial_n - m; i++) {
      cdStr += ` ${Initial_cd[i].toFixed(6)}  `;
  }
  console.log(cdStr.trim());
  console.log("");
}
