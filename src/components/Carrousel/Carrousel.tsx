import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
//import "../styles/slider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { CarrouselProps } from "../../types/types";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export interface CarrouselData {
  campaigns: CarrouselProps[];
}
export default function CarrouselCampaign({ campaigns }: CarrouselData) {
  function IsVideo(campaign) {
    const isVideo = campaign.type;
    console.log("campaign", campaign, isVideo);
    if (isVideo == "video") {
      console.log("campaignVideo", campaign);
      return (
        <Flex w={["270px", "640px", "1366px"]} h={["270px", "", "360px", "1024px"]} mx="auto" mb={["5", "1"]}>
          {/* <Flex w={["270px","640px","1366px"]} h={["270px","","360px", "1024px"]}  mx="auto" mb={["5", "1"]}> */}
          <iframe
            src={campaign.path}
            title={campaign.title}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </Flex>
      );
    }
    return (
      // <Link href={`${campaign.slug}`}>
      <a>
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          color="white"
          fontWeight="bold"
        >
          {campaign.title}
        </Heading>
        <Text
          fontWeight="bold"
          color="white"
          fontSize={["0.8rem", "1xl", "2xl"]}
          mt={["2", "4"]}
        >
          {campaign.summary}
        </Text>
      </a>
      // </Link>
    );
  }

  return (

    // <Flex w={["100%"]} h={["auto"]} mb={["5", "1"]}>
      <Flex   w={["270px","640px","1366px","1024px", "600px", "900px", "1200px","1281px","1366"]} h={["200px","360px", "1024px","768px","768px","768px"]}  mx="auto" mb={["5", "1"]}>
      <Swiper
        slidesPerView={1}
        navigation
        // spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {campaigns.map((campaign, index) => (
          <SwiperSlide key={index}>
            <Link href={`${campaign.slug}`}>
              <Flex
                // w="100%"
                // m="auto"
                // w="1235px;"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={`url('${campaign.path}')`}
                bgPosition="100%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                cursor="pointer"
              >
                <IsVideo {...campaign}></IsVideo>




              </Flex>


            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex >
  );
}
