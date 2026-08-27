import { View, Image, StyleSheet } from 'react-native';

export default function Contato() {
	return (
		<View>
			<Image
				style={styles.headerimg}
				source={{
					uri: 'https://placehold.co/1200x200?text=Contato',
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},

	headerimg: {
		width: '100%',
		aspectRatio: 6 / 1,
	},
});

