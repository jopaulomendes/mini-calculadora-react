import { InputContainer } from "./styles";

// criando botões
const Input = ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value}/> 
    </InputContainer>
  );
}

export default Input;