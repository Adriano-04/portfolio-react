import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoAtencao = styled(Botao)`
  background-color: yellow;
  color: #fff;
`

function Test() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="20px" principal={false}>
        Cancelar
      </Botao>
      <BotaoAtencao principal>Atenção</BotaoAtencao>
    </>
  )
}

export default Test
