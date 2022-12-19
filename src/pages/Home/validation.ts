import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string()
    .min(1, 'O nome da tarefa deve ter pelo menos 1 caractere'),
  minutesAmount: zod.number()
    .min(5, 'A duração deve ser de pelo menos 5 minutos')
    .max(60, 'A duração deve ser de no máximo 60 minutos')
})

export default newCycleFormValidationSchema
