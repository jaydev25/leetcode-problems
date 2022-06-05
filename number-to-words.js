/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    
    var key = [
        ['' ,'One','Two','Three','Four','Five','Six','Seven','Eight','Nine'],
        ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
        ['Hundred'],
        ['Thousand'],   
        [''], 
        ['Hundred'],
        ['Million', 'Billion'],


    ], number = [];
    
    var replacements = {
        'Ten One': 'Eleven',
        'One One': 'Eleven',
        'One Two': 'Twelve',
        'Ten Two': 'Twelve',
        'Ten Three': 'Thirteen',
        'One Three': 'Thirteen',
        'Ten Four': 'Forteen',
        'One Four': 'Forteen',
        'Ten Five': 'Fiveteen',
        'One Five': 'fiveteen',
        'Ten Six': 'Sixteen',
        'One Six': 'Sixteen',
        'Ten Seven': 'Seventeen',
        'One Seven': 'Seventeen',
        'Ten Eight': 'Eighteen',
        'One Eight': 'Eighteen',
        'Ten Nine': 'Nineteen',
        'One Nine': 'Nineteen',
    }
    
    var n = String(+num).split(""), pos = 0;
    
    while(n.length > 0) {
        var temp = n.pop()
        
        if (pos > 1) {
            if (key[pos] && key[pos][0]) {
                number.unshift(`${key[0][+temp]} ${key[pos][0]}`);
            } else {
                if (pos === 8) {
                    number.unshift(`${key[0][+temp]} ${key[2][0]}`);
                } else if (pos === 9) {
                    number.unshift(`${key[0][+temp]} ${key[6][1]}`);
                } else {
                    number.unshift(`${key[1][+temp]}`);
                }
            }
        } else {
            number.unshift(key[pos][+temp]);
        }
        pos ++;
    }
            
    var answer = number.join(' ');
    
    for (var rep in replacements) {
        if (answer.includes(rep)) {
            answer = answer.replace(rep, replacements[rep])
        }
    }
        
    return answer
    
};
