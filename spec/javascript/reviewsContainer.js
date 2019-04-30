import testHelper from "./testHelper";

import ReviewsContainer from "../../app/javascript/react/components/ReviewsContainer";

describe("ReviewsContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewsContainer
        memeId={3}
      />
    );
  });

  it('should render a div element with the class of \'reviews-container\'', () => {
    expect(wrapper.find('div').hasClass('reviews-container')).toEqual(true);
  });

});
