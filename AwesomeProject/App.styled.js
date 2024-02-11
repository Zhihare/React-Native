import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		backgroundColor: '#ffffff', // Колір фону форми
	},
	titleContainer: {
		marginBottom: 20,
	},
	welcomeTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333333', // Колір заголовку
	},
	formContainer: {
		width: '100%',
	},
	formTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#333333', // Колір заголовку форми
	},
	input: {
		height: 40,
		borderColor: '#aaaaaa', // Колір обведення поля вводу
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
		backgroundColor: '#f9f9f9', // Колір фону поля вводу
	},
	button: {
		backgroundColor: '#3498db', // Колір кнопки
		paddingVertical: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonTitle: {
		color: '#ffffff', // Колір тексту на кнопці
		fontWeight: 'bold',
		fontSize: 16,
	},
});

export default styles;