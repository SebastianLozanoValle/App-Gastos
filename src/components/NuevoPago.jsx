import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed"

const NuevoPago = () => {
    return (
        <Box
        justifyContent="center"
        alignItems="center">
            <FormControl
                size="md"
                width={'80%'}
            >
                <Box
                width={'100%'}>
                    <FormControlLabel mb="$1">
                        <FormControlLabelText
                            color="$secondary200"
                        >Asunto</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField  placeholder="asunto" />
                    </Input>
                </Box>
                <Box
                width={'100%'}>
                    <FormControlLabel mb="$1">
                        <FormControlLabelText
                            color="$secondary200"
                        >Valor</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField  placeholder="Valor" />
                    </Input>
                </Box>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    margin={20}
                >
                    <ButtonText>Agregar </ButtonText>
                </Button>
            </FormControl>
        </Box>
    )
}

export default NuevoPago