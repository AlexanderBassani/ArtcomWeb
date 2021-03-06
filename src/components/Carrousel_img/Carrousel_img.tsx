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
export default function CarrouselCampaign_img({ campaigns }: CarrouselData) {
  function IsVideo(campaign) {
    const isVideo = campaign.type;
    console.log("campaign", campaign, isVideo);
    if (isVideo == "video") {
      console.log("campaignVideo", campaign);
      return (
        <Flex w="50%" h="0%">
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
      <Link href={`${campaign.slug}`}>
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {campaign.title}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
          >
            {campaign.summary}
          </Text>
        </a>
      </Link>
    );
  }

  return (
    <Flex w="100%" h={["100px", "800px"]} mx="auto" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ height: "100%", width: "100%", flex: "2" }}
      >
        {campaigns.map((campaign, index) => (
          <SwiperSlide key={index}>
            <Flex
              w="100%"
              h={{ base: "70%", sm: "70%", md: "70%" }} 
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${campaign.path}')`}
              bgPosition="100%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <IsVideo {...campaign}></IsVideo>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
