import { useState } from "react";

/* ================= Utility Functions ================= */

function SumOfArray(arr) {
    if (!arr || arr.length === 0) return 0;
    return arr.reduce((acc, n) => acc + n, 0);
}

function LargestNoOfArray(arr) {
    if (!arr || arr.length === 0) return null;

    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

function reverseArray(arr) {
    if (!arr) return [];

    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

function removeDuplicates(arr) {
    if (!arr) return [];

    let seen = {};
    let result = [];

    for (let num of arr) {
        if (!seen[num]) {
            seen[num] = true;
            result.push(num);
        }
    }
    return result;
}

function findFrequencyOfElements(arr) {
    if (!arr) return {};

    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

function findMissingNumber(arr){
    let numArr = [1, 2, 4, 5];
    let lastNumber = 5;

    let total = (lastNumber * (lastNumber + 1)) / 2;
    let sum = numArr.reduce((a, b) => a + b, 0);

    return 'Missing in Array [ 1, 2, 4, 5 ] is : '+ (total - sum)+' ';
}

function rotateArray(arr){
    arr = [1, 2, 3, 4, 5];
    let k = 2;

    let rotated = [...arr.slice(k), ...arr.slice(0, k)];
    return 'Rotated Array is : '+ rotated;
}

/* ================= NEW FUNCTIONS ================= */

function intersectionOfArrays(arr1, arr2){
    return arr1.filter(val => arr2.includes(val));
}

function maxSubArray(arr){
    let max = arr[0];
    let current = arr[0];

    for (let i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        max = Math.max(max, current);
    }

    return max;
}

function flattenArray(arr){
    // arr = [1, [2, [3, 4], 5]];
    // Method 1. using inbuilt function
    // return arr.flat(Infinity);                           

    // Method 2. Using Recursion (Most Important ⭐)
    let result = [];
    for(let i = 0; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flattenArray(arr[i]));
        }else{
          result.push(arr[i]);
        }
    }
     return result;

    // Method 3. Using reduce() Method 
    //   return arr.reduce((acc,val)=>{
    //         return acc.concat(Array.isArray(val) ? flattenArray(val): val);
    //     },[]);
}

function chunkArray(arr){
    // INPUT        arr = [1, 2, 3, 4, 5];
    
    // OUTPUT       [[1, 2], [3, 4], [5]]

    let size = 3;
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

function moveZeros(arr) {
    
    arr = [0, 1, 0, 3, 12];
   
    // Method 1 
    let j = 0; // position for next non-zero

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    // Method 2 - Using spread operator

    //    let nonZero = arr.filter(x => x !== 0);
    //     let zeros = arr.filter(x => x === 0);
    //     return [...nonZero, ...zeros];

    //  console.log(moveZeros(arr)); // [1, 3, 12, 0, 0]
    return arr;
}



/* ================= Programs List ================= */

const programs = (numberArr2) => [
    {
        id: 1,
        title: "Find the sum of array elements",
        outputFn: SumOfArray,
        code: `function SumOfArray(arr) {
    return arr.reduce((acc, n) => acc + n, 0);
}`,
    },
    {
        id: 2,
        title: "Find the largest number in an array",
        outputFn: LargestNoOfArray,
        code: `function LargestNoOfArray(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}`,
    },
    {
        id: 3,
        title: "Reverse an Array",
        outputFn: reverseArray,
        code: `function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}`,
    },
    {
        id: 4,
        title: "Remove Duplicates",
        outputFn: removeDuplicates,
        code: `const unique = [...new Set(arr)];`,
    },
    {
        id: 5,
        title: "Find Frequency of Elements",
        outputFn: findFrequencyOfElements,
        code: `function findFrequencyOfElements(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}`,
    },
    {
        id: 6,
        title: "Find Missing Number (1 to N)",
        outputFn: findMissingNumber,
        code: `let total = (n * (n + 1)) / 2;`,
    },
    {
        id: 7,
        title: "Rotate Array (Left)",
        outputFn: rotateArray,
        code: `let rotated = [...arr.slice(k), ...arr.slice(0, k)];`,
    },
    {
        id: 8,
        title: "Intersection of Two Arrays",
        outputFn: (arr) => intersectionOfArrays(arr, numberArr2),
        code: `function intersection(arr1, arr2) {
    return arr1.filter(val => arr2.includes(val));
}`,
    },
    {
        id: 9,
        title: "Largest Subarray Sum (Kadane’s Algorithm)",
        outputFn: maxSubArray,
        code: `function maxSubArray(arr) {
    let max = arr[0];
    let current = arr[0];

    for (let i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        max = Math.max(max, current);
    }
    return max;
}`,
    },
    {
        id: 10,
        title: "Flatten Nested Array",
        outputFn: flattenArray,
        code: `const flat = arr.flat(Infinity);`,
    },
    {
        id: 11,
        title: "Chunk Array",
        outputFn: chunkArray,
        code: `function chunkArray(arr, size) {
            let result = [];
            for (let i = 0; i < arr.length; i += size) {
                result.push(arr.slice(i, i + size));
            }
            return result;
        }`,
    },
     {
        id: 12,
        title: "Move Zeros to End",
        outputFn: moveZeros,
        code: `function moveZeros(arr) {
                
                arr = [0, 1, 0, 3, 12];
            
                // Method 1 
                let j = 0; // position for next non-zero

                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] !== 0) {
                        // swap
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        j++;
                    }
                }

                // Method 2 - Using spread operator

                //    let nonZero = arr.filter(x => x !== 0);
                //     let zeros = arr.filter(x => x === 0);
                //     return [...nonZero, ...zeros];

                //  console.log(moveZeros(arr)); // [1, 3, 12, 0, 0]
                return arr;
            }
        `,
    },
];

/* ================= Main Component ================= */

function ArrayPrograms() {
    const [selectedCode, setSelectedCode] = useState("");
    const [userInput, setUserInput] = useState("");
    const [userInput2, setUserInput2] = useState("");

    const numberArr = userInput
        ? userInput.split(",").map(Number)
        : [10, 5, 10, 20, 20, 8, 48, 30, 28, 9];

    const numberArr2 = userInput2
        ? userInput2.split(",").map(Number)
        : [20, 30, 50];

    return (
        <div className="container-fluid mt-4">
            <div className="row">

                {/* LEFT PANEL */}
                <div className="col-md-6">
                    <h4 className="mb-3">Array Programs</h4>

                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter Array 1 (e.g. 1,2,3)"
                        onChange={(e) => setUserInput(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter Array 2 (e.g. 2,3,5)"
                        onChange={(e) => setUserInput2(e.target.value)}
                    />

                    <code>
                        <b>Array 1: [{numberArr.join(", ")}]</b>
                    </code>
                    <br />
                    <code>
                        <b>Array 2: [{numberArr2.join(", ")}]</b>
                    </code>

                    <hr />

                    {programs(numberArr2).map((prog, index) => (
                        <div key={prog.id} className="mb-4">
                            <p>
                                {index + 1}. {prog.title} :
                                <strong className="ms-2">
                                    {JSON.stringify(prog.outputFn(numberArr))}
                                </strong>
                            </p>

                            <button
                                className="btn btn-sm btn-primary"
                                onClick={() => setSelectedCode(prog.code)}
                            >
                                View Code
                            </button>
                        </div>
                    ))}
                </div>

                {/* RIGHT PANEL */}
                <div className="col-md-6">
                    <h4 className="mb-3">Code Preview</h4>

                    <div className="border rounded p-3 bg-light" style={{ minHeight: "350px", whiteSpace: "pre-wrap" }}>
                        {selectedCode ? (
                            <pre><code>{selectedCode}</code></pre>
                        ) : (
                            <p className="text-muted">
                                Click <b>View Code</b> to preview program source
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ArrayPrograms;