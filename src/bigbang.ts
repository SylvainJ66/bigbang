class BigBang {
  Parse(number: number) {
    if(number === 5)
      return 'big';
    return number.toString();
  }
}

export default new BigBang();
