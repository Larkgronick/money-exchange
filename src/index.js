// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};
    var nominal = {
        H: 50, 
        Q: 25, 
        D: 10, 
        N: 5, 
        P: 1
    };

    if (currency <= 0) {
        return {};
    }
    else if(currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
    }
    
    for (let key in nominal) {
        let value = nominal[key];
        if (value <= currency) {
            let count = Math.floor(currency/value); 
            result[key] = count;
            currency -= count * value; 
        }
    }  
    return result; 
}