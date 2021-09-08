import {MathExample} from './math';

describe('MathExample', () => {
    describe('add', () => {
        beforeEach(() => {
            jest.resetAllMocks();
            jest.resetModules();
        });
        it('happy case', () => {
            expect(MathExample.add(1, 1)).toBe(2);
        });

        it('happy case mock', () => {
            const mock = jest.spyOn(MathExample, 'add');
            let res = MathExample.add(1, 1);
            res = MathExample.add(1, 1);

            expect(mock).toBeCalledTimes(2);
            expect(mock).toBeCalledWith(1, 1);
            expect(res).toBe(2);
        });
    });
});

