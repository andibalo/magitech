import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

const primaryBtnStyles = {
    backgroundColor: "brand.100",
    color: "white",
    _hover: {
        backgroundColor: "brand.500"
    }
};

const secondaryBtnStyles = {
    backgroundColor: "brand.400",
    color: "white",
    _hover: {
        backgroundColor: "brand.600"
    }
};

const outlinePrimaryBtnStyles = {
    backgroundColor: "primary.100",
    color: "white",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "primary.100",
};

const ghostPrimaryBtnStyles = {
    backgroundColor: "none",
    color: "brand.100",
    _hover: {
        backgroundColor: "gray.100"
    }
};

const buttonSxMapper: any = {
    solid: primaryBtnStyles,
    solidSecondary: secondaryBtnStyles,
    outline: outlinePrimaryBtnStyles,
    ghost: ghostPrimaryBtnStyles
};

interface ButtonProps extends ChakraButtonProps {
    btnType?: string
    children: React.ReactNode
}

export const Button = ({ btnType = "solid", children, ...rest }: ButtonProps) => {
    return (
        <ChakraButton
            variant={btnType}
            size="md"
            sx={buttonSxMapper[btnType]}
            {...rest}
        >
            {children}
        </ChakraButton>
    );
};