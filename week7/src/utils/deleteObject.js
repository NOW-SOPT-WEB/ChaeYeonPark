export function deleteObject(originalObject, checkType, deleteValue) {
    console.log('originalObject: ' + originalObject);
    console.log('checkType: ' + checkType);
    console.log('deleteValue: ' + deleteValue)

    const updatedObject = { ...originalObject };

    for (const key in updatedObject) {
        if (updatedObject[key][checkType] === deleteValue) {
            delete updatedObject[key];
        }
    }

    return updatedObject;
}
