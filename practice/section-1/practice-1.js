'use strict';

function collectSameElements(collectionA, collectionB) {

    const aa = new Set(collectionA);
    const bb = new Set(collectionB);
    const result = new Set();

    aa.forEach(a => {
        if (bb.has(a)) { result.add(a) }
    });

    return Array.from(result);

}