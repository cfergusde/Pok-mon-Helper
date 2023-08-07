type LargeEventProps = {
  location: string | undefined;
};

export default function LargeEvent({ location }: LargeEventProps) {
  return (
    <div className="relative w-24 h-24 bg-purple-100 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
      {location}
    </div>
  );
}
