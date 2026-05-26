import renderer from "react-test-renderer";
import { describe, expect, it } from "vitest";
import { ContactSkeletonList, FooterSkeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("matches contact list snapshot", () => {
    const tree = renderer.create(<ContactSkeletonList />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("matches footer snapshot", () => {
    const tree = renderer.create(<FooterSkeleton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
