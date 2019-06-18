export class NoPatternsValidation {
    isValid(arr: string[]){
        return arr.length === 0;
    }
}

export class Maximum {

    public findMaximum(number1: number, number2: number){
        return Math.max(number1, number2);
    }
}

export class FragmentsModification {

    public remove(fragments : string[], index: number): string[] {
        fragments.splice(index, 1);
        return fragments;
    }

    public merge(fragment1: string, fragment2: string, overlap: number): string {

        let subString2 = fragment2.substring(overlap, fragment2.length);

        return fragment1 + subString2;        
    }
}

export class Contents {

    public exists(pattern1 : string, pattern2 : string) : boolean {
        return pattern1.indexOf(pattern2) > -1 ? true : false;
    }    
}

export class Overlap {

    public findOverlap(pattern1: string, pattern2: string): number {
        let overlap          = 0;

        const length1        = pattern1.length;
        const length2        = pattern2.length;
     
        const minLength      = length1 < length2 ? length1 : length2;
     
        for(let i = 0; i < minLength; i++){
     
           let shift         = i + 1;
     
           let suffix        = pattern1.substring(length1 - shift, length1);
           let prefix        = pattern2.substring(0, shift);
           
           if (suffix === prefix) overlap = shift; 
        }
     
        return overlap;
    }
}

export class Iteration {

    private fragments: string[];

    private prefIndex: number;
    private suffIndex: number;

    private maxOverlap: number;

    constructor(fragments: string[]){
        this.fragments = fragments;
        this.prefIndex = 0; 
        this.suffIndex = 0; 
        this.maxOverlap = 0; 
    }

    public findOverlappingPatterns() : string[] {

        for(let i : number = 0; i < this.fragments.length; i++){
            for(let j : number = 0; j < this.fragments.length; j++){
                if(i === j) continue;

                if(new Contents().exists(this.fragments[i], this.fragments[j]))
                return new FragmentsModification().remove(this.fragments, j);
                

                let overlap = new Overlap().findOverlap(this.fragments[i], this.fragments[j]);
                if(overlap > this.maxOverlap) {
                    this.maxOverlap = overlap;
                    this.prefIndex = j;
                    this.suffIndex = i;
                }
            }
        }

        //if hasn't found two overlapping fragments then concatenating first two fragments
        if(this.maxOverlap === 0) {
            this.suffIndex = 0;
            this.prefIndex = 1;
        }
            
        let modifiedFragments = new FragmentsModification();

        this.fragments[this.suffIndex] = modifiedFragments
                                        .merge(this.fragments[this.suffIndex], 
                                               this.fragments[this.prefIndex], 
                                               this.maxOverlap);

        this.fragments = modifiedFragments.remove(this.fragments, this.prefIndex);
        
        return this.fragments;
    }

}

export class OriginalDocument{

    private fragments: string[];

    constructor(fragments: string[]){
        this.fragments = fragments;
    }

    public reconstruct(): string[] {

        if(new NoPatternsValidation().isValid(this.fragments)) 
        //if(new Validation.NoPatternsValidation().isValid(this.fragments)) 
        return [`Zero values are contained in the giving sample!`];

        while(this.fragments.length > 1){
            
            this.fragments = new Iteration(this.fragments).findOverlappingPatterns();

        }

        return this.fragments;
    }
}

let globFragments = [
    'verra, magna dui v',
    'mper viverra, magna d',
    'Nunc posuere, e',
    'ibulum felis, eget fauci',
    'ere, erat pulvinar semper v',
    'na dui vestibulum felis, eg',
    'eu ligula.',
    'iverra, magna dui vestibulum felis, eg',
    'per viverra, magna dui vestibulum f',
    ', magna dui vestibulum felis, eget fauc',
    'cibus magna sem e',
    'bus magna',
    'rra, magna dui vestibulum fel',
    'tibulum felis, eget faucibu',
    'a dui vestibulum felis, eget fau',
    're, erat pulv'
];
const fragments = new OriginalDocument(globFragments);
console.log(fragments.reconstruct());