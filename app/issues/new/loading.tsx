import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";

const NewIssueLoadingSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20 rem" />
    </Box>
  );
};

export default NewIssueLoadingSkeleton;
