// Import any required modules and variables here

// JavaScript equivalent of global variables
const N = 128;
const M = 64;
let A = Array.from({ length: N }, () => Array(N).fill(0));
let B = Array.from({ length: N }, () => Array(N).fill(0));
let C = Array(N).fill(0);
let D = Array.from({ length: N }, () => Array(N).fill(0));
let c = Array(N).fill(0);
let b = Array(N).fill(0);
let b_aux = Array(N).fill(0);
let cb = Array(N).fill(0);
let cbBI = Array(N).fill(0);
let cbBID = Array(M).fill(0);
let cd = Array(N).fill(0);
let rd = Array(N).fill(0);
let BID = Array.from({ length: N }, () => Array(N).fill(0));
let W = Array.from({ length: N }, () => Array(N).fill(0));
let BI = Array.from({ length: N }, () => Array(N).fill(0));
let BIA_aux = Array.from({ length: N }, () => Array(N).fill(0));

let A_aux = Array.from({ length: N }, () => Array(N).fill(0));
let BIb = Array(N).fill(0);
let epsilon;

let d = Array(N).fill(0);
let d_aux = Array(N).fill(0);
let basis = Array(N).fill(0);
let n;
let m;
let Initial_n;
let Initial_W = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_cb = Array(N).fill(0);
let Initial_cd = Array(N).fill(0);
let Initial_A = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_A_aux = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_c = Array(N).fill(0);
let Initial_c_aux = Array(N).fill(0);
let Initial_basis = Array(N).fill(0);
let Initial_D = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_d = Array(N).fill(0);
let Initial_B = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_BIb = Array(N).fill(0);
let Initial_C = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_b = Array(N).fill(0);
let Initial_b_aux = Array(N).fill(0);
let Initial_rd = Array(N).fill(0);
let Initial_BID = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_BI = Array.from({ length: N }, () => Array(N).fill(0));
let Initial_cbBI = Array(N).fill(0);
let Initial_cbBID = Array(N).fill(0);
let Initial_BIA_aux = Array.from({ length: N }, () => Array(N).fill(0));

let consoleOutputs = [];
function appendToConsoleBox(message) {
    setTimeout(() => {
        const consoleBox = document.getElementById("consoleBox");
        const p = document.createElement("p");
        p.textContent = message;
        consoleBox.appendChild(p);
        consoleBox.scrollTop = consoleBox.scrollHeight;
    }, 0);
}

// function appendToConsoleBox(message) {
//     const consoleBox = document.getElementById("consoleBox");
//     const p = document.createElement("p");
//     p.textContent = message;
//     consoleBox.appendChild(p);
//     consoleBox.scrollTop = consoleBox.scrollHeight;
// }

console.log = function(...args) {
    const message = args.join(' ');
    originalLog.apply(console, args); 
    appendToConsoleBox(message);
    consoleOutputs.push(message); 
};


function main() {
    document.getElementById("loadingSpinner").style.display = "block";
    let i, j, p, n_p_m, itemp;
    let str = ""; 
    const selectedFile = document.getElementById('fileInput').files[0];

    if (!selectedFile) {
        alert("No file selected.");
        document.getElementById("loadingSpinner").style.display = "none";
        return;
    }
    
    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;

        const parsedData = read_file(fileContent);
        c = parsedData.c;
        A = parsedData.A;
        b = parsedData.b;
        epsilon = parsedData.epsilon;
        m = parsedData.m;
        n = parsedData.n;
        
        console.log(fileContent);
        console.log(`n = ${n}, m = ${m}`);

        Initial_n = n + m;
        n_p_m = n+m;

        console.log(`\nepsilon = ${epsilon}\n`);

        print_original_system();
        console.log('\n')
        copy_to_initial_matrix();

        console.log("Initial_A:");
        for (i = 0; i < m; i++) {
            let rowStr = "";
            for (j = 0; j < n_p_m; j++) {
                rowStr += ` ${Initial_A[i][j].toFixed(2)} `;
            }
            console.log(rowStr);
        }
        
        for (let i = 0; i < m; i++) {
            Initial_basis[i] = i + n;
        }
        for (let i = 0; i < n; i++) {
            Initial_c[i] = 0.0;
        }
        for (let i = n; i < Initial_n; i++) {
            Initial_c[i] = 1.0;
        }
        for (let i = 0; i < m; i++) {
            Initial_b[i] = b[i];
        }
        for (let i = 0; i < m; i++) {
            Initial_b_aux[i] = b[i];
        }
        

        // For Initial_basis
        console.log("\nInitial_basis:");
        let basisStr = "";
        for (let i = 0; i < m; i++) {
            basisStr += ` ${Initial_basis[i]}  `;
        }
        console.log(basisStr + "\n");

        // For Initial_c
        console.log("\nInitial_c:");
        let cStr = "";
        for (let i = 0; i < Initial_n; i++) {
            cStr += ` ${Initial_c[i].toFixed(2)}  `;
        }
        console.log(cStr + "\n");

        // For Initial_b
        console.log("\nInitial_b:");
        let bStr = "";
        for (let i = 0; i < m; i++) {
            bStr += ` ${Initial_b[i].toFixed(2)}  `;
        }
        console.log(bStr + "\n");

        Initial_simplex_algorithm();

        for (i = 0; i < m; i++) {
            itemp = Initial_basis[i];
            basis[i] = itemp;
            if (itemp >= n) {
                print_no_solution();
                return;
            }
        }

        print_initial_solution();
        simplex_algorithm();

        bublesort_d(basis, BIb, m);

        print_solution();

        redirectToResults();
    };

    reader.readAsText(selectedFile);
}

//event listener to the "Run" button to execute the main function
const runButton = document.getElementById('runButton');
runButton.addEventListener('click', main);

function redirectToResults() {
    document.getElementById("loadingSpinner").style.display = "none";
    let filename = document.getElementById('fileInput').files[0].name;
    sessionStorage.setItem("simplexResults", consoleOutputs.join("\n"));
    sessionStorage.setItem("filename", filename);
    window.location.href = 'results.html';
}
