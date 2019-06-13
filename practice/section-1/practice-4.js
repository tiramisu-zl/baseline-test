'use strict';

function collectSameElements(collectionA, objectB) {

    const aa = collectionA.map(el => el.key);
    const bb = objectB.value;
    const result = aa.map(a => bb.find(b => b === a));

    return result.filter(el => el);

}