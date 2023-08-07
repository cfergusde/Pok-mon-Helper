import timelineData from "@app/(data)/timeline.json";

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

  console.log(locations)

  return <></>;
}
