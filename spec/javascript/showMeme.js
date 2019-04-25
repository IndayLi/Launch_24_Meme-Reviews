import testHelper from "./testHelper";

import ShowContainer from "../../app/javascript/react/components/ShowContainer";

describe("ShowContainer", () => {
  let title,
    imageUrl,
    description,
    wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <ShowContainer
        title="first meme"
        imageUrl="www.examplememe.com"
        description="this is the first meme"
      />
    );
  });

  it("should render the ShowContainer component with its specific props", () => {
    expect(wrapper.find(ShowContainer).props()).toEqual({
      title: "first meme",
      imageUrl: "www.examplememe.com",
      description: "this is the first meme"
    });
  });
});
