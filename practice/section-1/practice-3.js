'use strict';

function collectSameElements(collectionA, objectB) {
    const bb = objectB.value;
    const result = collectionA.map(a => bb.find(b => b === a));

    return result.filter(el => el);
}