import { chakra, VisuallyHidden, useColorModeValue } from "@chakra-ui/react";
export default function SocialButton({ children, label, href }) {
  return (
    <chakra.button
      bg={useColorModeValue("yellow.700", "yellow.800")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("yellow.800", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}
