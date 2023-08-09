import timelineData from "@app/(data)/timeline.json";
import ProgressBar from "@components/ProgressBar";
import Link from "next/link";

export type HeaderProps = {
  location: string | undefined;
};

export default function Header({ location }: HeaderProps) {
  const locIndex = timelineData.locations.findIndex(
    (loc) => loc.name === location
  );
  const storyPercent = Math.round(
    (locIndex / timelineData.locations.length) * 100
  );
  const title = timelineData.locations.at(locIndex)?.displayName;

  return (
    <div className="w-full flex flex-row justify-around">
      <div className="w-1/5 ml-8">
        <ProgressBar percent={storyPercent} />
      </div>
      <h1 className="centered w-3/5">{title}</h1>
      <div className="w-1/5 flex flex-row justify-end mr-8">
        <div className=" bg-slate-600 rounded-3xl centered px-6">
          <Link href="/start">Start a new game</Link>
        </div>
      </div>
    </div>
  );
}
