let stopSortingBubble = false;

// Function to stop the bubble sorting process
function stopBubbleSortingProcess() {
  stopSortingBubble = true;
}

async function bubble() {
  console.log('In bubble()');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    console.log('In ith loop');
    for (let j = 0; j < ele.length - i - 1; j++) {
      if (stopSortingBubble) {
        console.log('Sorting stopped');
        break;
      }

      console.log('In jth loop');
      ele[j].style.background = 'blue';
      ele[j + 1].style.background = 'blue';
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        console.log('In if condition');
        await waitforme(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = 'cyan';
      ele[j + 1].style.background = 'cyan';
    }
    ele[ele.length - 1 - i].style.background = 'green';

    if (stopSortingBubble) {
      console.log('Sorting stopped');
      break;
    }
  }
  ele[0].style.background = 'green';

  // Reset the stopSortingBubble flag
  stopSortingBubble = false;
}

const bubSortbtn = document.querySelector(".bubbleSort");
const stopBubbleBtn = document.querySelector(".stopBubbleSortingBtn");

bubSortbtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

stopBubbleBtn.addEventListener('click', function () {
  stopBubbleSortingProcess();
});
