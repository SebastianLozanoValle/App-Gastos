import { ScrollView, Box, LinkText, Heading , View } from "@gluestack-ui/themed"
import { Link, useLocation } from "react-router-native"
import constants from 'expo-constants';
import { StyleSheet } from "react-native";

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()

    const active = pathname === to ? '$primary500' : '$primary700'
    return (
        <Link to={to} underlayColor='transparent'>
            <LinkText
                color={active}
                paddingHorizontal={10}
                textDecorationLine="none"
            >
                {children}
            </LinkText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <Box
            bg="$primary950"
            paddingTop={constants.statusBarHeight + 10}
            paddingHorizontal={10}
        >
            <Heading
                paddingLeft={10}
                color="$secondary0"
                paddingBottom={15}
            >
                CashApp
            </Heading>
            <Box
                paddingBottom={15}
            >
                <ScrollView
                horizontal
                >
                    <AppBarTab to='/'>Pagos</AppBarTab>
                    {/* <AppBarTab to='/nuevo-pago'>Nuevo pago</AppBarTab> */}
                    <AppBarTab to='/pendientes'>Pendientes</AppBarTab>
                    <AppBarTab to='/total'>Total</AppBarTab>
                    <AppBarTab to='/desgloce'>Valance</AppBarTab>
                    <AppBarTab to='/desgloce'>Desgloce</AppBarTab>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default AppBar