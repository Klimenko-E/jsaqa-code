const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit_2", () => {
  it("Books names should not be sorted in ascending order", () => {
    expect(sorting.sortByName(["Властелин Колец", "Властелин Колец"])).toEqual([
      "Властелин Колец",
      "Властелин Колец",
    ]);
  });
});
