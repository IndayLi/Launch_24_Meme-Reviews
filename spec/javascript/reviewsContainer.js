import testHelper from "./testHelper";

import ReviewsContainer from "../../app/javascript/react/components/ReviewsContainer";

describe("ReviewsContainer", () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();

    wrapper = mount(
      <ReviewsContainer
      />
    );
  });

  it('should render a div element with the class of \'reviews-container\'', () => {
    expect(wrapper.find('div').hasClass('reviews-container')).toEqual(true);
  });

  it('should render the three DL tags for \'user\', \'rating\' and \'comment\'', () => {
    expect(wrapper.find('dl').length).toEqual(3);
  });

});
