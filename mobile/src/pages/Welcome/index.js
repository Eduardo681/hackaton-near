import { View, Image } from "react-native";
import { Center } from "../../global-components";
import {Next, NextContainer, NextImage} from "./styles";
import {LogoContainer, Subtitle} from "../../global-components";
import { 
    TitleWelcome as Title,
    ContainerStyled as Container, 
} from "./styles";

import {
    useFonts, 
    Poppins_400Regular, 
    Poppins_700Bold
} from "@expo-google-fonts/poppins";

const logo = require("../../public/logo.png");
const next = require("../../public/next.png");

const Welcome = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) null;

    return (
        <Container>
            <Center>
                <LogoContainer>
                    <Image source={logo}/>
                </LogoContainer>
                <View>
                    <Title style={{fontFamily: "Poppins_700Bold"}}>
                        Bem vindo (a)
                        ao <Subtitle style={{fontFamily: "Poppins_700Bold"}}>Near</Subtitle>
                    </Title>
                </View>
            </Center>
            <NextContainer>
                <Next onPress={() => navigation.navigate('Initial')}>
                    <NextImage source={next}/>
                </Next>
            </NextContainer>
        </Container>
    );
}

export default Welcome;