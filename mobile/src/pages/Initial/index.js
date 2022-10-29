import {Image, View} from "react-native";
import {Center, Container, Title} from "../../global-components";
import {BtnPrimary, BtnSecondary, LogoContainer, TextBtnPrimary, TextBtnSecondary} from "../styles";

const logo = require("../../public/logo.png")
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
                        ao seu alcance.
                    </Title>
                </View>
                <View>
                    <BtnSecondary>
                        <TextBtnSecondary>
                            Registrar
                        </TextBtnSecondary>
                    </BtnSecondary>
                    <BtnPrimary>
                        <TextBtnPrimary>
                            Entrar
                        </TextBtnPrimary>
                    </BtnPrimary>
                </View>
            </Center>
        </Container>
    );
}

export default Welcome;