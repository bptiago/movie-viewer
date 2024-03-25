import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
require("dotenv").config();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getTrendingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  const response = await fetch(
    `${process.env.BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  const data = await response.json();
  return data["results"];
}
