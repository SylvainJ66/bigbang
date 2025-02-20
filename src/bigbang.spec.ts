import bigbang from './bigbang';

describe('BigBang', () => {
  test('should parse 1 to "1"', () => {
    expect(bigbang.parse(1)).toBe('1');
  });
  test('should parse 2 to "2"', () => {
    expect(bigbang.parse(2)).toBe('2');
  });
  test('should parse 3 to "3"', () => {
    expect(bigbang.parse(3)).toBe('3');
  });
  test('should parse 5 to "big"', () => {
    expect(bigbang.parse(5)).toBe('big');
  });
  test('should parse 10 to "big"', () => {
    expect(bigbang.parse(10)).toBe('big');
  });
  test('should parse 15 to "big"', () => {
    expect(bigbang.parse(15)).toBe('big');
  });
  test('should parse 7 to "bang"', () => {
    expect(bigbang.parse(7)).toBe('bang');
  });
  test('should parse 14 to "bang"', () => {
    expect(bigbang.parse(14)).toBe('bang');
  });
  test('should parse 11 to "boom"', () => {
    expect(bigbang.parse(11)).toBe('boom');
  });
  test('should parse 22 to "boom"', () => {
    expect(bigbang.parse(22)).toBe('boom');
  });
  test('should parse 5*7 to "bigbang"', () => {
    expect(bigbang.parse(35)).toBe('bigbang');
  });
  test('should parse 5*7*3 to "bigbang"', () => {
    expect(bigbang.parse(105)).toBe('bigbang');
  });
  test('should parse 5*7*2 to "bangbig"', () => {
    expect(bigbang.parse(70)).toBe('bangbig');
  });
  test('should parse 5*7*4 to "bangbig"', () => {
    expect(bigbang.parse(140)).toBe('bangbig');
  });
  test('should parse 5*11 to "bigboom"', () => {
    expect(bigbang.parse(55)).toBe('bigboom');
  });
  test('should parse 5*11*3 to "bigboom"', () => {
    expect(bigbang.parse(165)).toBe('bigboom');
  });
  test('should parse 7*11 to "bangboom"', () => {
    expect(bigbang.parse(77)).toBe('bangboom');
  });
  test('should parse 7*11*3 to "bangboom"', () => {
    expect(bigbang.parse(231)).toBe('bangboom');
  });
  test('should parse 5*11*2 to "boombig"', () => {
    expect(bigbang.parse(110)).toBe('boombig');
  });
  test('should parse 7*5*11 to "bigbangboom"', () => {
    expect(bigbang.parse(385)).toBe('bigbangboom');
  });
  test('should parse 7*5*11*2 to "boombangbig"', () => {
    expect(bigbang.parse(770)).toBe('boombangbig');
  });
});
