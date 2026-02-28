import { Tabs } from 'expo-router';
import '../global.css';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: '#3b82f6',
        headerTitle: 'App', // Título compartido por todas las pestañas
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarLabel: 'Perfil',
        }}
      />
    </Tabs>
  );
}
