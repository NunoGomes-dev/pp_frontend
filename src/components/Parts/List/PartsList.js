import { PageBody } from "../../UI";

const PartsList = ({ useParts }) => {
  const { data, isLoading } = useParts;

  return (
    <PageBody>
      {!isLoading && data?.parts?.map((p) => <div>{p.name}</div>)}
    </PageBody>
  );
};

export default PartsList;
