function read_file(fileContent) {
     const lines = fileContent.split(/\r?\n/);
     let index = 0;
 
     // Find the "m, n:" line
     while (index < lines.length && !lines[index].startsWith("m, n")) {
         index++;
     }
 
     index++;  // Move to the line which contains m and n values.
 
     const mnValues = lines[index].trim().split(/\s+/);
     const m = parseFloat(mnValues[0]);
     const n = parseFloat(mnValues[1]);
 
     // Skip to the line after "c:"
     while (index < lines.length && !lines[index].startsWith("c:")) {
          index++;
     }
     index++;

     // Read c with aggregation until n numbers
     const c = [];
     let cElementsCount = 0;
     while (cElementsCount < n && index < lines.length) {
          const values = lines[index++].trim().split(/\s+/).map(parseFloat);
          c.push(...values);
          cElementsCount += values.length;
     }
 
     // Skip to the line after "A:"
     while (index < lines.length && !lines[index].startsWith("A:")) {
          index++;
     }
     index++;
     
     // Read A
     const A = [];
     let currentRow = [];
     
     while (!lines[index].startsWith("b:")) {
          const numbersInLine = lines[index].trim().split(/\s+/).map(parseFloat);
     
          for (let num of numbersInLine) {
          // Check if number is not NaN
          if (!isNaN(num)) {
               currentRow.push(num);
     
               // If the current row length equals n, push it to A and reset the row.
               if (currentRow.length === n) {
                    A.push(currentRow);
                    currentRow = [];
               }
          }
          }
     
          index++;
     }
 

 
     // Skip to the line after "b:"
     while (index < lines.length && !lines[index].startsWith("b:")) {
          index++;
     }
     index++;
     
     // Read b
     const b = [];
     let bElementsCount = 0;
     
     while (bElementsCount < m && index < lines.length) {
          const values = lines[index].trim().split(/\s+/).map(parseFloat);
          b.push(...values);
          bElementsCount += values.length;
          index++;
      }      


     // Find the "epsilon:" line
     while (index < lines.length && !lines[index].startsWith("epsilon:")) {
          index++;
     }
     
     if(index >= lines.length - 1) {
          console.error("Epsilon label found but no value provided in the file.");
          return;
     }
     
     index++;  // Move to the line containing the epsilon value.

     const epsilonValueStr = lines[index].trim();
     
     if (!epsilonValueStr) {
     console.error("Epsilon value is missing in the file.");
     return;  // exit the function if epsilon is missing
     }

     const epsilon = parseFloat(epsilonValueStr);

     return {
        c: c,
        A: A,
        b: b,
        epsilon: epsilon,
        m: m,
        n: n
    };
 }
 
 