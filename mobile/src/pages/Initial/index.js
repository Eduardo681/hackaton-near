import {Image, View} from "react-native";
import {Center, Container, Title} from "../../global-components";
import {LogoContainer} from "./styles";

const logo = require("../../public/logo.png")
const next = require("../../public/next.png")
const Welcome = ({ navigation }) => {
    return (
        <Container>
            <Center>
                <LogoContainer>
                    <Image source={logo}/>
                </LogoContainer>
                <View>
                    <Title>
                        As Finanças
                        Ao Seu Alcance.
                    </Title>
                </View>
            </Center>
        </Container>
    );
}

export default Welcome;