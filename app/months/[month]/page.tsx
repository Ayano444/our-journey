import { notFound } from "next/navigation";
import { MonthScene } from "@/components/scenes/MonthScene";
import { months } from "@/data/story";
import { getMonthById, getMonthIndex, getNextMonthRoute } from "@/lib/scenes";

type MonthPageProps = {
  params: Promise<{ month: string }>;
};

export function generateStaticParams() {
  return months.map((month) => ({ month: month.id }));
}

export default async function MonthPage({ params }: MonthPageProps) {
  const { month: monthId } = await params;
  const month = getMonthById(monthId);

  if (!month) {
    notFound();
  }

  const index = getMonthIndex(monthId);

  return (
    <main className="bg-black text-white">
      <MonthScene
        month={month}
        index={index}
        nextHref={getNextMonthRoute(monthId)}
      />
    </main>
  );
}
