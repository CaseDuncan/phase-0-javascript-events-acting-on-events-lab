// Your code here

function  moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.marginRight = `${left + 0}px`;
  }
}
