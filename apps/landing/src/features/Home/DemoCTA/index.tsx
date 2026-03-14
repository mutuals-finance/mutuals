import {
  Box,
  Text,
  Button,
  Container,
  Link,
  Heading,
  Card,
  Icon,
  Stack,
} from "@mutuals/ui";
import MotionBoxWrapper from "@/components/MotionBoxWrapper";
import demoImage from "@/assets/demo.png";
import NextImage from "next/image";
import IconBox from "@/components/IconBox";
import { PiCodesandboxLogo } from "react-icons/pi";

export default function HomeDemoCTA() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box my={"6"}>
        <Container maxW="6xl" px={{ base: "0", sm: "6", lg: "12" }}>
          <Card.Root
            border={{ smDown: "none" }}
            position={"relative"}
            overflow={"hidden"}
            rounded={{ base: "0", sm: "l3" }}
          >
            <Box position={"absolute"} inset={"0"} scale={{ smDown: "2" }}>
              <NextImage
                src={demoImage}
                alt={"Mutuals Demo CTA Background"}
                fill={true}
                style={{ objectFit: "cover" }}
              />

              <Box
                position={"absolute"}
                inset={"0"}
                bg={{ _light: "bg/50", _dark: "bg/90" }}
              />
            </Box>

            <Stack
              direction={"column"}
              gap={"0"}
              position={"relative"}
              textAlign={"center"}
              alignItems={"center"}
            >
              <Card.Header>
                <IconBox bg={"colorPalette.subtle"} color={"colorPalette.fg"}>
                  <Icon>
                    <PiCodesandboxLogo />
                  </Icon>
                </IconBox>
              </Card.Header>
              <Card.Body>
                <Heading size={"2xl"}>See Mutuals in Action</Heading>

                <Text color={"fg.muted"} mt={"2"}>
                  Explore the Payment Pool Demonstration and see how funds can
                  be managed and distributed
                </Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  href={"https://app.mutuals.finance/pool/demo"}
                  external={true}
                  arrow={false}
                  asChild={true}
                >
                  <Button
                    size={"xl"}
                    variant={"gradient"}
                    colorPalette={"brand"}
                  >
                    Visit Demo Pool
                  </Button>
                </Link>
              </Card.Footer>
            </Stack>
          </Card.Root>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
