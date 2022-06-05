// Your code here
function  moveDodgerRight(){
    const dodger = document.querySelector("#dodger")
    const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.marginRight = "-180px";
  }
}

function  moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.marginRight = `${left +0}px`;
  }
}
