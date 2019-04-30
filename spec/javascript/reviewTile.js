import testHelper from "./testHelper";
import ReviewTile from "../../app/javascript/react/components/ReviewTile";

describe("ReviewTile", () => {
  let wrapper,
      timestamp,
      username,
      rating,
      comment;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        key={5}
        id={5}
        memeId={1}
        timestamp={'April 29, 2019, 5:55 pm'}
        username={'Doglover22'}
        rating={4}
        comment={'Wow this is so cool!'}
      />
    );
  });

  it('should render at least one div tag with the className of \'review-tile\', if there are reviews posted', () => {
    //expect(wrapper.find('div').hasClass('reviews-tile')).toEqual(true);
    expect(wrapper.find('.review-tile').text()).toContain(
      'Username: Doglover22'
    )
  });
})
