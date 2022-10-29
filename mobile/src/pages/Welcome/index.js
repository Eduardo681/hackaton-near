import {Image, View} from "react-native";
import {Center, Container, Title} from "../../global-components";
import {Next, NextContainer, NextImage} from "./styles";
import {LogoContainer, Subtitle} from "../../global-components";

const logo = require("../../public/logo.png")
const next = require("../../public/next.png")
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
                <NextContainer>
                    <Next onPress={() => navigation.navigate('Initial')}>
                        <NextImage source={next}/>
                    </Next>
                </NextContainer>
            </Center>
        </Container>
    );
}

export default Welcome;