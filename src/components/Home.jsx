import { View, Box, FlatList, Heading, ScrollView, Text, SectionList } from "@gluestack-ui/themed"
import Pago from "./Pago"
import NuevoPago from "./NuevoPago"

const Home = ({pagos}) => {

    return (
        <Box
        flex={2}
        width='100%'
        bg='$backgroundDark950'
        >
            <ScrollView>
                <Heading
                    color="$secondary100"
                    p={20}
                >
                    Pagos
                </Heading>
                <Box
                p={20}
                maxHeight='50%'
                >
                    <FlatList
                    width='90%'
                        horizontal
                        paddingHorizontal={20}
                        data={pagos}
                        renderItem={({item: pago}) => {
                            return (
                                <Pago pagos={pago} />
                            )
                        }}
                    >
                    </FlatList>
                </Box>
                <Heading
                    color="$secondary100"
                    p={20}
                >
                    ¿Ha realizado un nuevo?, ¡Registralo!
                </Heading>
                <NuevoPago />
            </ScrollView>
        </Box>
    )
}

export default  Home