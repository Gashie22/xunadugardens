import { HStack, VStack } from "@chakra-ui/react";

function BottomFooter() {
  return (
    <>
      <VStack width={"100%"} height={"100%"} paddingBottom={"50px"}>
        {/* Footer Bottom Links  */}
        <HStack
        height={"100%"}
          width={"92%"}
          justifyContent={['flex-start' , 'flex-start' , 'flex-start' , 'center']}
          gap={['40px' , '80px' , '80px' , '80px']}
          marginTop={"50px"}
          flexWrap={["wrap", "wrap", "wrap", "wrap"]}
         alignItems={"flex-start"}
        >
          {/* Legal */}
          <VStack alignItems={"flex-start"} >
            <h1 className="text-xl font-semibold mb-4">Legal</h1>
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
          </VStack>

          {/* Opening Hours */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Opening Hours</h1>
            <p>Monday - Saturday............. 09:00 - 17:00</p>
            <p>Sunday......................... CLOSED</p>
          </VStack>

          {/* Partners */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Partners</h1>
            <p>Retailers</p>
          </VStack>

          {/* Services */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Services</h1>
            <p>ABout Us</p>
            <p>Careers</p>
          </VStack>

          {/* Information */}
          <VStack alignItems={"flex-start"}>
            <h1 className="text-xl font-semibold mb-4">Information</h1>
            <p>Our Company</p>
            <p>Partners</p>
            <p>Vendors</p>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
}

export default BottomFooter;
