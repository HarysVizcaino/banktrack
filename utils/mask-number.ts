export const maskNumber = (num: number | string): string => {
    const numStr = num.toString(); 
    if (numStr.length < 4) return "** " + numStr;
  
    return `** ${numStr.slice(-4)}`;
  };