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
import { shortenTitle } from "@/lib/utils";
import Link from "next/link";

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
                    className="w-full h-4/5 object-cover object-top rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/original/${item.poster_path}`}
                  ></img>
                  <div className="p-4">
                    <div className="flex justify-between mb-4">
                      {item.media_type === "tv" ? (
                        <h1 className="font-bold">{shortenTitle(item.name)}</h1>
                      ) : (
                        <h1 className="font-bold">
                          {shortenTitle(item.title)}
                        </h1>
                      )}
                      <div>
                        <Badge>{item.vote_average.toFixed(1)}</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`browse/${item.id}`}>See More</Link>
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
