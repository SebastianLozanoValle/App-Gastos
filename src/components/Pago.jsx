import { Box, Heading, Text } from "@gluestack-ui/themed"

const Pago = ({ pagos }) => {
    return (
        <Box
            key={pagos.id}
            marginRight={100}
            borderWidth={1}
            padding={20}
            borderRadius={10}
            borderColor="$secondary300"
        >
            <Text color="$secondary300"><Heading color="$secondary200">Asunto: </Heading>{pagos.asunto}</Text>
            <Text color="$secondary300"><Heading color="$secondary200">Valor : </Heading>{pagos.valor}</Text>
            <Text color="$secondary300"><Heading color="$secondary200">Hora: </Heading>{pagos.horaRegistro}</Text>
        </Box>
    )
}

export default Pago