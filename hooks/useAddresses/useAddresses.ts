import { getAddresses } from "@/gate/endpoints";
import { Address } from "@/gate/type";
import { useQuery } from "@tanstack/react-query";

export function useAddresses(isOpen: boolean) {
  const { data, error, isLoading, isError } = useQuery<Address[]>({
    queryKey: ["addresses"],
    queryFn: getAddresses,
    staleTime: 0,
    retry: 2,
    refetchOnMount: true,
    enabled: isOpen,
  });

  return { data, error, isLoading, isError };
}
