function pairElement(str) {
    //split string
    var strArray = str.split('');
    for (var dna = 0; dna < strArray.length; dna++) {
        switch(strArray[dna]) {
            //cases
            case 'G':
                strArray[dna] = ['G', 'C']
                break;
            case 'C':
                strArray[dna] = ['C', 'G']
                break;
            case 'T':
                strArray[dna] = ['T', 'A']
                break;
            case 'A':
                strArray[dna] = ['A', 'T']
                break;
            
        }
        
    }
    return strArray;
    
}

pairElement("GCG");