import { generateInitials } from '../src';


describe('<Avatar>', () => {
  describe('generateInitials', () => {
    it('should return (JS) on Jon Snow', () => {
      const initial = generateInitials('Jon Snow');
      expect(initial).toBe('JS');
    });

    it('should return (JS) on Jon Captain Snow', () => {
      const initial = generateInitials('Jon Captain Snow');
      expect(initial).toBe('JS');
    });

    it('should return (JS) on Jon The Captain Snow', () => {
      const initial = generateInitials('Jon The Captain Snow');
      expect(initial).toBe('JS');
    });
  });
});
