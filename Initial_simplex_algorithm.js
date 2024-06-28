// Initial_simplex_algorithm.js

function Initial_simplex_algorithm() {
  let i, j, k, optimal_flag, enter_id, exiting_id, itemp, basis_i, dtemp, min_value;
  let count = 0;

  optimal_flag = 0;

  console.log(`\nm = ${m}, Initial_n = ${Initial_n}`);

  console.log("\nInitial_basis:");
  let basisStr = "";
  for (let i = 0; i < m; i++) {
      basisStr += ` ${Initial_basis[i]}  `;
  }
  console.log(basisStr + "\n");

  console.log("Initial_A:");
  for (i = 0; i < m; i++) {
    let rowStr = "";
    for (j = 0; j < Initial_n; j++) {
      rowStr += ` ${Initial_A[i][j].toFixed(2)} `;
    }
    console.log(rowStr);
  }

  while (optimal_flag === 0) {
    bublesort(Initial_basis, m);

    console.log("\nInitial_basis:");
    let basisStr = "";
    for (let i = 0; i < m; i++) {
        basisStr += ` ${Initial_basis[i]}  `;
    }
    console.log(basisStr + "\n");
    
    Initial_set_d();

    console.log("\nInitial_d:");
    let dStr = "";
    for (let i = 0; i < Initial_n; i++) {
        dStr += ` ${Initial_d[i]}  `;
    }
    console.log(dStr + "\n");
    

    set_Initial_A_aux(Initial_A, Initial_A_aux, Initial_d, m);

    console.log("\nInitial_A_aux (B, D):");
    for (i = 0; i < m; i++) {
      let rowStr = "";
      for (j = 0; j < Initial_n; j++) {
        rowStr += ` ${Initial_A_aux[i][j].toFixed(2)} `;
      }
      console.log(rowStr);
    }

    copy_submatrix(Initial_B, Initial_A_aux, 0, m, 0, m);

    console.log("\nInitial_B:");
    for (i = 0; i < m; i++) {
      let rowStr = "";
      for (j = 0; j < m; j++) {
        rowStr += ` ${Initial_B[i][j].toFixed(2)} `;
      }
      console.log(rowStr);
    }

    inv_gaussian(Initial_BI, Initial_B, m);
    erase_epsilons_matrix(Initial_BI, m, m);

    console.log("\nInitial_BI:");
    for (i = 0; i < m; i++) {
      let rowStr = "";
      for (j = 0; j < m; j++) {
        rowStr += ` ${Initial_BI[i][j].toFixed(2)} `;
      }
      console.log(rowStr);
    }

    matrix_mult(Initial_BIA_aux, Initial_BI, Initial_A_aux, m, m, Initial_n);
    erase_epsilons_matrix(Initial_BIA_aux, m, Initial_n);

    console.log("\nInitial_BIA_aux (I, B-1*D):");
    for (i = 0; i < m; i++) {
      let rowStr = "";
      for (j = 0; j < Initial_n; j++) {
        rowStr += ` ${Initial_BIA_aux[i][j].toFixed(2)} `;
      }
      console.log(rowStr);
    }

    console.log("\nInitial_A_aux (B,D):");
    for (i = 0; i < m; i++) {
      let rowStr = "";
      for (j = 0; j < Initial_n; j++) {
        rowStr += ` ${Initial_A_aux[i][j].toFixed(2)} `;
      }
      console.log(rowStr);
    }

    console.log("\nInitial_b:");
    let bStr = "";
    for (let i = 0; i < m; i++) {
        bStr += ` ${Initial_b[i].toFixed(2)}  `;
    }
    console.log(bStr + "\n");

    matrix_vector_mult(Initial_BIb, Initial_BI, Initial_b, m, m);
    erase_epsilons_vector(Initial_BIb, m);

    console.log("\nInitial_BIb:");
    let str = "";
    for (let i = 0; i < m; i++) {
        str += ` ${Initial_BIb[i].toFixed(2)}  `;
    }
    console.log(str.trim());
    console.log("");
    

    copy_submatrix(Initial_D, Initial_A_aux, 0, m, m, Initial_n - m);

    console.log("Initial_D:");
    for (i = 0; i < m; i++) {
      let rowStr = "";
      for (j = 0; j < Initial_n - m; j++) {
        rowStr += ` ${Initial_D[i][j].toFixed(2)} `;
      }
      console.log(rowStr);
    }

    compute_Initial_cb_Initial_cd();

    console.log("\nInitial_cb:");
    let cbStr = "";
    for (let i = 0; i < m; i++) {
        cbStr += ` ${Initial_cb[i].toFixed(2)}  `;
    }
    console.log(cbStr.trim());
    console.log("");
    
    console.log("\nInitial_cd:");
    let cdStr = "";
    for (let i = 0; i < Initial_n - m; i++) {
        cdStr += ` ${Initial_cd[i].toFixed(2)}  `;
    }
    console.log(cdStr.trim());
    console.log("");
    

    vector_matrix_mult(Initial_cbBI, Initial_cb, Initial_BI, m, m);
    erase_epsilons_vector(Initial_cbBI, m);

    console.log("\nInitial_cbBI:");
    let cbBIStr = "";
    for (let i = 0; i < m; i++) {
        cbBIStr += ` ${Initial_cbBI[i].toFixed(2)}  `;
    }
    console.log(cbBIStr.trim());
    console.log("");

    vector_matrix_mult(Initial_cbBID, Initial_cbBI, Initial_D, m, Initial_n - m);
    erase_epsilons_vector(Initial_cbBID, Initial_n - m);

    console.log("\nInitial_cbBID:");
    let cbBIDStr = "";
    for (let i = 0; i < Initial_n - m; i++) {
        cbBIDStr += ` ${Initial_cbBID[i].toFixed(2)}  `;
    }
    console.log(cbBIDStr.trim());
    console.log("");

    vector_subtract(Initial_rd, Initial_cd, Initial_cbBID, Initial_n - m);
    erase_epsilons_vector(Initial_rd, Initial_n - m);

    console.log("\nInitial_rd( cd - cbBID ):");
    let rdStr = "";
    for (let i = 0; i < Initial_n - m; i++) {
        rdStr += ` ${Initial_rd[i].toFixed(2)}  `;
    }
    console.log(rdStr.trim());
    console.log("");    

    min_value = find_min_value(Initial_rd, Initial_n - m);

    if (min_value >= 0.0) {
      optimal_flag = 1;
    } else {
      enter_id = find_Initial_most_negative();
      exiting_id = find_Initial_exiting_id(Initial_BIA_aux, Initial_BIb, enter_id, Initial_n, m);

      console.log(`\nenter_id  = ${enter_id},  exiting_id = ${exiting_id}, Initial_d[exiting_id] = ${Initial_d[exiting_id]}`);

      Initial_basis[exiting_id] = enter_id;

      console.log("\nInitial_basis:");
      let basisStr = "";
      for (let i = 0; i < m; i++) {
          basisStr += ` ${Initial_basis[i]}  `;
      }
      console.log(basisStr + "\n");
    }
  }
}
