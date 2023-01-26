import React, { useState, useEffect } from 'react';
import { Container, Background } from './styles';
import Row from '../../components/Row';
import Paragraph from '../../components/Paragraph';
import Counter from '../../components/Counter';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

const Scorer = () => {
  const navigation = useNavigation<propsStack>()

  const [counterWe, setCounterWe] = useState<number>(0);
  const [counterThey, setCounterThey] = useState<number>(0);

  const [counterTruco, setCounterTruco] = useState<number>(1);
  const [textButtonTruco, setTextButtonTruco] = useState<string>('TRUCO!');

  const [counterVictoryWe, setCounterVictoryWe] = useState<number>(0);
  const [counterVictoryThey, setCounterVictoryThey] = useState<number>(0);

  useEffect(() => {
    if (counterWe >= 12) {
      navigation.navigate('Result', {
        resultWe: counterWe,
        resultThey: counterThey
      })
      setCounterVictoryWe(counterVictoryWe + 1)
      resetCounters()
    }
    if (counterThey >= 12) {
      navigation.navigate('Result', {
        resultWe: counterWe,
        resultThey: counterThey
      })
      setCounterVictoryThey(counterVictoryThey + 1)
      resetCounters()
    }
  }, [counterWe, counterThey])

  const truco = () => {
    switch (counterTruco) {
      case 1:
        setCounterTruco(3)
        setTextButtonTruco('SEIS!')
        break;
      case 3:
        setCounterTruco(6)
        setTextButtonTruco('NOVE!')
        break;
      case 6:
        setCounterTruco(9)
        setTextButtonTruco('DOZE!')
        break;
      case 9:
        setCounterTruco(12)
        setTextButtonTruco('TRUCO! (1)')
        break;
      case 12:
        setCounterTruco(1)
        setTextButtonTruco('TRUCO!')
        break;
    }
  }

  const resetCounters = () => {
    setCounterWe(0)
    setCounterThey(0)
    setTextButtonTruco('TRUCO!')
  }

  return (
    <Container>
      <Background
        source={require('../../assets/wallpaper/bg-abstract-dots.png')}
        resizeMode='cover'
      >
        <Row
          RowWidth='240px'
          RowMargin='32px 0 0 0'
          flexDirection='row'
        >
          <Row>
            <Paragraph 
              children='Nós'
              fontFamily='Montserrat-Black'
              fontSize='32px'
              lineHeight='40px'
            />
            <Counter 
              children={counterWe}
              fontFamily='Montserrat-Black'
              fontSize='124px'
              lineHeight='126px'
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
              children={counterThey}
              fontFamily='Montserrat-Black'
              fontSize='124px'
              lineHeight='126px'
            />
          </Row>
        </Row>
        <Row
          RowPadding='0px'
          RowMargin='10px 0 0 0'
        >
          <Row
            flexDirection='row'
            justifyContent='space-between'
            RowMargin='0px 0px 16px 0px'
          >
            <Button 
              children='-1'
              onPress={() => {
                if(counterWe === 0) {
                  
                } else {
                  setCounterWe(counterWe - 1)
                }
              }}
              widthButton='90px'
              heightButton='45px'
              borderRadius='32px'
              fontFamily='Montserrat-Bold'
              fontSize='24px'
              lineHeight='34px'
            />
            <Button 
              children='-1'
              onPress={() => {
                if(counterThey === 0) {
                  
                } else {
                  setCounterThey(counterThey - 1)
                }
              }}
              widthButton='90px'
              heightButton='45px'
              borderRadius='32px'
              fontFamily='Montserrat-Bold'
              fontSize='24px'
              lineHeight='34px'
            />
          </Row>
          <Row
            flexDirection='row'
            justifyContent='space-around'
            RowMargin='0px 0px 10px 0px'
          >
            <Button 
              children={'+' + counterTruco}
              onPress={() => {
                setCounterWe(counterWe + counterTruco)
                setCounterTruco(1)
                setTextButtonTruco(`TRUCO!`)
              }}
              widthButton='125px'
              heightButton='160px'
              borderRadius='70px'
              fontFamily='Montserrat-Bold'
              fontSize='44px'
              lineHeight='56px'
            />
            <Button 
              children={'+' + counterTruco}
              onPress={() => {
                setCounterThey(counterThey + counterTruco)
                setCounterTruco(1)
                setTextButtonTruco(`TRUCO!`)
              }}
              widthButton='125px'
              heightButton='160px'
              borderRadius='70px'
              fontFamily='Montserrat-Bold'
              fontSize='44px'
              lineHeight='56px'
            />
          </Row>
        </Row>
        <Row
          RowMargin='20px 0px 0px 0px'
        >
          <Button
            children={textButtonTruco}
            onPress={truco}
            fontSize='26px'
            lineHeight='36px'
          />
          <Row
            RowPadding='0px'
            RowMargin='12px 0px 0px 0px'
          >
            <Paragraph 
              children='Vitórias'
              fontFamily='Montserrat-ExtraBold'
              fontSize='24px'
              lineHeight='34px'
            />
            <Row
              flexDirection='row'
              justifyContent='space-around'
              RowPadding='0px'
              RowMargin='10px 0px 0px 0px'
            >
              <Counter 
                children={counterVictoryWe}
                fontFamily='Montserrat-ExtraBold'
                fontSize='24px'
                lineHeight='34px'
              />
              <Counter 
                children={counterVictoryThey}
                fontFamily='Montserrat-ExtraBold'
                fontSize='24px'
                lineHeight='34px'
              />
            </Row>
          </Row>
        </Row>
      </Background>
    </Container>
  )
}

export default Scorer;