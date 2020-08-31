import React from 'react';
import { View } from 'react-native';
import * as S from './styles';
import { usePrice } from '../../context/Price';
import Lupa from '../../assets/images/Vector.svg'
import Garfo from '../../assets/images/garfo.svg'
import GarfoCanceled from '../../assets/images/garfocanceled.svg'
import MoneyCanceled from '../../assets/images/moneycanceled.svg'
import Money from '../../assets/images/money.svg'
import { StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const { setPrice, setDayDate } = usePrice();
  const infos = [
    {
      id: 1,
      day_number: 22,
      day_name: 'sexta',
      qtd: [
        {
          valueId: 1,
          day_value: '26,00',
          refunded: false
        },
        {
          valueId: 2,
          day_value: '260,00',
          refunded: false
        }
      ]

    },
    {
      id: 2,
      day_number: 20,
      day_name: 'quarta',
      qtd: [
        {
          valueId: 3,
          day_value: '226,00',
          refunded: true
        },
        {
          valueId: 4,
          day_value: '26,00',
          refunded: false
        }
      ]
    },
    {
      id: 3,
      day_number: 14,
      day_name: 'segunda',
      qtd: [
        {
          valueId: 5,
          day_value: '326,00',
          refunded: false
        },
        {
          valueId: 6,
          day_value: '26,00',
          refunded: false
        }
      ]
    }
  ]
  return (
    <>
      <S.Container>
        <S.Header>

          <S.HeaderTitle>Setembro</S.HeaderTitle>
          <Lupa width={24} height={24} />

        </S.Header>

        <S.Wrapper>

          {infos.map(item => (
            <View key={item.id}>
              <S.DayWeekContainer>
                <S.DayNumber>{item.day_number}</S.DayNumber>
                <S.Day>{item.day_name}</S.Day>
              </S.DayWeekContainer>


              {item.qtd.map(valor => (
                valor.refunded === false ?
                  <S.LunchContainer
                    key={valor.valueId}
                    style={styles.shadow}
                    onPress={
                      () => {
                        setPrice(valor.day_value);
                        setDayDate(item.day_number);
                        navigation.navigate('Info');
                      }}
                  >
                    <S.SubLunchContainer >
                      <S.LunchTitle>Almoço restaurante</S.LunchTitle>
                      <S.FoodIconWrapper>
                        <Garfo width={18} height={18} />
                        <S.SubLunchTitle>Alimentação</S.SubLunchTitle>
                      </S.FoodIconWrapper>
                    </S.SubLunchContainer>
                    <S.MoneyIconWrapper>
                      <Money width={18} height={18} />
                      <S.LunchPrice>{valor.day_value}</S.LunchPrice>
                    </S.MoneyIconWrapper>
                  </S.LunchContainer> :

                  <S.LunchContainer
                    key={valor.valueId}
                    style={styles.shadow}
                  >
                    <S.SubLunchContainer >
                      <S.LunchTitleCanceled>Almoço restaurante</S.LunchTitleCanceled>
                      <S.FoodIconWrapper>
                        <Garfo width={18} height={18} />
                        <S.SubLunchTitleCanceled>Alimentação</S.SubLunchTitleCanceled>
                      </S.FoodIconWrapper>
                    </S.SubLunchContainer>
                    <S.MoneyIconWrapper>
                      <MoneyCanceled width={18} height={18} />
                      <S.LunchPriceCanceled>{valor.day_value}</S.LunchPriceCanceled>
                    </S.MoneyIconWrapper>
                  </S.LunchContainer>


              ))}
            </View>
          ))}

        </S.Wrapper>
      </S.Container>

      <S.TotalContainer>
        <S.TotalWord>TOTAL</S.TotalWord>
        <S.priceWrapper>
          <S.Currency>R$</S.Currency>
          <S.TotalPrice>664,00</S.TotalPrice>
        </S.priceWrapper>
      </S.TotalContainer>
    </>
  )
}

export default Home;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
})