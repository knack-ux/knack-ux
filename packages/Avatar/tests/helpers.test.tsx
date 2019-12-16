import { getInitials, getInitialFontSize } from '../src/helpers';

describe('<Avatar /> helpers', () => {
  describe('helpers/getInitials', () => {
    it('should return (JS) on Jon Snow', () => {
      const initial = getInitials('Jon Snow');
      expect(initial).toBe('JS');
    });

    it('should return (JS) on Jon Captain Snow', () => {
      const initial = getInitials('Jon Captain Snow');
      expect(initial).toBe('JS');
    });

    it('should return (JS) on Jon The Captain Snow', () => {
      const initial = getInitials('Jon The Captain Snow');
      expect(initial).toBe('JS');
    });

    it('should return (J) on Jon', () => {
      const initial = getInitials('Jon');
      expect(initial).toBe('J');
    });
  });

  describe('helpers/getInitialFontSize', () => {
    it('should return font-size 16 when size 40', () => {
      const expected = getInitialFontSize(40, 24);
      expect(expected).toBe(16);
    });

    it('should return font-size 11 when size 24', () => {
      const expected = getInitialFontSize(24, 24);
      expect(expected).toBe(11);
    });
  });
});
