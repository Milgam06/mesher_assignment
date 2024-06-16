import { useTokenStore } from "@/stores";

export interface SearchTokenProps {
  searchValue: string;
}

export const useSearchToken = () => {
  const { tokenList } = useTokenStore();
  const searchingToken = ({ searchValue }: SearchTokenProps) => {
    const searchResult = tokenList?.filter(
      (token) =>
        token.name.includes(searchValue) || token.symbol.includes(searchValue)
    );
    return searchResult?.slice(0, 30);
  };
  return { searchingToken };
};
