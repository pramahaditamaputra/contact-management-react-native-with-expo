import { LegendListRef } from "@legendapp/list";
import { router } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useContactsQuery } from "../queries/useContactsQuery";
import { setContactSearchTerm } from "../state/searchContact.slices";
import { ContactUi } from "./mappers/contact.mapper";

const useContactViewModel = () => {
  const listRef = useRef<LegendListRef | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(
    (state) => state.searchContact.contactSearchTerm,
  );

  const contactsQuery = useContactsQuery({
    pageIndex: 0,
    pageSize,
  });

  const loadMore = useCallback(() => {
    setPageSize((currentPageSize) => currentPageSize + 10);
  }, [contactsQuery.isFetching]);

  const gotoContactDetailScreen = (data: ContactUi) => {
    router.push({
      pathname: "/detail-contact",
      params: { data: JSON.stringify(data) },
    });
  };

  const updateSearchTerm = useCallback(
    (term: string) => {
      dispatch(setContactSearchTerm(term));
    },
    [dispatch],
  );

  return {
    contacts: {
      items:
        searchTerm && contactsQuery.data
          ? contactsQuery.data.filter((c) => {
              const q = searchTerm.toLowerCase();
              return (
                c.name.toLowerCase().includes(q) ||
                c.email?.toLowerCase().includes(q)
              );
            })
          : (contactsQuery.data ?? []),
      loading: contactsQuery.isLoading,
      refreshing: contactsQuery.isRefetching,
      loadingMore: contactsQuery.isFetching && !contactsQuery.isLoading,
      error: contactsQuery.error,
      refetch: contactsQuery.refetch,
    },
    listRef,
    loadMore,
    setSearchTerm: updateSearchTerm,
    searchTerm,
    navigate: {
      gotoContactDetailScreen,
    },
  };
};

export default useContactViewModel;
