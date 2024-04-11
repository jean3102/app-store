const today = new Date();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');
const year = today.getFullYear();

export const formattedDate = `${month}-${day}-${year}`;
