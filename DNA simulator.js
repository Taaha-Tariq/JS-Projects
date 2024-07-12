// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  //A function for creating pAequor Objects with specimen number and a random dna
 const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      //To randomly mutate a base of the dna of the specimen
      mutate () {
        let rand = Math.floor(Math.random() * 15);
        const bases = ['A', 'T', 'G', 'C'];
        let base = this.dna[rand];
        let index = bases.findIndex(bas => {
          return bas === base;
        });
        bases.splice(index, 1);
        console.log(bases);
        let rand2 = Math.floor(Math.random() * 2);
        this.dna[rand] = bases[rand2];
      },
      //To compare the dna of the specimen with that of another specimen and determine what percentage of it matches
      compareDNA (pAequor) {
         let match = 0;
         for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === pAequor.dna[i]){
            match++;
          }
         }
         let percen = (match / 15) * 100;
         percen = percen.toFixed(2);
         console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percen}% DNA in common`);
      },
      //To determine the likelyhood of survival based on how much of the dna is composed of c and g bases
      willLikelySurvive () {
        let match = 0;
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
            match++;
          }
        }
        let percen = (match / 15) * 100;
        if(percen >= 60){
          return true;
        }
        else {
          return false;
        }
      },
      //To return an array of complementary dna strand.
      complementaryDNA () {
        let compDNA = [];
        for(let i = 0; i < this.dna.length; i++){
            switch(this.dna[i]){
                case 'A':
                    compDNA.push('T');
                    break;
                case 'G':
                    compDNA.push('C');
                    break;
                case 'T':
                    compDNA.push('A');
                    break;
                case 'C':
                    compDNA.push('G');
                    break;
            }
        }
        return compDNA;
      }
    };
  }
  

