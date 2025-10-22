import { Button as TamaguiButton, ButtonProps, styled } from 'tamagui';

export const Button = styled(TamaguiButton, {
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 24,
  fontSize: 16,
  fontWeight: '600',
  variants: {
    variant: {
      primary: {
        backgroundColor: '#4A90E2',
        color: 'white',
        hoverStyle: {
          backgroundColor: '#3A7BC8',
        },
        pressStyle: {
          backgroundColor: '#2C6CB0',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#4A90E2',
        color: '#4A90E2',
        hoverStyle: {
          backgroundColor: '#F0F7FF',
        },
      },
    },
  } as const,
  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonPropsBase = ButtonProps & {
  variant?: 'primary' | 'secondary';
};
