//@Types você pode adicionar as tipagens do nosso projeto
//A tipagem abaixo é a passada pelo  react-native-svg-transformer
declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }