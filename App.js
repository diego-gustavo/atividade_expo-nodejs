import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from './components/Perfil';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Servico from './components/Servico';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Perfil" component={Perfil} />
				<Tab.Screen name="Serviço" component={Servico} />
				<Tab.Screen name="Galeria" component={Galeria} />
				<Tab.Screen name="Contato" component={Contato} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ecf0f1',
		padding: 8,
	},
});
