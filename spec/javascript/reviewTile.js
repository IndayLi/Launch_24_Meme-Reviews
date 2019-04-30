import testHelper from "./testHelper";

import ReviewTile from "../../app/javascript/react/components/ReviewTile";

describe("ReviewTile", () => {
  let id,
      rating,
      comment,
      wrapper;

  beforeEach (() => {
    jasmineEnzyme();
    wrapper = mount(
      <ReviewTile
        id={1}
        rating={4}
        comment={"This is the first review comment"}
      />
    );
  });

  it("should render a dd tag", () => {
    expect(wrapper.find("dd")).toBePresent();
  });

  it("should render the ReviewTile component with its specific props", () => {
    expect(wrapper.find(ReviewTile).props()).toEqual({
      id: 1,
      rating: 4,
      comment: "This is the first review comment"
    });
  });
});
