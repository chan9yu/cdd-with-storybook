import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ButtonProps } from './Button';

type ButtonStyledProps = Pick<ButtonProps, 'primary' | 'backgroundColor' | 'size'>;

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  /* secondary */
  color: #333;
  background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

  ${({ primary }) =>
    primary &&
    css`
      color: white;
      background-color: #1ea7fd;
    `}

  ${({ size = 'medium' }) => sizeStyles[size]}
`;
