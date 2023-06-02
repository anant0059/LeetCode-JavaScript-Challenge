// 2648. Generate Fibonacci Sequence2648. Generate Fibonacci Sequence


// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

 

// Example 1:

// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
// const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3
// Example 2:

// Input: callCount = 0
// Output: []
// Explanation: gen.next() is never called so nothing is outputted
 

// Constraints:

// 0 <= callCount <= 50




// Solution:


/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    var a=0, b=1;
    yield a;
    yield b;
    while(true){
        var c= a+b;
        yield c;
        a=b;
        b=c;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */