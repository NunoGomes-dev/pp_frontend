import { Box } from "../Design";
import { LoadingGrid, PageBody } from "../UI";
import StorageCard from "./StorageCard";

const ListStorages = ({ isLoading, isSuccess, data, deleteMutation }) => {
  return (
    <PageBody>
      {isLoading && <LoadingGrid display="flex" flexWrap="wrap" items={5} />}
      {isSuccess && (
        <Box width="full" display="flex" flexWrap="wrap" gap={"1rem"}>
          {data.storages.map((s, index) => (
            <StorageCard
              key={index}
              storage={s}
              handleRemove={deleteMutation}
            />
          ))}
        </Box>
      )}
    </PageBody>
  );
};
export default ListStorages;
