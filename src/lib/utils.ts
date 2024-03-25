import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
require("dotenv").config();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getDataFromTmdb(endpoint: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  const response = await fetch(`${process.env.BASE_URL}${endpoint}`, options);
  const data = await response.json();
  return data["results"];
}

export async function findMovieById(id: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  const response = await fetch(
    `${process.env.BASE_URL}movie/${id}?language=en-US`,
    options
  );
  const data = await response.json();
  return data;
}

export function shortenTitle(title: string) {
  return title.length > 16 ? `${title.slice(0, 16)}...` : title;
}
