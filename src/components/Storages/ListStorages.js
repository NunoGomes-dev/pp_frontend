import { Stack } from "../Design";
import { PageBody, Skeleton } from "../UI";
import StorageCard from "./StorageCard";

const ListStorages = ({ isLoading, isSuccess, data, deleteMutation }) => {
  return (
    <PageBody>
      {isLoading && (
        <Stack className="w-full flex-wrap gap-4">
          <Skeleton className={"w-[200px] h-[200px]"} />
          <Skeleton className={"w-[200px] h-[200px]"} />
          <Skeleton className={"w-[200px] h-[200px]"} />
          <Skeleton className={"w-[200px] h-[200px]"} />
          <Skeleton className={"w-[200px] h-[200px]"} />
        </Stack>
      )}
      {isSuccess && (
        <Stack className={`w-full flex-wrap gap-4`}>
          {data.storages.map((s, index) => (
            <StorageCard
              key={index}
              storage={s}
              handleRemove={deleteMutation}
            />
          ))}
        </Stack>
      )}
    </PageBody>
  );
};
export default ListStorages;
