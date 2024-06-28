// erase_epsilons_matrix.js

function erase_epsilons_matrix(matrix, rows, cols, epsilon) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (Math.abs(matrix[i][j]) < epsilon) {
                matrix[i][j] = 0.0;
            }
        }
    }
}

// Usage example:
// Call erase_epsilons_matrix with your matrix and epsilon value
// erase_epsilons_matrix(yourMatrix, numRows, numCols, yourEpsilon);
