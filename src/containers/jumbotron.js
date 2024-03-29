import React from 'react'
import jumboData from '../fixtures/jumbo'
import {Jumbotron} from '../components/'

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}/>
          </Jumbotron.Pane>
        </Jumbotron>
        )
      })}
    </Jumbotron.Container>
  )
}
