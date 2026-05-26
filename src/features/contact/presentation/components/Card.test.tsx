import renderer from "react-test-renderer";
import { describe, expect, it } from "vitest";
import Card from "./Card";

describe("Card", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(<Card title="Phone" description="+62 812 3456 7890" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
