import React from 'react';
import { Container, Background, Row } from './styles';
import Paragraph from '../../components/Paragraph';
import Counter from '../../components/Counter';
import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

const Result = () => {
  const params = useRoute()
  const navigation = useNavigation<propsStack>()

  return (
    <Container>
      <Background
        source={require('../../assets/wallpaper/bg-abstract-dots.png')}
        resizeMode='cover'
      >
        <Row
          flexDirection='row'
          justifyContent='center'
        >
          <Paragraph 
            children='FIM DA PARTIDA'
            fontFamily='Montserrat-Black'
            fontSize='24px'
            lineHeight='36px'
          />
        </Row>
        <Row
          RowWidth='240px'
          RowMargin='24px 0 0 0'
          flexDirection='row'
          justifyContent='center'
        >
          <Row>
            <Paragraph 
              children='Nós'
              fontFamily='Montserrat-Black'
              fontSize='32px'
              lineHeight='40px'
            />
            <Counter 
              // @ts-ignore
              children={params?.params?.resultWe}
              fontFamily='Montserrat-Black'
              fontSize='110px'
              lineHeight='116px'
            />
          </Row>
          <Row>
            <Paragraph 
              children='Eles'
              fontFamily='Montserrat-Black'
              fontSize='32px'
              lineHeight='40px'
            />
            <Counter 
              // @ts-ignore
              children={params?.params?.resultThey}
              fontFamily='Montserrat-Black'
              fontSize='110px'
              lineHeight='116px'
            />
          </Row>
        </Row>
        <Row
          RowMargin='96px 0 0 0'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
        >
          <Button
            children='RECOMEÇAR'
            onPress={() => navigation.goBack()}
            widthButton='300px'
            fontSize='26px'
            lineHeight='36px'
          />
        </Row>
      </Background>
    </Container>
  )
}

export default Result;