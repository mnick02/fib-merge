function iterFib(num) {
    if (num <= 0) {
        return [];
    }
    else if (num === 1) {
        return [0];
    }
    let sequence = [0, 1];
    while (sequence.length < num) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
        //console.log("Printed");
    }
    return sequence;
}

//console.log(iterFib(3));
console.log(iterFib(8));
//console.log("hello");

function fibsRec(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }

    const seq = fibsRec(n - 1);
    //console.log(seq);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}

console.log(fibsRec(8));
