function sortList(list) {
  while (true) {
    let swapHappened = false;

    for (let i = 1; i < list.length; i++) {
      if (list[i] < list[i - 1]) {
        let temp = list[i];
        list[i] = list[i - 1];
        list[i - 1] = temp;
        swapHappened = true;
        console.log(list);
      }
    }

    if (!swapHappened) {
      return list;
    }
  }
}
