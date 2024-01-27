// Global flag to stop sorting for insertion sort
let stopSortingInsertion = false;

// Function to stop the sorting process for insertion sort
function stopSortingInsertionProcess() {
  stopSortingInsertion = true;
}

async function insertion() {
  console.log('In insertion()');
  const ele = document.querySelectorAll(".bar");
  // color
  ele[0].style.background = 'green';

  for (let i = 1; i < ele.length; i++) {
    if (stopSortingInsertion) {
      console.log('Insertion sorting stopped');
      break;
    }

    console.log('In ith loop');
    let j = i - 1;
    let key = ele[i].style.height;
    // color
    ele[i].style.background = 'blue';

    await waitforme(delay);

    while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
      if (stopSortingInsertion) {
        console.log('Insertion sorting stopped');
        break;
      }

      console.log('In while loop');
      // color
      ele[j].style.background = 'blue';
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await waitforme(delay);

      // color
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = 'green';
      }
    }

    ele[j + 1].style.height = key;
    // color
    ele[i].style.background = 'green';
  }

  // Reset the stopSortingInsertion flag
  stopSortingInsertion = false;
}

const inSortbtn = document.querySelector(".insertionSort");
const stopInsertionBtn = document.querySelector(".stopInsertionSortingBtn");

inSortbtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

stopInsertionBtn.addEventListener('click', function () {
  stopSortingInsertionProcess();
});
