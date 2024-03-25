import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { findMovieById } from "@/lib/utils";
import React from "react";

async function page({ params }: { params: { id: number } }) {
  const {
    genres,
    overview,
    title,
    vote_average,
    isAdult,
    release_date,
    runtime,
  } = await findMovieById(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-16">
      <div className="w-3/5 flex justify-center py-8">
        <div className="w-4/5 px-4">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <div className="space-x-2 mb-4">
            {genres.map(({ id, name }: { id: number; name: string }) => {
              return <Badge key={id}>{name}</Badge>;
            })}
          </div>
          <p>{overview}</p>
          <Button>Watch Now</Button>
        </div>
        <div className="border-l-2 px-4">
          <p>{release_date}</p>
          <p>{runtime}</p>
          <p>Diretores / Roteiristas</p>
        </div>
      </div>
    </main>
  );
}

export default page;
