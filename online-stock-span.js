var StockSpanner = function() {
    this.stack  = [];
};


StockSpanner.prototype.isEmpty = function() {
    return this.stack.length === 0 ? true : false;
}
StockSpanner.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
}
StockSpanner.prototype.push = function(val) {
    return this.stack.push(val);
}
StockSpanner.prototype. pop = function() {
    return this.stack.pop();
}

StockSpanner.prototype.next = function(price) {
    let currunt = 1;
    while(this.peek() && this.peek()[0] <= price) {
        currunt += this.pop()[1];
    }
    this.push([price, currunt]);
    return this.peek()[1];
};


const stock = new StockSpanner();
console.log(stock.next(28));
console.log(stock.next(14));
console.log(stock.next(28));
console.log(stock.next(35));
console.log(stock.next(46));
console.log(stock.next(53));
console.log(stock.next(66));
console.log(stock.next(80));
console.log(stock.next(87));
console.log(stock.next(88));
