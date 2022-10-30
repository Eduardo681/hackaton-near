import {Image, View} from "react-native";
import {
    LogoContainer,
    TextBtnPrimary,
    TextBtnSecondary,
    ContainerBtns,
    Center,  
    ContainerBtnM, 
} from "../../global-components";
import { 
    ContainerStyled as Container,
    TitleStyled as Title,
    BtnSecondaryStyled as BtnSecondary,
    BtnPrimaryStyled as BtnPrimary, 
}  from "./styles";
import {
    useFonts, 
    Poppins_400Regular, 
    Poppins_700Bold
} from "@expo-google-fonts/poppins";

const logo = require("../../public/logo.png")
const Initial = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) null;

    navigation.setOptions({headerTitle: ""});

    return (
        <Container>
            <Center>
                <LogoContainer>
                    <Image source={logo}/>
                </LogoContainer>
                <View>
                    <Title>
                        As finanças
                        ao seu alcance.
                    </Title>
                </View>
                <ContainerBtns>
                    <ContainerBtnM>
                        <BtnSecondary onPress={() => navigation.navigate("Register")}>
                            <TextBtnSecondary>
                                Registrar
                            </TextBtnSecondary>
                        </BtnSecondary>
                    </ContainerBtnM>
                    <ContainerBtnM>
                        <BtnPrimary onPress={() => navigation.navigate("Login")}>
                            <TextBtnPrimary>
                                Entrar
                            </TextBtnPrimary>
                        </BtnPrimary>
                    </ContainerBtnM>
                </ContainerBtns>
            </Center>
        </Container>
    );
}

export default Initial;