"use client";

type ListBoxProps = {
  index: number;
  click?: () => void;
  children: any;
};

export const ListBox = ({ index, click, children }: ListBoxProps) => {
  return (
    <div onClick={click} className=" w-40 h-18 flex">
      <div className="w-12 h-18 border-r-2 border-slate-950 flex justify-center items-center bg-slate-600">
        <h2>{index}</h2>
      </div>
      <div className="w-28 flex justify-center items-center">{children}</div>
    </div>
  );
};