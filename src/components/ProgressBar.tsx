export type ProgressBarProps = {
  percent: number;
};

export default function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="centered flex-col">
      <p>Story Progress</p>
      <div className="w-full h-4 bg-slate-600 rounded-full dark:bg-gray-700">
        <div
          className={`bg-slate-300 h-full rounded-full`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
