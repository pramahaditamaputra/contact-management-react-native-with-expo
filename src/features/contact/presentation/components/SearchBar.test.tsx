import { vi } from "vitest";
import renderer from "react-test-renderer";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("matches snapshot when empty", () => {
    const tree = renderer
      .create(<SearchBar searchTerm="" setSearchTerm={vi.fn()} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("matches snapshot when filled", () => {
    const tree = renderer
      .create(<SearchBar searchTerm="john" setSearchTerm={vi.fn()} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
