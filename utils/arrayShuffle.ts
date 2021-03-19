function shuffle(array: any[]): any[] {
  let n: number = array.length; // number of un-shuffled elements left in the array;
  let i: any; // randomly picked element
  let curEl: any; // previously picked element

  while (n) {
    // pick an random element form un-shuffled stack
    i = Math.floor(Math.random() * n--); // deduct number of un-shuffled elements in one

    curEl = array[n];
    array[n] = array[i];
    array[i] = curEl;
  }

  return array;
}

export { shuffle };
