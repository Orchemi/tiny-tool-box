"use client";

import { useEffect, useState } from "react";

type RockScissorsPaper = "rock" | "scissors" | "paper";
const choices: RockScissorsPaper[] = ["rock", "scissors", "paper"];

export default function Page() {
  const [choice, setChoice] = useState<RockScissorsPaper>("rock");

  const handleChangeChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setChoice(randomChoice);
  };

  useEffect(() => {
    handleChangeChoice();
  }, []);

  return (
    <main
      className={"w-full h-full min-h-[100vh] p-4 mobile:p-10"}
      onClick={handleChangeChoice}
    >
      <section
        className={
          "flex flex-col gap-6 items-center w-full justify-center mobile:gap-20"
        }
      >
        <h1 className={"font-extrabold text-[24px]"}>가위바위보 랜덤 추천</h1>
        <div
          className={
            "relative w-20 aspect-square flex justify-center items-center mobile:w-30"
          }
        >
          <img src={`/imgs/${choice}.svg`} alt={"choice-img"} />
        </div>
      </section>
    </main>
  );
}
