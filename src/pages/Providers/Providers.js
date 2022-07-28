import {
  Button,
  ListProviders,
  PageContainer,
  PageHeader,
} from "../../components";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Providers = () => {
  return (
    <PageContainer>
      <PageHeader title="Fornecedores" unstyled>
        <Link to="/providers/new">
          <Button
            variant="solid"
            icon={<IoIosAdd style={{ transform: "scale(1.5)" }} />}
            iconPlacement="end"
          >
            Novo fornecedor
          </Button>
        </Link>
      </PageHeader>
      <ListProviders />
    </PageContainer>
  );
};

export default Providers;
