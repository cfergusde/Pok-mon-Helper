type SmallEventProps = {
  location: string | undefined;
};

export default function SmallEvent({ location }: SmallEventProps) {
  return (
    <div className="relative w-12 h-12 bg-slate-600 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
      {location}
    </div>
  );
}
