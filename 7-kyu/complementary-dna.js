function DNAStrand(dna) {
  return dna
    .split('')
    .map((x) => {
      switch(x) {
        case 'A':
          return 'T';
        case 'T':
          return 'A';
        case 'C':
          return 'G';
        case 'G':
          return 'C';
      }
    })
    .join('');
}