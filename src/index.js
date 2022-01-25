const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
/*
 Ugly solution please do not copy this🙌🏽
*/
function decode(expr) {
    const ws = '**********';
    const codedWords = expr.split(ws); //separate coded words
    let words = codedWords.map(el => {  
        return [...el.matchAll(/.{1,10}/g)]; //each letter is 10 digits-separate it by 10
    }).map((el, i, arr) =>{ //getting off from leftPadded zeros
        let words = el.map(e => e[0].replace(/^0*/, ''));
        return words;
    }).map(el=> { //separate by 2 symbols6 getting split letter still in digits 10/ 11
        let dec = el.map(e=>[...e.matchAll(/.{1,2}/g)]);

        return [...dec];
    }).map(el=> { //OMG... so sorry for this) map each digit to '-'/'.'
        let a = el.map(e=>{ 
            let a = e.map(e1 => {
                return e1[0] == 11 ? '-' : '.'
            });
            let letter = MORSE_TABLE[a.join('')]; //here we have input like '..--'and we can map it to human alphabet letters
            
            return letter;
        });

        return a.join(''); //glue letters to word
    });

    
    return words.join(' '); //glue words to sentence
    //replace(/^0*/,'')
}

module.exports = {
    decode
}