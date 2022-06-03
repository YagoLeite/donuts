import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Flex justify="space-around">
      <Text onClick={() => router.push("/")}>Logo</Text>
      <Flex gap="16px">
        <Text onClick={() => router.push("/cardapio")}>Cardápio</Text>
        <Text onClick={() => router.push("/delivery")}>Delivery</Text>
        <Text onClick={() => router.push("/lojas")}>Lojas</Text>
      </Flex>
      <Flex gap="16px">
        <Text>Insta</Text>
        <Text>FB</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
