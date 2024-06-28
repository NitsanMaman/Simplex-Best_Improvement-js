// erase_epsilons_vector.js

function erase_epsilons_vector(darray) {
  for (let i = 0; i < darray.length; i++) {
    if (Math.abs(darray[i]) < epsilon) {
      darray[i] = 0.0;
    }
  }
}
