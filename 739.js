/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const stack = [temperatures.length - 1]
    let result = new Array(temperatures.length).fill(0)
    let index, top
    for (let i = temperatures.length - 2; i >= 0; i--) {
        top = stack[stack.length - 1]
        if (temperatures[i] < temperatures[top]) {
            stack.push(i)
            result[i] = 1
        } else {
            while (temperatures[i] >=temperatures[top]) {
                stack.pop()
                top = stack[stack.length - 1]
            }
            result[i] = !stack.length ? 0 : top - i
            stack.push(i)
        }
    }
    return result
};