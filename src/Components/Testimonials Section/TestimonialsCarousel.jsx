import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Box, Image, Text, VStack } from '@chakra-ui/react';



function TestimonialsCarousel() {
  return (
    <Box
      width={'100%'}
      min-height={'100%'}
    >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        {/* Slide 1 */}
        <SwiperSlide>

          {/* Testimonial Card */}
          <Box
            width={['25rem', '25rem', '25rem', '25rem']}
            height={['21rem', '21rem', '21rem', '26rem']}
            display={"flex"}
            justifyContent={"flex-end"}
            position={"relative"}
            backgroundColor={'white'}
          >

            {/* Testimonial Image */}
            <VStack
              width={'100px'}
              height={'100px'}
              position={"absolute"}
              top={'20px'}
              left={'35%'}
            >
             {/** <Image boxSize={"100px"} src='https://orgik-theme.myshopify.com/cdn/shop/files/testimonial_image_01_200x200.png?v=1639813157' /> */}
            </VStack>


            {/* Testimonial Details */}
            <VStack
              width={['75%', '85%', '100%', '90%']}
              height={"70%"}
              // backgroundColor={'red'}
              margin={'auto'}
              border={'1px dashed #5EA98B'}
              paddingTop={'5rem'}
            >

              <Text
                fontSize={['20px', '20px', '25px', '30px']}
                fontWeight={"700"}
                letterSpacing={'2px'}
                color={'#5EA98B'}
              >Trymore Katsidzira</Text>

              <Text
                fontWeight={"600"}
              >Founder</Text>

              <Text
                width={'90%'}
                textAlign={'center'}
                fontSize={['12px', '13px', '15px', '15px']}
                letterSpacing={'1px'}

              >
                Find out more about her on our Social pages
              </Text>

            </VStack>

          </Box>
        </SwiperSlide>

        {/* Slide 2 */}
    

      </Swiper>
    </Box>
  )
}

export default TestimonialsCarousel
