import { getGameResult } from './gameutil';

describe('helper functions tests', () => {
  it('GetGameResult function works correctly', () => {
    const result = getGameResult(1, 1);
    expect(result).toEqual('none');
  });
});
