import formatDate from './formatDate';

describe('utils/dates/formatDate', () => {
  it('Should work', () => {
    expect(formatDate('2020-05-10T19:10:06.765Z')).toBe('10 May 2020');
  });
});
