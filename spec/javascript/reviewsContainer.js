import testHelper from "./testHelper";
import fetchMock from "fetch-mock";
import ReviewsContainer from "../../app/javascript/react/components/ReviewsContainer";

describe("ReviewsContainer", () => {
  let wrapper;
  let reviews = [
    {
      id: 1,
      user_id: 1,
      meme_id: 1,
      timestamp: "April 29, 2019, 5:55 pm",
      rating: 4,
      comment: "Test comment one"
    },
    {
      id: 2,
      user_id: 1,
      meme_id: 1,
      timestamp: "April 29, 2019, 5:55 pm",
      rating: 5,
      comment: "Test comment two"
    }
  ];

  beforeEach(() => {
    jasmineEnzyme();
    fetchMock.get(`/api/v1/memes/1/reviews`, {
      status: 200,
      body: { reviews }
    });
    wrapper = mount(<ReviewsContainer memeId={1} />);
  });

  afterEach(fetchMock.restore);

  it("renders the review container on the page", done => {
    setTimeout(() => {
      expect(wrapper.find(ReviewsContainer)).toBePresent();
      done();
    }, 0);
  });

  it("Adds a review to state after fetch", done => {
    setTimeout(() => {
      expect(wrapper.state().reviews).toEqual({ reviews });
      done();
    }, 0);
  });
});
