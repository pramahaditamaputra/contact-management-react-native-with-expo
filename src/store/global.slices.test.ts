import reducer, {
  resetContactSearchTerm,
  setContactSearchTerm,
} from "../features/contact/presentation/state/searchContactSlice";

describe("searchContactSlice", () => {
  it("should set and reset the contact search term", () => {
    const stateAfterSearch = reducer(undefined, setContactSearchTerm("alice"));
    expect(stateAfterSearch.contactSearchTerm).toBe("alice");

    const stateAfterSearchReset = reducer(
      stateAfterSearch,
      resetContactSearchTerm(),
    );
    expect(stateAfterSearchReset.contactSearchTerm).toBe("");
  });
});
