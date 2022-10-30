import {CardContainer, CardDate, CardDesc, CardNegative, CardPositive} from "./styles";
import {View} from "react-native";
import Moment from 'moment';
import {useEffect} from "react";
import axios from "axios";



const Card = props => {
    const item = props.item;
    return <CardContainer>
        <View style={{flexDirection: "column", width: "50%"}}>
            <CardDate>
                {Moment(item.date).format('DD/MM/YYYY')}
            </CardDate>
            <CardDesc>
                {item.category}
            </CardDesc>
        </View>
        <View>
            {
                item.amount > 0 ?         <CardPositive>
                    R$ {item.amount.toFixed(2)}
                </CardPositive> : <CardNegative>
                    R$ {item.amount.toFixed(2)}
                </CardNegative>
            }

        </View>
    </CardContainer>
}

export default Card;