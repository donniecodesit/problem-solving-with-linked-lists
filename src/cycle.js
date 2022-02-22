const cycle = (list) => {
  if (!list.head) return false;
  let pointer1 = list.head;
  let pointer2 = list.head;

  // Compare every 2nd item to every item to find circular behavior
  while (pointer1.next && pointer2.next.next) {
    pointer1 = pointer1.next.next; //1, 3, 5, 7
    pointer2 = pointer2.next; //1, 2, 3, 4
    if (pointer1 == pointer2) return true;
  }
  
  return false;
};

module.exports = cycle;
