import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useContactsQuery } from "../queries/useContactsQuery";

const useContactViewModel = () => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector((state) => state.contactPagination);

  const contactsQuery = useContactsQuery({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
  });

  return {
    contacts: {
      items: contactsQuery.data ?? [],
      loading: contactsQuery.isLoading || contactsQuery.isFetching,
      error: contactsQuery.error,
      refetch: contactsQuery.refetch,
    },
  };
};

export default useContactViewModel;
