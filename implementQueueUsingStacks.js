/**
 * Easy
 * Runtime: 62 ms beats 29.53%
 * Memory: 41.6 MB beats 86.15%
 */

var MyQueue = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack = [...this.stack, x];
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack?.[0]) {
    const [x, ...rest] = this.stack;
    this.stack = rest;
    return x;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack?.[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack?.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
