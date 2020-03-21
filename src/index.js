module.exports = function check(str, bracketsConfig) {

    let stack = []

    bracketsConfig.map(el => {stack.push(el.join(""))});

    for(i = 0; i <= stack.length; i++) {
        stack.map(bracket => {
        while(str.includes(bracket)){ str = str.replace(bracket, "")}})
    }
    
    return (str.length === 0) ? true : false;

}
