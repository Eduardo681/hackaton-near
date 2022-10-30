import { BtnPrimary, Center, Container, Input, Label, TextBtnPrimary } from "../../global-components";
import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { Checkbox } from 'react-native-paper';

const Register = ({navigation}) => {

    navigation.setOptions({headerTitle: "Registrar"});

    let [razao, setRazao] = useState("")
    let [cnpj, setCnpj] = useState("")
    let [tel, setTel] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [acceptTerms, setTerms] = useState("")

    const handleRegister = () => {
        // TODO
    }
    return <ScrollView>
        <Container>
            <Center>
                <View style={{flex: 4, paddingTop: 50}}>
                    <View>
                        <Label>Razão Social</Label>
                        <Input onChangeText={t => setRazao(t)}
                            value={razao}
                            placeholder="Informe a razão social"
                            placeholderTextColor={"#494D58"}
                        />
                    </View>
                    <View>
                        <Label>CNPJ</Label>
                        <Input onChangeText={t => setCnpj(t)}
                            value={cnpj}
                            placeholder="Informe o CNPJ"
                            placeholderTextColor={"#494D58"}
                        />
                    </View>
                    <View>
                        <Label>Telefone</Label>
                        <Input onChangeText={t => setTel(t)}
                            value={tel}
                            placeholder="Informe o CNPJ"
                            placeholderTextColor={"#494D58"}
                        />
                    </View>
                    <View>
                        <Label>E-mail</Label>
                        <Input onChangeText={t => setEmail(t)}
                            value={email}
                            placeholder="Informe o telefone"
                            placeholderTextColor={"#494D58"}
                        />
                    </View>
                    <View>
                        <Label>Password</Label>
                        <Input onChangeText={t => setPassword(t)}
                            value={password}
                            placeholder="Informe a senha"
                            placeholderTextColor={"#494D58"}
                        />
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", marginBottom: 30}}>
                        <Checkbox
                            
                            uncheckedColor="#fff"
                            status={acceptTerms ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setTerms(!acceptTerms);
                            }}
                        />
                        <Label>Aceito os <Text style={{color: "#00CFC3"}}>termos e condições</Text> </Label>
                    </View>
                    <BtnPrimary onPress={() => handleRegister} style={{marginBottom: 20}}>
                        <TextBtnPrimary>Entrar</TextBtnPrimary>
                    </BtnPrimary>
                </View>
            </Center>
        </Container>
    </ScrollView>
}

export default Register