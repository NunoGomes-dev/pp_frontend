import { Box } from "../../Design";
import Skeleton from "./Skeleton";

const LoadingGrid = ({ items = 1, gap = "1rem", ...others }) => {
  const loadItems = [];
  for (let i = 0; i < items; i++) {
    loadItems.push(<Skeleton key={i} />);
  }

  return (
    <Box width="full" gap={gap} {...others}>
      {loadItems}
    </Box>
  );
};

export default LoadingGrid;
