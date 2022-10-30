import { View, Image } from "react-native";
import { Center } from "../../global-components";
import {Next, NextContainer, NextImage} from "./styles";
import {LogoContainer, Subtitle} from "../../global-components";
import { 
    TitleWelcome as Title,
    ContainerStyled as Container, 
} from "./styles";

const logo = require("../../public/logo.png");
const next = require("../../public/next.png");

const Welcome = ({navigation}) => {
    return (
        <Container>
            <Center>
                <LogoContainer>
                    <Image source={logo}/>
                </LogoContainer>
                <View>
                    <Title>
                        Bem vindo (a)
                        ao <Subtitle>Near</Subtitle>
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