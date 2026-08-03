const { add, subtract } = require("../calculator");

test("Addition Test", () => {
    expect(add(10, 5)).toBe(15);
});

test("Subtraction Test", () => {
    expect(subtract(10, 5)).toBe(5);
});