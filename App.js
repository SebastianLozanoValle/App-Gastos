import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Rutas from './src/components/Rutas';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NativeRouter><Rutas /></NativeRouter>
    </GluestackUIProvider>
  );
}