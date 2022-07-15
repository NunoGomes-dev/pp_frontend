import { Box } from "../Design";
import { PageBody } from "../UI";
import StorageCard from "./StorageCard";

const ListStorages = ({ isLoading, isSuccess, data, deleteMutation }) => {
  return (
    <PageBody>
      {isLoading && <div>Is Loading...</div>}
      {isSuccess && (
        <Box width="full" display="flex" flexWrap="wrap" gap={"1rem"}>
          {data.storages.map((s) => (
            <StorageCard key={s.id} storage={s} handleRemove={deleteMutation} />
          ))}
        </Box>
      )}
    </PageBody>
  );
};
export default ListStorages;
