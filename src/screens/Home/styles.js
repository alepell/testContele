import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ?
  Constants.statusBarHeight : 0

export const Container = styled.SafeAreaView`
  background-color: #F6F8FB;
  padding-top: ${statusBarHeight + 'px'};
  flex: 1
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #566475;
  font-size: 32px;
  font-weight: bold;
`;

export const Wrapper = styled.ScrollView`
  background-color: #F6F8FB;
`;

export const DayWeekContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 20px;
`;

export const DayNumber = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #9DADB8;
`;

export const Day = styled.Text`
  color: #9DADB8;
  margin-left: 5px;
  margin-top: 9px;
  text-transform: uppercase;
`;

export const LunchContainer = styled.TouchableOpacity`
  background-color: #fff;
  margin-top: 10px;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubLunchContainer = styled.View`
`;

export const LunchTitle = styled.Text`
  font-size: 18px;
  color: #222222;
`;

export const LunchTitleCanceled = styled.Text`
  font-size: 18px;
  color: #9DADB8;
  text-decoration-line: line-through;
`;

export const SubLunchTitle = styled.Text`
  color: #566475;
  font-size: 13px;
  margin-left: 5px;
`;

export const SubLunchTitleCanceled = styled.Text`
  color: #9DADB8;
  font-size: 13px;
  margin-left: 5px;
`;

export const LunchPrice = styled.Text`
  color: #222222;
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
`;

export const LunchPriceCanceled = styled.Text`
  color: #9DADB8;
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
  text-decoration-line: line-through;
`;

export const FoodIconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

export const MoneyIconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TotalContainer = styled.View`
  height: 90px;
  background-color: #DCE4F0;
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalWord = styled.Text`
  color: #9DADB8;
  font-size: 22px;
`

export const priceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Currency = styled.Text`
  color: #0F3A57;
  font-weight: bold;
  margin-right: 5px;
  font-size: 20px;
  margin-top: 5px;
`;

export const TotalPrice = styled.Text`
  color: #0F3A57;
  font-size: 26px;
  font-weight: bold;
`