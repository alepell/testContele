import React from 'react';
import * as S from './styles';
import Pencil from '../../assets/images/pencil.svg';
import Arrow from '../../assets/images/arrow.svg';
import Calendar from '../../assets/images/calendar.svg'
import Fork from '../../assets/images/garfo.svg';
import Money from '../../assets/images/money.svg';
import imageRefund from '../../assets/images/retangle.png';
import { usePrice } from '../../context/Price';

const Info = ({ navigation }) => {
  const { price, dayDate } = usePrice();

  return (
    <>
      <S.ContainerTop>
        <S.ArrowPencilContainer>
          <S.ArrowContainer onPress={() => navigation.navigate('Home')}>
            <Arrow />
          </S.ArrowContainer>
          <Pencil />
        </S.ArrowPencilContainer>
        <S.PriceContainer>
          <S.PriceCurrency>
            R$
          </S.PriceCurrency>
          <S.PriceNumber>
            {price}
          </S.PriceNumber>
        </S.PriceContainer>
      </S.ContainerTop>

      <S.MainContainer>

        <S.DateContainer>
          <Calendar />
          <S.Date>{dayDate}/09/19</S.Date>
        </S.DateContainer>

        <S.RefundTitle>Almoço restaurante</S.RefundTitle>

        <S.RefundSubtitleContainer>
          <Fork />
          <S.RefundSubtitle>Alimentação</S.RefundSubtitle>
        </S.RefundSubtitleContainer>

        <S.RefundContainer>
          <Money height={22} width={22} />
          <S.Refund>Reembolsavel</S.Refund>
        </S.RefundContainer>

        <S.FilialContainer>
          <Calendar />
          <S.FilialSubContainer>
            <S.FilialName>Contele Filial de Santos - SP</S.FilialName>
            <S.DateAndTime>14/09/19 - 13h50</S.DateAndTime>
          </S.FilialSubContainer>
        </S.FilialContainer>

        <S.ImageContainer source={imageRefund} />
      </S.MainContainer>
    </>
  )
}

export default Info;