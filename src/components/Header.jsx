import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack justify="space-between" p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <HStack spacing={4}>
        <Button variant={"unstyled"} color={"white"} marginRight={4}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} marginRight={4}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
      
      {/* Add PricePal with a huge font */}
      <Text fontSize="2xl" fontWeight="bold" color="white">
        PricePal
      </Text>
    </HStack>
  );
};

export default Header;


