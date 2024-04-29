export const shuffleArray = (array) => {
  const newArray = [...array]; // 주어진 배열을 변경하지 않기 위해 복사본을 만듭니다.
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0부터 i까지의 랜덤한 인덱스를 생성합니다.
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // 배열 요소를 서로 교환합니다.
  }
  return newArray; // 섞인 배열을 반환합니다.
};