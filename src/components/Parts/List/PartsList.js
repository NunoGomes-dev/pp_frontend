import { PageBody } from "../../UI";

const PartsList = ({ useParts }) => {
  const { data, isLoading } = useParts;

  return (
    <PageBody>
      {!isLoading && data?.parts?.map((p) => <div key={p.id}>{p.name}</div>)}
    </PageBody>
  );
};

export default PartsList;
