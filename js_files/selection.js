let stopSorting = false;

// Function to stop the sorting process
function stopSortingProcess() {
  stopSorting = true;
}

async function selection() {
  console.log('In selection()');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    if (stopSorting) {
      console.log('Sorting stopped');
      break;
    }

    console.log('In ith loop');
    let min_index = i;
    ele[i].style.background = 'blue';
    for (let j = i + 1; j < ele.length; j++) {
      if (stopSorting) {
        console.log('Sorting stopped');
        break;
      }

      ele[j].style.background = 'red';
      await waitforme(delay);
      if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
        console.log('In if condition height comparision');
        if (min_index !== i) {
          ele[min_index].style.background = 'cyan';
        }
        min_index = j;
      } else {
        ele[j].style.background = 'cyan';
      }
    }
    await waitforme(delay);

    if (!stopSorting) {
      swap(ele[min_index], ele[i]);
      ele[min_index].style.background = 'cyan';
      ele[i].style.background = 'green';
    }
  }
  // Reset the stopSorting flag
  stopSorting = false;
}

const selectionSortbtn = document.querySelector(".selectionSort");
const stopBtn = document.querySelector(".stopSortingBtn");

selectionSortbtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await selection();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

stopBtn.addEventListener('click', function () {
  stopSortingProcess();
});
