export function deleteObject(originalObject, deleteValue) {

    const keysToDelete = [];

    for (const key in originalObject) {
        if (deleteValue[0] && originalObject[key].meet === deleteValue[0]) {
            keysToDelete.push(key);
        }
        if (deleteValue[1] && originalObject[key].time === deleteValue[1]) {
            keysToDelete.push(key);
        }
        if (deleteValue[2] && originalObject[key].lead === deleteValue[2]) {
            keysToDelete.push(key);
        }
        if (deleteValue[3] && originalObject[key].plan === deleteValue[3]) {
            keysToDelete.push(key);
        }
    }

    keysToDelete.forEach(key => {
        delete originalObject[key];
    });

    return originalObject;
}
