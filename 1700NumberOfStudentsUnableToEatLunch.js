var countStudents = function(students, sandwiches) {
    // let studentInFunc = students, sandwichesInFunc = sandwiches
    let count = 0
    while (students.length) {
        if (count === students.length) break
        const a = students.shift()
        const b = sandwiches.shift()
        if (a !== b) {
            students.push(a)
            sandwiches.unshift(b)
            count++
        } else {
            count = 0
        }
    }
    // return students
    return students.length
};
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]))