export function deleteObject(originalObject, deleteValue) {
    console.log('originalObject: ' + originalObject);
    console.log('deleteValue: ' + deleteValue)

    // for (const key in originalObject) {
    //     //for (let j = 0; j < deleteValue.length; j++) {
    //         if (originalObject[key].meet === deleteValue[0]) {
    //             delete originalObject[key];
    //         }
    //         if (originalObject[key].time === deleteValue[1]) {
    //             delete originalObject[key];
    //         }
    //         if (originalObject[key].lead === deleteValue[2]) {
    //             delete originalObject[key];
    //         }
    //         if (originalObject[key].plan === deleteValue[3]) {
    //             delete originalObject[key];
    //         }
    //     //}
    // }

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

    console.log(originalObject);

    return originalObject;
}
