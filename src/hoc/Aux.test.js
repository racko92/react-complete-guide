const Aux = require("./Aux")
// @ponicode
describe("Aux.default", () => {
    test("0", () => {
        let callFunction = () => {
            Aux.default({ children: [true, true, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Aux.default({ children: [false, true, false] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Aux.default({ children: [false, false, false] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Aux.default({ children: [true, false, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Aux.default({ children: [false, false, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Aux.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
