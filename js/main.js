function getNumbers (from, to) {
    for (let i = from; i <= to; i++) {
     //result = (i=>0)  ? i : "число должно быть не меньше нуля" 
        if (i >= 0) {
            console.log(i);
        } else {
            console.log("число должно быть не меньше нуля");
            break; 
        }
    };
}
getNumbers(0,200);

function getMaxRangeComment (line, maxrange) {
  if (line.length <= maxrange) {
      return true;
    }
  return false;
}
getMaxRangeComment();