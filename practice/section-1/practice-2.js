'use strict';

function collectSameElements(collectionA, collectionB) {
    const bb = collectionB.flat();
    const result = collectionA.map(a => bb.find(b => b === a));

    return result.filter(el => el);
}