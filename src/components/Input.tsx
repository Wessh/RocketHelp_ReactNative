import { Input as NativeBaseInput, IInputProps } from 'native-base';
//Ao importar e passar o IInputProps. Ele vai ajudar a trazer todos os componentes do input para o intellisense.
export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput
    bg='gray.700'
    h={14}
    size='md'
    borderWidth={0}
    fontSize='md'
    fontFamily='body'
    color='white'
    selectionColor='green.700'
    placeholderTextColor='gray.300'
    _focus={{
      borderWidth:1,
      borderColor: "green.500",
      bg : "gray.700",
      
  }}
    {...rest}
    />
  );
}