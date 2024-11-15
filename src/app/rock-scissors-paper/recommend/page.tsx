"use client";

import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tw-merge";

type RockScissorsPaper = "rock" | "scissors" | "paper";
const choices: RockScissorsPaper[] = ["rock", "scissors", "paper"];

export default function Page() {
  const [choice, setChoice] = useState<RockScissorsPaper>("rock");
  const [color, setColor] = useState<string>("#000000");

  const handleChangeChoice = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setChoice(randomChoice);
    setColor(getRandomColor());
  }, []);

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  useEffect(() => {
    handleChangeChoice();
    setColor(getRandomColor());
  }, [handleChangeChoice]);

  return (
    <main
      className={"w-full h-full min-h-[100vh] p-4 mobile:p-10"}
      onClick={handleChangeChoice}
    >
      <section
        className={
          "flex flex-col gap-6 items-center w-full justify-center h-full mobile:gap-20"
        }
      >
        <h1 className={"font-extrabold text-[20px] mobile:text-[24px] "}>
          가위바위보 랜덤 추천
        </h1>
        <div
          className={
            "flex justify-center items-center rounded-full w-[120px] aspect-square mobile:w-[200px]"
          }
          style={{
            backgroundColor: `${color}20`,
            border: `3px solid ${color}`,
          }}
        >
          <div className={twMerge("relative flex justify-center items-center")}>
            <img
              src={`/imgs/${choice}.svg`}
              alt={"choice-img"}
              className={"w-[80px] aspect-square mobile:w-[120px]"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
