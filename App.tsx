import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Input } from './shared/input/input'
import { Button } from './shared/Button/Button'
import { Colors, Gaps } from './shared/tokens'

export default function App() {
	const width = Dimensions.get('window').width
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.logo}
					source={require('./assets/logo.png')}
					resizeMode='contain'
				/>

				<View style={styles.form}>
					<Input placeholder='Email' />
					<Input isPassword placeholder='Пароль' />
          <Button text='Войти'/>
				</View>
					<Text>Восстановить пароль</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		padding: 55,
		flex: 1,
		backgroundColor: Colors.black,
	},

	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},

	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},

	logo: {
		width: 220,
	},
})
