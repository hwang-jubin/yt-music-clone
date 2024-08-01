import React from "react";
import { Playlist } from "@/types";
import PlayListCard from "@/components/PlayListCard"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface PlayListCarouselProps{
  title:string,
  subTitle?:string,
  Thumbnail?:React.ReactNode,
  playListArrary?:Playlist[];
  
}

const PlayListCarousel:React.FC<PlayListCarouselProps> = ({
  title, subTitle, Thumbnail, playListArrary
}) => {
  return <div>
    <Carousel>
      <div className="flex flex-row justify-between items-end my-2">
        <article className="flex flex-row gap-3">
          {Thumbnail}
          <div>
          <div >{subTitle && <div className="text-neutral-500">{subTitle}</div>}</div>
          <div className="text=[34px] font-bold leading-[34px]">{title}</div>
          </div>
        </article>
        <div className="relative left-[-45px]">
          <div className="absolute bottom-[20px]">
        <CarouselPrevious className="right-2"/>
        <CarouselNext className="left-2"/>
        </div>
        </div>
      </div>
      <CarouselContent>
        {
          playListArrary?.map((playList,index)=>{
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <PlayListCard playList={playList}/>
            </CarouselItem>
            )
          })
        }
      </CarouselContent>
    </Carousel>
  </div>;
};

export default PlayListCarousel;