import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type ViewLoaderParams = {
  isLoading: boolean;
  loadingMessage?: string;
};

const ViewLoader: React.FC<ViewLoaderParams> = ({
  isLoading,
  loadingMessage,
  children,
}) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CircularProgress />
        <span>{loadingMessage}</span>
      </Box>
    );
  }

  return <>{children}</>;
};

export default ViewLoader;
