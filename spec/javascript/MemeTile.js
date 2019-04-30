import testHelper from "./testHelper";
import MemeTile from "../../app/javascript/react/components/MemeTile";

describe("MemeTile", () => {
  let title,
    url,
    wrapper;

  beforeEach (() => {
    jasmineEnzyme();
    wrapper = mount(
      <MemeTile
        title="first meme"
        url="www.examplememe.com"
      />
    );
  });

  it("should render a dd tag", () => {
    expect(wrapper.find("dd")).toBePresent();
  });

  it("should render the MemeTile component with its specific props", () => {
    expect(wrapper.find(MemeTile).props()).toEqual({
      title: "first meme",
      url: "www.examplememe.com"
    });
  });
});
