// find_exiting_id.js

function find_exiting_id(y, x, enter_id, n, m) {
    let q;
    let init_flag = 0;
    let unbounded_flag = 1;
    let temp_min, temp;
    let temp_min_index;
  
    for (let i = 0; i < n; i++) {
        if (d[i] === enter_id) {
            q = i;
        }
    }
  
    for (let i = 0; i < m; i++) {
        console.log(`y[${i}][${q}] = ${y[i][q].toFixed(6)}, x[${i}] = ${x[i].toFixed(6)} ${y[i][q].toFixed(6)}`);
        console.log(`init_flag = ${init_flag}`);
        if (y[i][q] > 0.0) {
            unbounded_flag = 0;
  
            temp = x[i] / y[i][q];
            console.log(`temp_min_index = ${i}, temp = ${temp.toFixed(6)}`);
            if (init_flag === 0) {
                temp_min = temp;
                temp_min_index = i;
                init_flag = 1;
            } else if (temp < temp_min) {
                temp_min = temp;
                temp_min_index = i;
            }
        }

    }
    console.log(`temp_min_index  = ${temp_min_index}, temp_min  = ${temp_min.toFixed(6)}`);
    console.log(`unbounded flag = ${unbounded_flag}`);
    if (unbounded_flag === 1) {
        console.error("Unbounded linear program!");
        return;
    }
    
    return {
        temp_min_index : temp_min_index,
        temp_min: temp_min
    };
}
