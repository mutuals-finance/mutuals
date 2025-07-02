import { Box } from "@mutuals/ui";
import NextImage from "next/image";
import gridImage from "@/assets/grid.svg";

export default function GridBg() {
  return (
    <Box
      position={"absolute"}
      inset={0}
      opacity={1}
      pointerEvents={"none"}
      _dark={{ opacity: 0.33 }}
      overflow={"hidden"}
    >
      <NextImage
        src={gridImage}
        alt={"Page header grid background"}
        style={{
          objectFit: "contain",
          objectPosition: "top center",
          minWidth: "1200px",
        }}
        fill={true}
      />
    </Box>
  );
}
