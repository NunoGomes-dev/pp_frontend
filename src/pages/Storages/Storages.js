import {
  Button,
  CreateStorageForm,
  ListStorages,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  PageContainer,
  PageHeader,
} from "../../components";
import useDeleteStorage from "../../hooks/mutations/useDeleteStorage";
import useStorages from "../../hooks/data/useStorages";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import usePostStorage from "../../hooks/mutations/usePostStorage";

const Storages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data, isSuccess } = useStorages();
  const deleteMutation = useDeleteStorage();
  const postMutation = usePostStorage(setIsOpen);

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            titleSize="lg"
            title="Adicionar gaveta"
            onClose={() => setIsOpen(false)}
          />
          <ModalBody className="w-full">
            <CreateStorageForm
              setIsOpen={setIsOpen}
              postMutation={postMutation}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <PageContainer>
        <PageHeader title="Gavetas" unstyled>
          <Button
            variant="solid"
            icon={<IoIosAdd style={{ transform: "scale(1.5)" }} />}
            iconPlacement="end"
            onClick={() => setIsOpen(true)}
          >
            Nova gaveta
          </Button>
        </PageHeader>
        <ListStorages
          isLoading={isLoading}
          isSuccess={isSuccess}
          data={data}
          deleteMutation={deleteMutation}
        />
      </PageContainer>
    </>
  );
};

export default Storages;
