import { PageBody } from "../../UI";

const ListProviders = ({ useProviders }) => {
  const { isLoading, data } = useProviders;
  console.log(data);
  return (
    <PageBody>
      {!isLoading &&
        data?.providers?.map((p) => <div key={p.id}>{p.name}</div>)}
    </PageBody>
  );
};

export default ListProviders;
