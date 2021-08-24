import bicValidator from '../src/index';

describe('bic.isValid', () => {
    test('Undefined should not be valid as BIC', () => {
        // @ts-expect-error
        expect(bicValidator.isValid()).toBe(false);
    });

    test('An empty string should not be valid as BIC', () => {
        expect(bicValidator.isValid('')).toBe(false);
    });

    test('A number should not be valid as BIC', () => {
        // @ts-expect-error
        expect(bicValidator.isValid(12345678)).toBe(false);
    });

    test('A BIC with less than 8 characters should not be valid', () => {
        expect(bicValidator.isValid('ABCDE')).toBe(false);
        expect(bicValidator.isValid('ABCDEFG')).toBe(false);
        expect(bicValidator.isValid('ABCD123')).toBe(false);
    });

    test('A BIC with length between 8 and 11 should not be valid', () => {
        expect(bicValidator.isValid('ABCDEFGHI')).toBe(false);
        expect(bicValidator.isValid('ABCDEFGHIJ')).toBe(false);
    });

    test('A BIC with more than 11 characters should not be valid', () => {
        expect(bicValidator.isValid('ABCDEFGHIJKL')).toBe(false);
    });

    test('A BIC with numbers on the 6 first characters should not be valid', () => {
        expect(bicValidator.isValid('1ABCDEFG')).toBe(false);
        expect(bicValidator.isValid('A1BCDEFG')).toBe(false);
        expect(bicValidator.isValid('AB1CDEFG')).toBe(false);
        expect(bicValidator.isValid('ABC1DEFG')).toBe(false);
        expect(bicValidator.isValid('ABCD1EFG')).toBe(false);
        expect(bicValidator.isValid('ABCDE1FG')).toBe(false);
    });

    test('A BIC with special characters should not be valid', () => {
        expect(bicValidator.isValid('ABCDEFG*')).toBe(false);
        expect(bicValidator.isValid('_BCDEFG')).toBe(false);
        expect(bicValidator.isValid('ABC-EFG')).toBe(false);
    });

    test('A BIC with 8 characters (last 2 can be numbers) should be valid', () => {
        expect(bicValidator.isValid('ABCDEFGH')).toBe(true);
        expect(bicValidator.isValid('ABCDEFG1')).toBe(true);
        expect(bicValidator.isValid('ABCDEF12')).toBe(true);
    });

    test('A BIC with 11 characters (last 5 can be numbers) should be valid', () => {
        expect(bicValidator.isValid('ABCDEFGHIJK')).toBe(true);
        expect(bicValidator.isValid('ABCDEFGHIJ1')).toBe(true);
        expect(bicValidator.isValid('ABCDEFGHI12')).toBe(true);
        expect(bicValidator.isValid('ABCDEFGH123')).toBe(true);
        expect(bicValidator.isValid('ABCDEFG1234')).toBe(true);
        expect(bicValidator.isValid('ABCDEF12345')).toBe(true);
    });

    test('BIC of popular known banks should be valid', () => {
        expect(bicValidator.isValid('CHASUS33')).toBe(true);
        expect(bicValidator.isValid('BOFAUS3N')).toBe(true);
        expect(bicValidator.isValid('WFBIUS6S')).toBe(true);
        expect(bicValidator.isValid('CITIUS33')).toBe(true);
        expect(bicValidator.isValid('GOLDUS33')).toBe(true);
    });
});
