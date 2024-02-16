import {
  Box,
  Button,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

function OrganicFruitsSidebar() {

  return (
    <Box
      width={"100%"}
      height={"100%"}
    >
      <VStack width={["100%", "100%", "100%", "100%", "80%"]} height={"100%"} margin={"auto"}>
        {/* Category */}
        <VStack width={"100%"} height={"15rem"} alignItems={"flex-start"}>
          <Text fontWeight={"600"} fontSize={"1.2rem"}>
            Category
          </Text>

          <HStack
            width={"100%"}
            height={"2px"}
            backgroundColor={"#5DA88A"}
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          ></HStack>

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            <Checkbox> Fruits</Checkbox>
            <Checkbox>Vegetables</Checkbox>
          </VStack>
        </VStack>

        {/* Availability */}
        <VStack width={"100%"} height={"9rem"} alignItems={"flex-start"}>
          <Text fontWeight={"600"} fontSize={"1.2rem"}>
            Availability
          </Text>

          <HStack
            width={"100%"}
            height={"2px"}
            backgroundColor={"#5DA88A"}
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          ></HStack>

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio colorScheme="green" value="1" >
                  In Stock
                </Radio>
                <Radio isDisabled colorScheme="red" value="2">
                  Out of Stock
                </Radio>
              </Stack>
            </RadioGroup>
          </VStack>
        </VStack>


        {/* Price */}
        <VStack width={"100%"} height={"15rem"} alignItems={"flex-start"}>
         

          <HStack
            width={"100%"}
            height={"2px"}
            backgroundColor={"#5DA88A"}
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          ></HStack>

         

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            )

          </VStack>

         

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            )

          </VStack>


        </VStack>



        {/* Product Type */}
        <VStack width={"100%"} height={"9rem"} alignItems={"flex-start"}>
          <Text fontWeight={"600"} fontSize={"1.2rem"}>
            Product Type
          </Text>

          <VStack
            width={"100%"}
            height={"10rem"}
            alignItems={"flex-start"}
            fontWeight={"500"}
            fontSize={"0.9rem"}
            letterSpacing={"0.5px"}
          >
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio colorScheme="green" value="1">
                  Fruits
                </Radio>
                <Radio colorScheme="green" value="2">
                  Vegetables
                </Radio>
              </Stack>
            </RadioGroup>
          </VStack>
        </VStack>

        {/* Button */}
        <HStack
          width={"100%"}
          height={"5rem"}
          gap={'1rem'}
        >

          <Button
            width={'7rem'}
            color={"white"}
            backgroundColor={"#5DA88A"}
            borderRadius={'50px'}
            _hover={{ backgroundColor: '#FEE4D7', color: '#5DA88A' }}
          >Clear</Button>

          <Button
            width={'7rem'}
            color={"white"}
            backgroundColor={"#5DA88A"}
            borderRadius={'50px'}
            _hover={{ backgroundColor: '#FEE4D7', color: '#5DA88A' }}
          >Order</Button>

        </HStack>




      </VStack>
    </Box>
  );
}

export default OrganicFruitsSidebar;
