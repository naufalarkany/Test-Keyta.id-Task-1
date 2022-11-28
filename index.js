const upwordTriangleLeftToRight = (n) => {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            string += '*';
        }
        string += '\n';
    }
    console.log(string);
    return;
};

const downwordTriangleLeftToRight = (n) => {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n - i; k++) {
            string += '*';
        }
        string += '\n';
    }
    console.log(string);
    return;
};

const upwordTriangleRightToLeft = (n) => {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += ' ';
        }
        for (let k = 0; k < i; k++) {
            string += '*';
        }
        string += '\n';
    }
    console.log(string);
    return;
};

const pyramidTriangle = (n) => {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2 * n - 1; j++) {
            if (j >= n + 1 - i && j <= n - 1 + i) {
                string += '*';
            } else {
                string += ' ';
            }
        }
        string += '\n';
    }
    console.log(string);
    return;
};

const fibonacciSequence = (n) => {
    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    } else {
        let result = fibonacciSequence(n - 1);
        let length = result.length;
        result.push(result[length - 1] + result[length - 2]);
        console.log(result);
        return result;
    }
};

const reverseArray = (n) => {
    var rA = [];
    for (var i = n.length; i > 0; i--) {
        rA.push(n[i - 1]);
    }
    console.log(rA);
    return rA;
};

const duplicateArray = (n) => {
    let counts = {};

    for (let i = 0; i < n.length; i++) {
        if (counts[n[i]]) {
            counts[n[i]] += 1;
        } else {
            counts[n[i]] = 1;
        }
    }
    for (let prop in counts) {
        if (counts[prop] >= 2) {
            console.log(prop + ' : ' + counts[prop]);
        }
    }

    return;
};

const minMaxArray = (n) => {
    let minElement = n[0];
    for (let i = 1; i < n.length; ++i) {
        if (n[i] < minElement) {
            minElement = n[i];
        }
    }
    let maxElement = n[0];
    for (let i = 1; i < n.length; ++i) {
        if (n[i] > maxElement) {
            maxElement = n[i];
        }
    }

    console.log('smallest number = ' + minElement);
    console.log('largest number = ' + maxElement);

    return;
};
upwordTriangleLeftToRight(5);
downwordTriangleLeftToRight(5);
upwordTriangleRightToLeft(5);
pyramidTriangle(5);
fibonacciSequence(9);
reverseArray([4, 2, 8, 5, 1]);
duplicateArray([4, 2, 2, 8, 5, 1, 2, 4]);
minMaxArray([4, 2, 8, 5, 1]);
