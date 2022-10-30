import {useState} from "react";
import {View} from "react-native";
import {
    BtnPrimary, 
    Center, 
    Container, 
    Input, 
    Label, 
    TextBtnPrimary,
    Subtitle
} from "../../global-components";


const Login = ({navigation}) => {

    navigation.setOptions( {headerTitle: "Entrar"} );

    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");

    const handleLogin = () => {
        navigation.navigate('FlushCash')
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

            <View>
                <Label>Novo no Near? 
                    <Subtitle> Crie sua conta</Subtitle>
                </Label>
            </View>
        </Center>
    </Container>
}

export default Login