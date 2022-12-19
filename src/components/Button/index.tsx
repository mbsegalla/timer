import React from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary' }: ButtonProps) => {
  return (
    <ButtonContainer variant={variant}>Enviar</ButtonContainer>
  )
}

export default Button