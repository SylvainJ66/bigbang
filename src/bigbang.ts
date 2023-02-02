class BigBang {
  parse(number: number) {
    const specialNumbers = new Map<number, string>();
    specialNumbers.set(5, 'big');
    specialNumbers.set(7, 'bang');
    specialNumbers.set(11, 'boom');
    let result: string[] = [];

    for (const key of Array.from(specialNumbers.keys())) {
      if (this.multipleOf(number, key)) result.push(this.getRelatedString(key));
    }

    if (this.isReversible(number)) result = result.reverse();

    return result.length === 0 ? number.toString() : result.join('');
  }

  private getRelatedString(number: number) {
    if (number === 5) return 'big';
    if (number === 7) return 'bang';
    if (number === 11) return 'boom';
    return '';
  }

  private multipleOf(number: number, multiple: number) {
    return number % multiple === 0;
  }

  private isReversible(number: number): boolean {
    return (
      (this.multipleOf(number, 5) ||
        this.multipleOf(number, 7) ||
        this.multipleOf(number, 11)) &&
      this.multipleOf(number, 2)
    );
  }
}

export default new BigBang();
