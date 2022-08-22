import { useEffect, useState } from "react";
import useModal from "../../../hooks/others/useModal";
import { Grid } from "../../Design";
import { PageBody } from "../../UI";
import ClientsModal from "./ClientsModal";
import OrderClientsManager from "./OrderClientsManager";
import OrderItemsManager from "./OrderItemsManager";
import OrderItemsModal from "./OrderItemsModal";

const OrderForm = ({
  hasOrder,
  form,
  getOrder,
  getClients,
  getParts,
  items,
  setItems,
  client,
  setClient,
}) => {
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = form;

  const orderType = watch("type");
  const { isLoading: isLoadingOrder, data: order } = getOrder;

  const { data: clientsData, isSuccess: clientsReady } = getClients;
  const [isOpenClientsModal, setIsOpenClientsModal] = useState(false);
  const { open: openClientsModal, close: closeClientsModal } = useModal(
    isOpenClientsModal,
    setIsOpenClientsModal
  );

  const { data: partsData, isSuccess: partsReady } = getParts;
  const [isOpenPartsModal, setIsOpenPartsModal] = useState(false);
  const { open: openPartsModal, close: closePartsModal } = useModal(
    isOpenPartsModal,
    setIsOpenPartsModal
  );

  useEffect(() => {
    if (items?.length > 0 && errors?.searchPart) clearErrors("searchPart");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    if (client && errors?.searchClient) clearErrors("searchClient");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  return (
    <>
      <OrderItemsModal
        isOpenPartsModal={isOpenPartsModal}
        closePartsModal={closePartsModal}
        register={register}
        errors={errors}
        partsReady={partsReady}
        partsData={partsData}
        setItems={setItems}
        items={items}
        setValue={setValue}
        watch={watch}
        orderType={orderType}
      />
      <ClientsModal
        isOpenClientsModal={isOpenClientsModal}
        closeClientsModal={closeClientsModal}
        register={register}
        errors={errors}
        clientsReady={clientsReady}
        clientsData={clientsData}
        client={client}
        setClient={setClient}
        setValue={setValue}
        watch={watch}
      />
      <PageBody className={"w-full h-full"}>
        <Grid className={"w-full gap-8 grid-cols-[2fr_1fr]"}>
          <OrderItemsManager
            hasOrder={hasOrder}
            isLoadingOrder={isLoadingOrder}
            order={order}
            register={register}
            errors={errors}
            openPartsModal={openPartsModal}
            items={items}
            setItems={setItems}
          />
          <OrderClientsManager
            hasOrder={hasOrder}
            isLoadingOrder={isLoadingOrder}
            openClientsModal={openClientsModal}
            client={client}
            errors={errors}
          />
        </Grid>
      </PageBody>
    </>
  );
};

export default OrderForm;
