let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgconainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turn0 = true;
let winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("was clicked");
  
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    console.log(count);
    //iswinner();
    if(count===9&&!iswinner()){
        draw();
    }else{
        iswinner();
    }
// if(iswinner()){
//     showwinner(box.innerText);
//     return;
// }
// if(draw()){
//     console.log('draw');
// }
   
  });
});
const resetgame = () => {
  turn0 = true;
  enabledboxes();
  msgconainer.classList.add("hide");
};
const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const draw = () => {
  //  console.log("aaaa");
 msg.innerText="draw";
 msgconainer.classList.remove("hide");
 disabledboxes();

};
const showwinner = (winner) => {
  disabledboxes();
  msg.innerText = `Congratulations , the winner is ${winner} :)`;
  msgconainer.classList.remove("hide");
};

const iswinner = () => {
  for (let i of winpattern) {
    // console.log(i[0],i[1],i[2]);
    // console.log(
    //     boxes[i[0]].innerText,
    //     boxes[i[1]].innerText,
    //     boxes[i[2]].innerText,
    // );
    let pos1 = boxes[i[0]].innerText;
    let pos2 = boxes[i[1]].innerText;
    let pos3 = boxes[i[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log(`winner is ${pos1}`);
        showwinner(pos1);
          return true;
      }
    }
  }
  // return false;
};
resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
