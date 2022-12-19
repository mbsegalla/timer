import { differenceInSeconds } from 'date-fns';
import React, { useEffect, useReducer, useState } from 'react';
import { createContext } from "react";
import { addNewCycleAction, markCurrentCycleFinishedAction, stopCurrentCycleAction } from '../reducers/cycles/actions';
import cyclesReducer from '../reducers/cycles/reducer';

interface CreateCycleData {
  task: string
  minutesAmount: number
}

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishedDate?: Date
}

interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  stopCurrentCycle: () => void
}

interface CyclesContextProviderProps {
  children: React.ReactNode
}

export const CyclesContext = createContext({} as CyclesContextData)

export const CyclesContextProvider = ({ children }: CyclesContextProviderProps) => {
  const [cycleState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  }, () => {
    const storedStateJSON = localStorage.getItem('@timer:cycles')
    if (storedStateJSON) {
      return JSON.parse(storedStateJSON)
    }

    return {
      cycles: [],
      activeCycleId: null,
    }
  })

  const { cycles, activeCycleId } = cycleState
  console.log('cycleState', cycleState)
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate)
      )
    }
    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cycleState)
    localStorage.setItem('@timer:cycles', stateJSON)
  }, [cycleState])

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleFinishedAction())
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }
    console.log('newCycle', newCycle)
    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const stopCurrentCycle = () => {
    dispatch(stopCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        stopCurrentCycle
      }}>
      {children}
    </CyclesContext.Provider>
  )
}