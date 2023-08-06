"use client";
import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}
const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => onChange(value + 1), [onChange, value]);

  const onReduce = useCallback(() => onChange(value + 1), [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="font-light text-gray-600">{subtitle}</p>
        <div className="flex flex-row items-center gap-4">
          <div
            onClick={onReduce}
            className="flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-neutral-400 text-neutral-600 cursor-pointer hover:opacity-80 transition "
          >
            <AiOutlineMinus />
          </div>
          <p className="font-light text-xl text-neutral-600">{value}</p>
          <div
            onClick={onAdd}
            className="flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-neutral-400 text-neutral-600 cursor-pointer hover:opacity-80 transition "
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
