const clockEl = document.querySelector(".clock_item");
const dayEl = document.querySelector(".day");

{
    function currentTime() {
        let date = new Date()
        let hour = date.getHours().toString().padStart(2, "0")
        let minute = date.getMinutes().toString().padStart(2, "0")
        let second = date.getSeconds().toString().padStart(2, "0")
        clockEl.innerHTML = `${hour} : ${minute} : ${second}`;
    }
    currentTime()

    setInterval(() => {
        currentTime()
    }, 1000);
}


// 1#


// function numberToString(num) {

// return String(num);
// }

// numberToString(1);
// numberToString(8);
// numberToString(9);


// 2#

// function opposite(number) {
//     return number * -1;

//   }

//   opposite(2);
//   opposite(9);
//   opposite(82);


// 3#

// function boolToWord( bool ){
//     if(bool){
//         return "Yes";
//     }else{
//         return "No";
//     }

// }

// boolToWord(true);
// boolToWord(false);
// boolToWord(true);

// 4#

// function repeatStr (n, s) {
//     return s.repeat(n);
//   }

//   repeatStr(5, "i");
//   repeatStr(6, "Dilshod");

// 5#

// const stringToNumber = function(str){
//     return Number(str);
//   }
//   stringToNumber("993")


// 6#

// function noSpace(x){return x.split(' ').join('')}

// noSpace("   fghj fyuiohh 09878gvy    gyfugiihjb hjkvkhv     ");


// ( 
// 7#

// function solution(str, ending){

//     return str = ending.endWith("bc")
    
// }
  
//   solution('abc', 'bc')
//   solution('abc', 'd') 

// xato ishlay olmadim boshqa
// )