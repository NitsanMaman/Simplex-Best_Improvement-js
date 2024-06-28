function simplex_algorithm() {
    let i, j, k, optimal_flag, enter_id, exiting_id, itemp, basis_i;
    let dtemp, min_value;
    let count = 1;
  
    optimal_flag = 0;
  
    console.log(`m = ${m}, n = ${n}`);
  
    console.log("\nbasis1:");
    let basis1Str = "";
    for (let i = 0; i < m; i++) {
        basis1Str += ` ${basis[i]}  `;
    }
    console.log(basis1Str + "\n");
    
  
    console.log("A:");
    for (let i = 0; i < m; i++) {
        let rowStr = "";
        for (let j = 0; j < n; j++) {
            rowStr += ` ${A[i][j].toFixed(2)} `;
        }
        console.log(rowStr);
    }
    console.log("\n");
    
  
    while (optimal_flag === 0) {
        console.log(`count = ${count}`);
        count++;
  
        bublesort(basis, m);
  
        console.log("\nbasis2:");
        let basisStr2 = "";
        for (let i = 0; i < m; i++) {
            basisStr2 += ` ${basis[i]} `;
        }
        console.log(basisStr2 + "\n");
  
  
        set_d();
  
        // Printing d array
        console.log("\nd:");
        let dStr = "";
        for (let i = 0; i < n; i++) {
            dStr += ` ${d[i]} `;
        }
        console.log(dStr + "\n");
  
        set_A_aux();
  
        // Printing A_aux matrix
        console.log("\nA_aux (B, D):");
        for (let i = 0; i < m; i++) {
            let A_auxRow = "";
            for (let j = 0; j < n; j++) {
                A_auxRow += ` ${A_aux[i][j].toFixed(2)} `;
            }
            console.log(A_auxRow);
        }
  
        copy_submatrix(B, A_aux, 0, m, 0, m); // Set B
  
        // Printing B matrix
        console.log("\nB:");
        for (let i = 0; i < m; i++) {
            let BRow = "";
            for (let j = 0; j < m; j++) {
                BRow += ` ${B[i][j].toFixed(2)} `;
            }
            console.log(BRow);
        }
  
  
        inv_gaussian(BI, B, m); // BI = B-1
  
        erase_epsilons_matrix(BI, m, m);
  
        console.log("\nBI:");
        for (let i = 0; i < m; i++) {
            let BIRow = "";
            for (let j = 0; j < m; j++) {
                BIRow += ` ${BI[i][j].toFixed(2)} `;
            }
            console.log(BIRow);
        }
  
        matrix_mult(BIA_aux, BI, A_aux, m, m, n);
        erase_epsilons_matrix(BIA_aux, m, n);
  
        console.log("\nBIA_aux (I, B-1*D):");
        for (let i = 0; i < m; i++) {
            let BIA_auxRow = "";
            for (let j = 0; j < n; j++) {
                BIA_auxRow += ` ${BIA_aux[i][j].toFixed(2)} `;
            }
            console.log(BIA_auxRow);
        }
  
        console.log("\nA_aux (B,D):");
        for (let i = 0; i < m; i++) {
            let A_auxRow = "";
            for (let j = 0; j < n; j++) {
                A_auxRow += ` ${A_aux[i][j].toFixed(2)} `;
            }
            console.log(A_auxRow);
        }
  
        console.log("\nb:");
        let bStr = "";
        for (let i = 0; i < m; i++) {
            bStr += ` ${b[i].toFixed(2)} `;
        }
        console.log(bStr);
  
        matrix_vector_mult(BIb, BI, b, m, m);
        erase_epsilons_vector(BIb, m);
  
        console.log("\nBIb:");
        let BIbStr = "";
        for (let i = 0; i < m; i++) {
            BIbStr += ` ${BIb[i].toFixed(2)} `;
        }
        console.log(BIbStr);
  
        copy_submatrix(D, A_aux, 0, m, m, n - m); // Set D
  
        console.log("\nD:");
        for (let i = 0; i < m; i++) {
            let DRow = "";
            for (let j = 0; j < n - m; j++) {
                DRow += ` ${D[i][j].toFixed(2)} `;
            }
            console.log(DRow);
        }
  
        compute_cb_cd();
  
        console.log("\ncb:");
        let cbStr = "";
        for (let i = 0; i < m; i++) {
            cbStr += ` ${cb[i].toFixed(2)} `;
        }
        console.log(cbStr);
  
        console.log("\ncd:");
        let cdStr = "";
        for (let i = 0; i < n - m; i++) {
            cdStr += ` ${cd[i].toFixed(2)} `;
        }
        console.log(cdStr);
  
        // cbBI = cb * B-1
        vector_matrix_mult(cbBI, cb, BI, m, m);
        erase_epsilons_vector(cbBI, m);
  
        console.log("\ncbBI:");
        let cbBIStr = "";
        for (let i = 0; i < m; i++) {
            cbBIStr += ` ${cbBI[i].toFixed(2)} `;
        }
        console.log(cbBIStr);
  
        vector_matrix_mult(cbBID, cbBI, D, m, n - m);
        erase_epsilons_vector(cbBID, n - m);
  
        console.log("\ncbBID:");
        let cbBIDStr = "";
        for (let i = 0; i < n - m; i++) {
            cbBIDStr += ` ${cbBID[i].toFixed(2)} `;
        }
        console.log(cbBIDStr);
  
        vector_subtract(rd, cd, cbBID, n - m);
        erase_epsilons_vector(rd, n - m);
  
        console.log("\nrd( cd - cbBID ):");
        console.log("\nXXd:");
        let XXdStr = "";
        for (let i = 0; i < n - m; i++) {
            XXdStr += ` ${d[i + m]} `;
        }
        console.log(XXdStr);
 
        console.log("\nXXrd:");
        let XXrdStr = "";
        for (let i = 0; i < n - m; i++) {
            XXrdStr += ` ${rd[i].toFixed(2)} `;
        }
        console.log(XXrdStr);

        min_value = find_min_value(rd, n - m);
        if (min_value >= 0.0) {
            optimal_flag = 1;
        } else {
            let negative_rds = Array(N).fill(0);
            let index, n_n_rds, best_improvement_id, best_exiting_id, q, k;
            let best_improvement, temp_improvement;

            n_n_rds = find_all_negative_rds(negative_rds);

            best_improvement = 0.0;
            best_improvement_id = -1;

            for (index = 0; index < n_n_rds; index++) {
                enter_id = negative_rds[index];
                for (k = 0; k < (n - m); k++) {
                    if (d[m + k] === enter_id) {
                        q = k;
                    }
                }
                console.log(`\nXXenter_id = ${enter_id}, q = ${q}, rd[q] = ${rd[q].toFixed(6)}\n`); 
                const parsedData = find_exiting_id(BIA_aux, BIb, enter_id, n, m);
                exiting_id = parsedData.temp_min_index;
                temp_improvement = parsedData.temp_min;
                console.log(exiting_id)
                console.log(temp_improvement)
                console.log(`\n1:temp_improvement = ${temp_improvement.toFixed(2)},  best_improvement = ${best_improvement.toFixed(2)}\n`);
                temp_improvement = -rd[q] * temp_improvement;
                console.log(`\n2:temp_improvement = ${temp_improvement.toFixed(2)},  best_improvement = ${best_improvement.toFixed(2)}\n`);
                
                if (temp_improvement >= best_improvement) {
                    best_improvement = temp_improvement;
                    best_improvement_id = enter_id;
                    best_exiting_id = exiting_id;
                }
            }

            enter_id = best_improvement_id;
            exiting_id = best_exiting_id;

            console.log(`pivot: enter_id = ${enter_id}, exiting_id = ${d[exiting_id]}`);
            
            basis[exiting_id] = enter_id;

            console.log("\nbasis:");
            for (i = 0; i < m; i++) {
                console.log(` ${basis[i]} `);
            }
            console.log();
        }
    } // End of while loop
} // End of simplex_algorithm function
