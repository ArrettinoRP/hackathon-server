export const getUserPoints = (ranking: number) => {
  switch (ranking) {
    case 1:
      return 10;
    case 2:
      return 9;
    case 3:
      return 8;
    case 4:
      return 7;
    case 5:
      return 6;
    case 6:
      return 5;
    case 7:
      return 4;
    case 8:
      return 3;
    case 9:
      return 2;
    case 10:
      return 1;
  }
};
