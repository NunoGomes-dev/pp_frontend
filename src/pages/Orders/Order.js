import {
  Button,
  HStack,
  OrderForm,
  PageContainer,
  PageHeader,
} from "../../components";
import { FiSave } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import clearObj from "../../utils/clearObj";
import { RiAddBoxFill } from "react-icons/ri";
import usePostOrder from "../../hooks/mutations/usePostOrder";
import usePutOrder from "../../hooks/mutations/usePutOrder";
import useOrderId from "../../hooks/data/useOrderId";
import useParts from "../../hooks/data/useParts";
import useClients from "../../hooks/data/useClients";
import { useState } from "react";

const Part = () => {
  const { id } = useParams();
  const hasOrder = id && id !== "new" ? true : false;
  const form = useForm();

  const { handleSubmit, reset, watch, setError } = form;

  const { mutate: mutateCreation, isLoading: loadingMutateCreation } =
    usePostOrder();
  const { mutate: mutateEdition, isLoading: loadingMutateEdition } =
    usePutOrder(reset);

  const getOrder = useOrderId(id, reset);

  const searchClient = watch("searchClient");
  const getClients = useClients({
    currentPage: null,
    filters:
      searchClient?.length > 3
        ? [{ query: `name_substring=${searchClient}` }]
        : null,
    include: "none",
  });
  const [client, setClient] = useState(null);

  const searchPart = watch("searchPart");
  const getParts = useParts({
    currentPage: null,
    filters:
      searchPart?.length > 3
        ? [{ query: `name_substring=${searchPart}` }]
        : null,
    include: "none",
  });
  const [items, setItems] = useState([]);

  const submitOrder = (v) => {
    const errors = [];
    if (!items || items.length === 0)
      errors.push({
        input: "searchPart",
        type: "required",
        message: "Sem peças associadas!",
      });
    if (!client)
      errors.push({
        input: "searchClient",
        type: "required",
        message: "Sem cliente associado!",
      });

    if (errors.length > 0) {
      for (const { input, type, message } of errors) {
        setError(input, { type: type, message: message });
      }
      return;
    }

    hasOrder
      ? mutateEdition(clearObj(v))
      : mutateCreation(clearObj({ ...v, orderItems: [...items] }));
  };

  return (
    <PageContainer>
      <form onSubmit={handleSubmit(submitOrder)} className="w-full h-full">
        <PageHeader
          title={
            hasOrder
              ? getOrder?.data?.name || "Editar Encomenda"
              : "Nova Encomenda"
          }
        >
          <HStack className="gap-4">
            <Link to="/parts">
              <Button variant="light">Cancelar</Button>
            </Link>
            <Button
              variant="solid"
              icon={
                hasOrder ? (
                  <FiSave
                    style={{ transform: "scale(1.25)", strokeWidth: 2 }}
                  />
                ) : (
                  <RiAddBoxFill style={{ transform: "scale(1.25)" }} />
                )
              }
              iconPlacement="end"
              type="submit"
              isLoading={loadingMutateCreation || loadingMutateEdition}
            >
              {hasOrder ? "Guardar" : "Criar"}
            </Button>
          </HStack>
        </PageHeader>
        <OrderForm
          hasOrder={hasOrder}
          form={form}
          getOrder={getOrder || null}
          getClients={getClients}
          getParts={getParts}
          items={items}
          setItems={setItems}
          client={client}
          setClient={setClient}
        />
      </form>
    </PageContainer>
  );
};

export default Part;
