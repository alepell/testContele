import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ?
  Constants.statusBarHeight : 25

export const ContainerTop = styled.View`
  padding-top: ${statusBarHeight + 'px'};
  background-color: #DCE4F0;
  height: 165px;
`;

export const ArrowContainer = styled.TouchableOpacity``;

export const ArrowPencilContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px;
`

export const PriceContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  margin-right: 22px;
  align-items: center;
  
`

export const PriceNumber = styled.Text`
  margin-left: 6px;
  font-size: 48px;
  font-weight: bold;
  color: #566475;
`

export const PriceCurrency = styled.Text`
  color: #566475;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
`

export const MainContainer = styled.View`
  flex: 1;
  background-color: #F6F8FB;
  padding: 25px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
`;

export const Date = styled.Text`
  margin-left: 9px;
  font-weight: bold;
  color: #566475;
  font-size: 16px;
`;

export const RefundTitle = styled.Text`
  font-size: 18px;
  color: #222222;
  margin-top: 16px;
`;

export const RefundSubtitleContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items:  center;
`
export const RefundSubtitle = styled.Text`
  margin-left: 5px;
  color: #566475;
`;

export const RefundContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items:  center;
`;

export const Refund = styled.Text`
  color: #09D261;
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;

`;

export const FilialContainer = styled.View`
  background: #ffffff;
  border: 1px solid #DCE4F0;
  margin-top: 15px;
  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const FilialSubContainer = styled.View`
  margin-left: 10px;
`

export const FilialName = styled.Text`
  font-weight: bold;
  color: #0F3A57;
  font-size: 16px;
`;

export const DateAndTime = styled.Text`
  font-size: 12px;
  color: #566475;
`;

export const ImageContainer = styled.Image`
  align-self: center;
  margin-top: 15px;
  border-radius: 8px;
  height: 180px;
  width: 280px;
`;