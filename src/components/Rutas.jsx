import { Box, Text } from "@gluestack-ui/themed";
import { Route, Routes } from "react-router-native";
import Home from "./Home";
import AppBar from "./AppBar";
import Pendientes from "./Pendientes";
import { useState, useEffect } from "react"
import pagosApi from "../data/Pagos"

const Rutas = () => {
    
    const [pagos, setPagos] = useState({})

    useEffect(() => {
        setPagos(pagosApi)
    }, [])

    return (
        <Box
            flex={1}
            bg="$backgroundDark950"
        >
        <AppBar />
        <Routes>
            <Route path="/" element={<Home pagos={pagos} />} />
            <Route path="/pendientes" element={<Pendientes />} />
            <Route path="*" element={<Home />} />
        </Routes>
        </Box>
    )
}

export default Rutas