import React, { useContext } from 'react'

import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

const NewCycleForm: React.FC = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder='Dê um nome para o seu projeto'
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder='00'
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

export default NewCycleForm