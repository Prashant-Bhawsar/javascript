let str = "This is Javascript"
let arr = str.split(" ");
function swap(word){
  let low = 0
  let high = word.length - 1;
  while(low < high){
    let temp = word[low];
    word[low] = word[high];
    word[high] = temp;
    low++;
    high--;
    
  }
  return word.join("")

  
}
let outputStr ="";
for(let item  of arr){

  outputStr +=swap(item.split(""))
  outputStr +=" "
}
console.log(outputStr)

