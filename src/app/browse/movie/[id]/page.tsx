import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  calculatePictureDuration,
  findMovieById,
  formatDate,
} from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarIcon from "@mui/icons-material/Star";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

async function page({ params }: { params: { id: number } }) {
  const {
    genres,
    overview,
    title,
    vote_average,
    adult,
    release_date,
    poster_path,
    runtime,
    spoken_languages,
  } = await findMovieById(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-8">
      <div className="p-3 bg-slate-50 flex flex-col items-center border-b">
        <div className="w-4/5 flex justify-center py-8 space-x-3">
          <img
            className="w-1/5 rounded"
            src={`https://media.themoviedb.org/t/p/original/${poster_path}`}
            alt=""
          />
          <div className="w-3/5 px-4">
            <div className="flex items-center">
              <span className="text-4xl font-semibold mr-2">{title}</span>
              <StarIcon className="fill-yellow-500"></StarIcon>
              {vote_average.toFixed(1)}
            </div>
            <div className="space-x-2">
              {genres.map(({ id, name }: { id: number; name: string }) => {
                return <Badge key={id}>{name}</Badge>;
              })}
            </div>
            <p className="text-slate-500 mb-4 mt-4">
              {formatDate(release_date)} &#x2022;{" "}
              {calculatePictureDuration(runtime)}
            </p>
            {adult ? <p>Age: 18+</p> : ""}
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p>{overview}</p>
            </div>
            <div className="mb-4">
              <h2 className="font-semibold text-md">Original Language</h2>
              <p className="text-sm">
                {spoken_languages.map(
                  ({ english_name }: { english_name: string }) => {
                    return english_name;
                  }
                )}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-start">
                <Button className="px-8 rounded-full" asChild>
                  <a
                    href={`https://vidsrc.xyz/embed/movie/${params.id}`}
                    target="_blank"
                  >
                    Watch Now
                  </a>
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <HelpOutlineIcon className="text-lg cursor-pointer"></HelpOutlineIcon>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="bg-white text-sm">
                      By clicking this button you will be redirected to a third
                      party website video player. Although it is safe, it is
                      important to be aware of where you are navigating on the
                      internet.
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Button className="px-8 rounded-full">Rate</Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-4/5 flex flex-row-reverse justify-center space-x-4"
        style={{ gap: "30px" }}
      >
        <div className="w-1/5 h-min border rounded-lg p-4 space-y-4">
          <h1 className="font-semibold">Write a review</h1>
          <Input placeholder="Title" />
          <Textarea placeholder="Description..." />
          <Button className="w-full">Submit</Button>
        </div>
        <div className="w-3/5 mb-4">
          <h1 className="w-full border-b font-semibold text-2xl">Reviews</h1>
          <div className="p-4 bg-slate-100 space-y-4 w-full rounded-lg mt-4">
            <p className="font-semibold">5.0</p>
            <p className="font-semibold">Test Title</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis unde aperiam, corrupti saepe fugiat blanditiis
              tempora enim aspernatur et! Esse temporibus voluptatem architecto,
              consequuntur nesciunt possimus quia delectus saepe fuga.
            </p>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">bptiago</p>
                <p className="text-slate-500">04/01/2024</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-100 space-y-4 w-full rounded-lg mt-4">
            <p className="font-semibold">5.0</p>
            <p className="font-semibold">Test Title</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis unde aperiam, corrupti saepe fugiat blanditiis
              tempora enim aspernatur et! Esse temporibus voluptatem architecto,
              consequuntur nesciunt possimus quia delectus saepe fuga.
            </p>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">bptiago</p>
                <p className="text-slate-500">04/01/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
