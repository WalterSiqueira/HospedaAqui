import React from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(View)`
  flex: 1;
  background-color: rgba(0, 0, 255, 0.5); /* Blue semi-transparent overlay */
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.Text`
  font-size: 24px;
  margin-bottom: 100px;
  color: white;
`;

const ButtonContainer = styled.View`
  flex-direction: column;
  align-items: center; /* Center buttons horizontally */
`;

const CustomButton = styled(TouchableOpacity)`
  background-color: rgba(2, 152, 118, 1); /* Custom button background color */
  border-radius: 50px; /* Round border */
  padding: 15px 30px; /* Fixed width and height for both buttons */
  margin-bottom: 10px; /* Add space between the buttons */
`;

const ButtonText = styled.Text`
  color: white; /* Custom button text color */
`;

function WelcomeScreen () {
  return (
    <BackgroundImage source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9PfKpQ0Bbtl2236KAz1bwrxUVhvdzOVn-fO5hysHjZsgCuzy8g8vWy7NRMyNBMhy5H0&usqp=CAU' }}>
      <Overlay>
        <WelcomeText>Bem vindo ao HospedaAqui!</WelcomeText>
        <ButtonContainer>
          <CustomButton title="Login" >
            <ButtonText>Login</ButtonText>
          </CustomButton>
          <CustomButton title="Registrar">
            <ButtonText>Registrar</ButtonText>
          </CustomButton>
        </ButtonContainer>
      </Overlay>
    </BackgroundImage>
  );
};

export default WelcomeScreen;
