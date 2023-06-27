'use client';

import { GymLeaders } from "components/GymLeaders";

export default function Start() {

  return (
    <main className="flex justify-center items-center">
      <p>Which gym did you last defeat?</p>
      <GymLeaders select={() => alert('selected')} />
    </main>
  );
}
