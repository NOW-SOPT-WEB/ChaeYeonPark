export function shuffleType(array) {
    const arraySopti = Object.keys(array);
    const randomSopti = arraySopti[Math.floor(Math.random() * 16)];

    return randomSopti;
}