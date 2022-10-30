import {BtnPrimary, Center, Container, Input, Label, TextBtnPrimary} from "../../global-components";
import {View} from "react-native";
import {useState} from "react";


const Login = ({navigation}) => {

    navigation.setOptions({headerTitle: "Entrar"});

    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");

    const handleLogin = () => {
        navigation.navigate('Dashboard')
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
            </View>
            <View style={{flex: 2}}>
                <BtnPrimary onPress={() => handleLogin()}>
                    <TextBtnPrimary>Entrar</TextBtnPrimary>
                </BtnPrimary>
            </View>
        </Center>
    </Container>
}

export default Login