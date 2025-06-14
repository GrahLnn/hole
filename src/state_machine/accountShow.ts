import { useSelector } from "@xstate/react";
import { createActor, createMachine } from "xstate";
import { createStateAndSignals } from "./core";
import { matchable, Matchable } from "@/lib/matchable";

const { State, Signal } = createStateAndSignals({
  states: ["brief", "detail"],
  signals: ["BRIEF", "DETAIL"],
});
type StateType = keyof typeof State;

export const accountShowMachine = createMachine({
  id: "accountShow",
  initial: State.brief,
  states: {
    [State.brief]: {
      on: {
        [Signal.detail.into()]: {
          target: State.detail,
        },
      },
    },
    [State.detail]: {
      on: {
        [Signal.brief.into()]: {
          target: State.brief,
        },
      },
    },
  },
});

const accountShowActor = createActor(accountShowMachine);

accountShowActor.start();

export function toggleAccountShow(showDetail: boolean) {
  if (showDetail) accountShowActor.send(Signal.detail);
  else accountShowActor.send(Signal.brief);
}

export function useCurrentState(): Matchable<StateType> {
  return useSelector(accountShowActor, (state) =>
    matchable(state.value as StateType)
  );
}
