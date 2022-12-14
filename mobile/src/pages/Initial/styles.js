import styled from 'styled-components';
import { Container, Title, BtnPrimary, BtnSecondary } from '../../global-components';

const ContainerStyled = styled(Container)`
    padding-top: 80px;
`;

const TitleStyled = styled(Title)`
  font-family: "Poppins_700Bold";
  margin: 0 30px;
`;

const BtnPrimaryStyled = styled(BtnPrimary)`
  width: 160px;
  margin: 0 10px;
`;

const BtnSecondaryStyled = styled(BtnSecondary)`
  width: 150px;
  margin: 0 10px;
`;

export {
  ContainerStyled,
  TitleStyled,
  BtnSecondaryStyled,
  BtnPrimaryStyled,
};