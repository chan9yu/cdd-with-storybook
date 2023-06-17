import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  children?: ReactNode;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Button: FC<ButtonProps> = ({ backgroundColor, children, primary, size, ...rest }) => {
  return (
    <S.ButtonStyled backgroundColor={backgroundColor} primary={primary} size={size} {...rest}>
      {children}
    </S.ButtonStyled>
  );
};

export default Button;
