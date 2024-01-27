// stopFlag.js
export let stopSorting = false;

export function stopSortingProcess() {
  stopSorting = true;
}

export function resetStopSorting() {
  stopSorting = false;
}
