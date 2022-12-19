import { Cycle } from "../../contexts/CyclesContext"
import { CyclesActionTypes } from "./actions"

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

const cyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case CyclesActionTypes.ADD_NEW_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id
      }
    }
    case CyclesActionTypes.MARK_CURRENT_CYCLE_FINISHED: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return {
              ...cycle,
              stopDate: new Date()
            }
          } else {
            return cycle
          }
        }),
        activeCycleId: null
      }
    }
    case CyclesActionTypes.STOP_CURRENT_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === action.payload) {
            return {
              ...cycle,
              finishedDate: new Date()
            }
          } else {
            return cycle
          }
        }),
        activeCycleId: null
      }
    }
    default: {
      return state
    }
  }
}

export default cyclesReducer