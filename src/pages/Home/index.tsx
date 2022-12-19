import React, { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import NewCycleForm from './components/NewCycleForm'
import Countdown from './components/Countdown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import newCycleFormValidationSchema from './validation'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const Home: React.FC = () => {
  const { activeCycle, createNewCycle, stopCurrentCycle } = useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={stopCurrentCycle} type="button">
            <HandPalm size={24} />
            Começar
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )
        }
      </form>
    </HomeContainer>
  )
}

export default Home