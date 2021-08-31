const count = 1;

function cc(card) {
  // Only change code below this line
  // получая карту я уменьшаю или увеличиваю count
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }

  // if если + значит Bet, есди 0 или -1 значит Hold
  if (count > 0) {
    return count + 'Bet';
  } else if (count <= 0) {
    return count + 'Hold';
  }
  return card;
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
