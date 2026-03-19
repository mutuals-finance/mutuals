import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@mutuals/ui";
import NextImage from "next/image";
import { PiCodesandboxLogo } from "react-icons/pi";
import demoImage from "@/assets/demo.png";
import IconBox from "@/components/icon-box";
import MotionBoxWrapper from "@/components/motion-box-wrapper";

export default function HomeDemoCTA() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box my={"6"}>
        <Container maxW="6xl" px={{ base: "0", sm: "6", lg: "12" }}>
          <Card.Root
            border={{ smDown: "none" }}
            overflow={"hidden"}
            position={"relative"}
            rounded={{ base: "0", sm: "l3" }}
          >
            <Box inset={"0"} position={"absolute"} scale={{ smDown: "2" }}>
              <NextImage
                alt={"Mutuals Demo CTA Background"}
                fill={true}
                src={demoImage}
                style={{ objectFit: "cover" }}
              />

              <Box
                bg={{ _light: "bg/50", _dark: "bg/90" }}
                inset={"0"}
                position={"absolute"}
              />
            </Box>

            <Stack
              alignItems={"center"}
              direction={"column"}
              gap={"0"}
              position={"relative"}
              textAlign={"center"}
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
                  arrow={false}
                  asChild={true}
                  external={true}
                  href={"https://app.mutuals.finance/pool/demo"}
                >
                  <Button
                    colorPalette={"brand"}
                    size={"xl"}
                    variant={"gradient"}
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
