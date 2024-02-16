import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

function FaqDrawer() {
  return (
    <Accordion allowToggle width={'100%'} gap={'1rem'} display={'flex'} flexDirection={'column'} marginTop={'4rem'} >
  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          How will my order be delivered to me?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      We deliver across all regions in Zimbabwe
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          What do i need to know?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      How our vegetables are cultivated ,and how we deliver across the region
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          How will i know  if oprder is placed successfully?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Email of confirmation is sent to you soon after making an order
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  
  >
  </AccordionItem>
 

  <AccordionItem
  
  >
  </AccordionItem>

  <AccordionItem
  
  >
  </AccordionItem>

</Accordion>
  )
}

export default FaqDrawer
