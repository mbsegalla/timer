import { Cycle } from "../../contexts/CyclesContext"

export enum CyclesActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  STOP_CURRENT_CYCLE = 'STOP_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_FINISHED = 'MARK_CURRENT_CYCLE_FINISHED'
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: CyclesActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export const stopCurrentCycleAction = () => {
  return {
    type: CyclesActionTypes.STOP_CURRENT_CYCLE,
  }
}

export const markCurrentCycleFinishedAction = () => {
  return {
    type: CyclesActionTypes.MARK_CURRENT_CYCLE_FINISHED,
  }
}