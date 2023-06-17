import { FC, ReactNode } from 'react';

import * as S from './ButtonGroup.styles';

interface ButtonGroupProps {
  children?: ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default ButtonGroup;
