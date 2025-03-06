import { useEffect, useState } from "react";
import { useAddresses } from "@/hooks";
import { Address } from "@/gate/type";

const LOCAL_STORAGE_KEY = "addresses";

export function useLocalStorageAddresses(isOpen: boolean) {
  const { data: fetchedAddresses, isLoading, error } = useAddresses(isOpen);
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setAddresses(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (fetchedAddresses) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fetchedAddresses));
      setAddresses(fetchedAddresses);
    }
  }, [fetchedAddresses]);

  const removeAddress = (id: string) => {
    const updated = addresses.filter(addr => addr.id !== id);
    setAddresses(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  return { addresses, isLoading, error, removeAddress };
}
