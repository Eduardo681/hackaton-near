import {useState} from "react";
import {View, TouchableOpacity} from "react-native";
import {
    BtnPrimary, 
    Center, 
    Container, 
    Input, 
    Label, 
    TextBtnPrimary,
    Subtitle
} from "../../global-components";
import {
    useFonts, 
    Poppins_400Regular, 
    Poppins_700Bold
} from "@expo-google-fonts/poppins";

const Login = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) null;

    navigation.setOptions( {headerTitle: "Entrar"} );

    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");

    const handleLogin = () => {
        navigation.navigate('Permission')
    }

    return <Container>
        <Center>
            <View style={{flex: 3, paddingTop: 50}}>
                <View>
                    <Label>E-mail</Label>
                    <Input
                        onChangeText={t => setEmail(t)}
                        value={email}
                        placeholder="Informe seu e-mail"
                        placeholderTextColor={"#494D58"}
                    />
                </View>
                <View>
                    <Label>Senha</Label>
                    <Input
                        onChangeText={t => setPassword(t)}
                        value={password}
                        placeholder="Informe sua senha"
                        placeholderTextColor={"#494D58"}
                    />
                </View>

                <Subtitle>Esqueci minha senha</Subtitle>
            </View>
            <View style={{flex: 2}}>
                <BtnPrimary onPress={() => handleLogin()}>
                    <TextBtnPrimary>Entrar</TextBtnPrimary>
                </BtnPrimary>
            </View>

            <View style={{marginBottom: 10}}>
                <Label>Novo no Near? 
                        <Subtitle> Crie sua conta</Subtitle>
                </Label>
            </View>
        </Center>
    </Container>
}

export default Login