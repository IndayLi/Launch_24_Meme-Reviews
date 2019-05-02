import testHelper from "./testHelper";
import ReviewTile from "../../app/javascript/react/components/ReviewTile";

describe("ReviewTile", () => {
  let id, meme_id, timestamp, username, rating, comment, wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        id={1}
        meme_id={3}
        user_id={3}
        timestamp={"April 29, 2019, 5:55 pm"}
        username={"Doglover22"}
        rating={4}
        comment={"This is the first review comment"}
      />
    );
  });

  it("should render the 'ReviewTile' component", () => {
    expect(wrapper.find(ReviewTile)).toBePresent();
  });

  it("should render the ReviewTile component with its specific props", () => {
    expect(wrapper.find(ReviewTile).props()).toEqual({
      id: 1,
      meme_id: 3,
      user_id: 3,
      timestamp: "April 29, 2019, 5:55 pm",
      username: "Doglover22",
      rating: 4,
      comment: "This is the first review comment"
    });
  });

  it("should render a dd tag", () => {
    expect(wrapper.find("dd")).toBePresent();
  });

  it("should render four dl tags", () => {
    expect(wrapper.find("dl").length).toEqual(4);
  });
});
