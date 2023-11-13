import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(View)`
  flex: 1;
  background-color: rgba(0, 0, 255, 0.5);
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.Text`
  font-size: 24px;
  margin-bottom: 30px;
  color: white;
`;

const ButtonContainer = styled.View`
  width: 80%;
`;

const CustomButton = styled(TouchableOpacity)`
  background-color: rgba(2, 152, 118, 1);
  border-radius: 5px;
  padding: 15px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
`;

function WelcomeScreen({ navigation }) {
  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <BackgroundImage source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9PfKpQ0Bbtl2236KAz1bwrxUVhvdzOVn-fO5hysHjZsgCuzy8g8vWy7NRMyNBMhy5H0&usqp=CAU' }}>
      <Overlay>
        <WelcomeText>Bem-vindo ao HospedaAqui!</WelcomeText>
        <ButtonContainer>
          <CustomButton onPress={handleLoginPress}>
            <ButtonText>Login</ButtonText>
          </CustomButton>
        </ButtonContainer>
        <ButtonContainer>
          <CustomButton onPress={handleSignupPress}>
            <ButtonText>Sign Up</ButtonText>
          </CustomButton>
        </ButtonContainer>
      </Overlay>
    </BackgroundImage>
  );
}

export default WelcomeScreen;

