'use client';

type ListBoxProps = {
  index: number,
  click?: () => void,
  children: any
}

export const ListBox = ({ index, click, children }: ListBoxProps) => {
  return (
    <div onClick={click} className="border-2 border-slate-950 w-40 h-12">
      {children}
    </div>
  )
}