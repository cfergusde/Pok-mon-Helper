type SmallEventProps = {
  location: string | undefined;
};

export default function SmallEvent({ location }: SmallEventProps) {
  return (
    <div className="relative w-36 h-36 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
      {location}
    </div>
  );
}
