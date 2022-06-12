/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    
    var key = [
        ['Zero' ,'One','Two','Three','Four','Five','Six','Seven','Eight','Nine'],
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
        'Ten Four': 'Fourteen',
        'One Four': 'Fourteen',
        'Ten Five': 'Fifteen',
        'One Five': 'fifteen',
        'Ten Six': 'Sixteen',
        'One Six': 'Sixteen',
        'Ten Seven': 'Seventeen',
        'One Seven': 'Seventeen',
        'Ten Eight': 'Eighteen',
        'One Eight': 'Eighteen',
        'Ten Nine': 'Nineteen',
        'One Nine': 'Nineteen',
       

    }
    
    var n = String(+num).split(""), pos = 0, zerosAdded = 0;
    
    while(n.length > 0) {
        var temp = n.pop()
        
        if (pos > 1) {
            if (key[pos] && key[pos][0]) {
                number.unshift(`${key[0][+temp]} ${key[pos][0]}`);
                if (temp == 0) {
                    zerosAdded ++;
                }
            } else {
                if (pos === 8) {
                    number.unshift(`${key[0][+temp]} ${key[2][0]}`);
                    if (temp == 0) {
                        zerosAdded ++;
                    }
                } else if (pos === 9) {
                    number.unshift(`${key[0][+temp]} ${key[6][1]}`);
                     if (temp == 0) {
                        zerosAdded ++;
                    }
                } else {
                    console.log(pos, number.length, n.length)
                    number.unshift(`${key[1][+temp]}`);
                    if ((number[0].length > 0 || n.length === 1) && number[1].includes('Zero')) {
                        number[1] = number[1].split(' ')[1];
                    }
                }
            }
        } else if (key[pos][+temp] !== 'Zero') {
            number.unshift(key[pos][+temp]);
        }
        pos ++;
    }
    
    console.log(number)
    
    number = number.filter(n => n.length > 0 && !n.includes('Zero'))
                
    var answer = number.join(' ');
    
    for (var rep in replacements) {
        if (answer.includes(rep)) {
            answer = answer.replaceAll(rep, replacements[rep])
        }
    }
        
    return answer.trim() || 'Zero'
    
};
