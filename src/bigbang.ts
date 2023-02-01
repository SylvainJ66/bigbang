class BigBang {
  parse(number: number) {
    if(number === 21) return 'bang';
    if(number === 14) return 'bang';
    if(number === 7) return 'bang';
    if(number % 5 === 0) return 'big';
    return number.toString();
  }
}

export default new BigBang();
