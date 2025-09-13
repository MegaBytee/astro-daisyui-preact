// Counter.tsx

import { useState } from "preact/hooks";

type Props = {
  initial?: number;
  min?: number;
  max?: number;
  className?: string;
};

export default function Counter({
  initial = 0,
  min = 0,
  max = 999,
  className = "",
}: Props) {
  const [count, setCount] = useState<number>(initial);

  const inc = () => setCount((c) => Math.min(max, c + 1));
  const dec = () => setCount((c) => Math.max(min, c - 1));
  const reset = () => setCount(initial);

  return (
    <div className={`card w-full max-w-sm bg-base-200 shadow-md ${className}`}>
      <div class="card-body">
        <h2 class="card-title">Counter</h2>

        <div class="flex items-center justify-center gap-4 mt-2">
          <button
            class="btn btn-square btn-sm"
            onClick={dec}
            aria-label="decrement"
            disabled={count <= min}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
            </svg>
          </button>

          <div class="text-2xl font-semibold">
            <span class="badge badge-lg">{count}</span>
          </div>

          <button
            class="btn btn-square btn-sm btn-primary"
            onClick={inc}
            aria-label="increment"
            disabled={count >= max}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <div class="card-actions justify-between mt-4">
          <button
            class="btn btn-ghost btn-sm"
            onClick={reset}
            aria-label="reset"
          >
            Reset
          </button>
          <div class="tooltip" data-tip={`min: ${min} • max: ${max}`}>
            <button class="btn btn-outline btn-sm" aria-label="info">
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
