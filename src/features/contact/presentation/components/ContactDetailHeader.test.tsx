import renderer from "react-test-renderer";
import { describe, expect, it, vi } from "vitest";
import ContactDetailHeader from "./ContactDetailHeader";

vi.mock("@expo/vector-icons", () => {
  return {
    Ionicons: () => null,
  };
});

describe("ContactDetailHeader", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <ContactDetailHeader
          name="John Doe"
          picture="https://example.com/avatar.jpg"
          phone="+62 812 3456 7890"
          handleCall={vi.fn()}
          handleSms={vi.fn()}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
