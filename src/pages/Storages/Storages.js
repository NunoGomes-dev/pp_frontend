import { Link } from "react-router-dom";
import { Box, Button, PageHeader, StorageCard, VStack } from "../../components";
import useDeleteStorage from "../../hooks/Storages/useDeleteStorage";
import useStorages from "../../hooks/Storages/useStorages";

const Storages = () => {
  const { isLoading, data, isSuccess } = useStorages();
  const { mutate } = useDeleteStorage();
  return (
    <VStack width="full" height="full">
      <PageHeader name="Gavetas" unstyled>
        <Link to={"/providers"}>
          <Button variant="solid">Nova gaveta</Button>
        </Link>
      </PageHeader>
      {isLoading && <div>Is Loading...</div>}
      {isSuccess && (
        <Box
          padding="0 1.5rem"
          width="full"
          display="flex"
          flexWrap="wrap"
          gap={"1rem"}
        >
          {data.storages.map((s, index) => (
            <StorageCard key={index} storage={s} handleRemove={mutate} />
          ))}
        </Box>
      )}
    </VStack>
  );
};

export default Storages;
