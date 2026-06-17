import { months } from "@/data/story";

export function getMonthById(id: string) {
  return months.find((month) => month.id === id);
}

export function getMonthIndex(id: string) {
  return months.findIndex((month) => month.id === id);
}

export function getNextMonthRoute(id: string) {
  const index = getMonthIndex(id);

  if (index === -1 || index === months.length - 1) {
    return "/final";
  }

  return `/months/${months[index + 1].id}`;
}

export const sceneRoutes = {
  intro: "/",
  beginning: "/beginning",
  confession: "/confession",
  memories: "/memories",
  firstMovie: "/first-movie",
  firstMeet: "/first-meet",
  december: "/december",
  birthdays: "/birthdays",
  smallMoments: "/small-moments",
  favorites: "/favorites",
  year: "/year",
  letter: "/letter",
  firstMonth: `/months/${months[0].id}`,
  final: "/final",
} as const;
