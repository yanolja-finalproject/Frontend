"use client";

import { SortItem } from "@/app/types";
import useHashtagSearchQuery from "@/hooks/query/useHashtagSearchQuery";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useHashtagResult = () => {
  const params = useSearchParams();
  const sort = (params.get("sortBy") as SortItem) || "departure_date";
  const maxPrice = params.get("maxPrice") || "200";

  const hashtags = params.get("hashtags");
  const nations = params.get("nations");
  const continents = params.get("continents");

  let optionsStr = `?maxPrice=${maxPrice}`;
  if (hashtags) optionsStr += `&hashtags=${hashtags}`;
  if (nations) optionsStr += `&nations=${nations}`;
  if (continents) optionsStr += `&continents=${continents}`;

  const {
    data: hashtagData,
    isLoading: hashtagIsLoading,
    refetch,
  } = useHashtagSearchQuery(optionsStr, sort);

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  return { hashtagData, hashtagIsLoading };
};

export default useHashtagResult;
