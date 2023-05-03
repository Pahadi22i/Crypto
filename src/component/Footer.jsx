import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc =
  "https://scontent.fdel20-1.fna.fbcdn.net/v/t1.6435-9/132063398_2676339845924253_6067009400660541394_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=um-40_ZrMpsAX-6DLp7&_nc_ht=scontent.fdel20-1.fna&oh=00_AfDAWFmoROBu_9xSXJfSqgcXGq1K3uXK0fh7ljN30GiwDQ&oe=647A1E35";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
          {/* <Text> Devender singh</Text> */}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
