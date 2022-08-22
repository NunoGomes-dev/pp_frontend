import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  Button,
  ListOrders,
  PageContainer,
  PageHeader,
} from "../../components";

const Parts = () => {
  return (
    <PageContainer>
      <PageHeader title="Encomendas" unstyled>
        <Link to="/orders/new" style={{ textDecoration: "none" }}>
          <Button
            variant="solid"
            icon={<IoIosAdd style={{ transform: "scale(1.5)" }} />}
            iconPlacement="end"
          >
            Nova encomenda
          </Button>
        </Link>
      </PageHeader>
      <ListOrders />
    </PageContainer>
  );
};

export default Parts;
