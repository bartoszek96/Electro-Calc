import React from 'react';
import StyledInformations from './Informations.styles';
import Brand from '../../components/shared/Brand/Brand';
import StyledText from '../../components/shared/Text/Text.styles';

const Informations = () => {

  const text = "Należy zwracać szczególną uwagę na jednostki, których wymagają dane pola. W obliczeniach elementów elektrycznych należy wziąć pod uwagę również moc, jaka wydzieli się na danym elemencie podczas pracy. Należy dobrać taki element, którego moc znamionowa będzie wyższa niż moc obliczona. Każdy kalkulator zawiera schemat połączeń elektrycznych oraz wzór, z którego korzysta."

  return (
    <StyledInformations>
      <Brand fontSize='2rem'/>
      <StyledText size='20px'>
        {text}
      </StyledText>
    </StyledInformations>
  );
}

export default Informations;
