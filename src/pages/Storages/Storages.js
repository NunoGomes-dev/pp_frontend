import { Link } from "react-router-dom";
import { Box, Button, PageHeader, StorageCard, VStack } from "../../components";
import useDeleteStorage from "../../hooks/Storages/useDeleteStorage";
import useStorages from "../../hooks/Storages/useStorages";
import { IoIosAdd } from "react-icons/io";

const Storages = () => {
  const { isLoading, data, isSuccess } = useStorages();
  const deleteMutation = useDeleteStorage();
  return (
    <VStack width="full" height="full" gap="0">
      <PageHeader name="Gavetas" unstyled>
        <Link to={"/providers"}>
          <Button
            variant="solid"
            icon={<IoIosAdd style={{ transform: "scale(1.5)" }} />}
            iconPlacement="end"
          >
            Nova gaveta
          </Button>
        </Link>
      </PageHeader>
      <Box padding="1rem 0 1rem 1.5rem" width="calc(100% - 1.5rem)">
        {isLoading && <div>Is Loading...</div>}
        {isSuccess && (
          <Box width="full" display="flex" flexWrap="wrap" gap={"1rem"}>
            {data.storages.map((s) => (
              <StorageCard
                key={s.id}
                storage={s}
                handleRemove={deleteMutation}
              />
            ))}
          </Box>
        )}
      </Box>
    </VStack>
  );
};

export default Storages;
