import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button, PageContainer, PageHeader, PartsList } from "../../components";

const Parts = () => {
  return (
    <PageContainer>
      <PageHeader title="Peças" unstyled>
        <Link to="/parts/new" style={{ textDecoration: "none" }}>
          <Button
            variant="solid"
            icon={<IoIosAdd style={{ transform: "scale(1.5)" }} />}
            iconPlacement="end"
          >
            Nova peça
          </Button>
        </Link>
      </PageHeader>
      <PartsList />
    </PageContainer>
  );
};

export default Parts;
