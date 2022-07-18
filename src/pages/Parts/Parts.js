import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button, PageBody, PageContainer, PageHeader } from "../../components";
import useToast from "../../hooks/notifications/useToast";

const Parts = () => {
  const toast = useToast();

  return (
    <PageContainer>
      <PageHeader title="Peças" unstyled>
        <Link to="/parts/new" style={{ textDecoration: "none" }}>
          <Button
            variant="solid"
            icon={<IoIosAdd style={{ transform: "scale(1.5)" }} />}
            iconPlacement="end"
          >
            Nova gaveta
          </Button>
        </Link>
      </PageHeader>
      <PageBody>
        <Button
          onClick={() =>
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
            })
          }
        >
          Success
        </Button>
        <Button
          onClick={() =>
            toast({
              title: "An error occurred.",
              description: "Unable to create user account.",
              status: "error",
            })
          }
        >
          Error
        </Button>
      </PageBody>
    </PageContainer>
  );
};

export default Parts;
