export function deleteObject(object, checkType, deleteValue) {
    for (const key in object) {
        if (object[key][checkType] === deleteValue) {
            delete object[key];
        }
    }
}