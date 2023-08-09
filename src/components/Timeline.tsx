import timelineData from "@app/(data)/timeline.json";
import SmallEvent from "./SmallEvent";
import LargeEvent from "./LargeEvent";

type TimelineProps = {
  location: string | undefined;
  lastGymLocation: string | undefined;
};

export default function Timeline({ location, lastGymLocation }: TimelineProps) {
  const timelineLocations = timelineData.locations;
  const locations = [];

  const firstGymIndex = timelineLocations.findIndex(
    (loc) => loc.name === lastGymLocation
  );

  for (let i = firstGymIndex; i < timelineLocations.length; i++) {
    locations.push(timelineLocations[i]);
    if (timelineLocations[i].name?.slice(-3).toLowerCase() === "gym") {
      break;
    }
  }

  console.log(locations);

  const smallEventsArray = locations.slice(1, -1);

  return (
    <div>
      <div>
        <LargeEvent location = {locations[0].displayName} />
      </div>

      <div>
        {smallEventsArray.map((item, index) => (
          <div key={index}> <SmallEvent location = {item.displayName} /> </div>
        ))}
      </div>

      <div>
        <LargeEvent location = {locations.at(-1)?.displayName} />
      </div>
    </div>
  );
}