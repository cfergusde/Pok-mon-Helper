type LargeEventProps = {
  location: string | undefined;
};

export default function LargeEvent({ location }: LargeEventProps) {
  return (
    <div className="relative w-18 h-18 bg-slate-600 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
      {location}
    </div>
  );
}
