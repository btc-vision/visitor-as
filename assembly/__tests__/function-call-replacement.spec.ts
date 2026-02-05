import { hardCodedSAu8, usingIncludeBytes } from '../includeBytesTest'


describe('function call replacement', () => {
    it("a call to foo() should return 'hello world' string", () => {
        expect(foo()).toBe("hello world");
    })

    it("includeBytes should include data.dat", () => {
        expect(usingIncludeBytes().toString()).toBe(hardCodedSAu8().toString());
    })


})
