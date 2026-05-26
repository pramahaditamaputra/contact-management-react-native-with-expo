import renderer from "react-test-renderer";
import { describe, expect, it } from "vitest";
import ContactDetailContent from "./ContactDetailContent";

describe("ContactDetailContent", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <ContactDetailContent
          phone="+62 812 3456 7890"
          email="john@example.com"
          dob="01 Jan 1990"
          location="Jakarta, Indonesia"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
