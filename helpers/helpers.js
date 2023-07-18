export const deck = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49]

export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export const baseField = {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined
  };

export const FetchUserImage = async (id) => {
  const userId = id || '159529075'
  try {
    const response1 = await
    fetch(`https://citizen.cool/get-userpic?id=${userId}`)
    .then(response => response.json())

    const response2 = await fetch(`https://api.telegram.org/bot6065372321:AAHjNaFZDVJZKIxRFDijIjW26GFLjTVqLvw/getFile?file_id=${response1.result}`)
    .then(response => response.json())

    return (`https://api.telegram.org/file/bot6065372321:AAHjNaFZDVJZKIxRFDijIjW26GFLjTVqLvw/${response2.result.file_path}`)
  } catch (error) {
    console.error('Ошибка при выполнении запросов:', error);
  }  
}

export const CompareCards = (attack, defend, trump) => {
  

}

  