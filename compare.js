function dateComparator(date, other) {
  if (date.getTime() === other.getTime()) {
    return 0;
  }
  if (other < date) {
    return -1;
  }
  if (other > date) {
    return 1;
  }
}
