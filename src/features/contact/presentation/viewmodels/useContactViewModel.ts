import { LegendListRef } from "@legendapp/list";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { useContactsQuery } from "../queries/useContactsQuery";
import { ContactUi } from "./mappers/contact.mapper";

const useContactViewModel = () => {
  const listRef = useRef<LegendListRef | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const contactsQuery = useContactsQuery({
    pageIndex: 0,
    pageSize,
  });

  const loadMore = () => {
    if (contactsQuery.isFetching) {
      return;
    }

    setPageSize((currentPageSize) => currentPageSize + 10);
  };

  const gotoContactDetailScreen = (data: ContactUi) => {
    router.push({
      pathname: "/detail-contact",
      params: { data: JSON.stringify(data) },
    });
  };

  return {
    contacts: {
      items: contactsQuery.data ?? [],
      loading: contactsQuery.isLoading,
      loadingMore: contactsQuery.isFetching && !contactsQuery.isLoading,
      error: contactsQuery.error,
      refetch: contactsQuery.refetch,
    },
    listRef,
    loadMore,
    navigate: {
      gotoContactDetailScreen,
    },
  };
};

export default useContactViewModel;
