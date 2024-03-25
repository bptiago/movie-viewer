import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function CarouselSize({ contentList }) {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 3,
      }}
      className="w-full"
    >
      <CarouselContent>
        {contentList.map((item, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square items-center p-0">
                  <img
                    className="w-full h-2/3 object-cover object-top rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/original/${item.poster_path}`}
                  ></img>
                  <div className="p-4">
                    <div className="flex justify-between mb-4">
                      <h1 className="font-bold">
                        {item.title.length > 16
                          ? `${item.title.slice(0, 16)}...`
                          : item.title}
                      </h1>
                      <Badge>{item.vote_average.toFixed(1)}</Badge>
                    </div>
                    <Button variant="outline" className="w-full">
                      See More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
