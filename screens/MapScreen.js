import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { darkTheme, lightTheme } from '../constants/Colors';
import { Appearance } from 'react-native-appearance';

export default class MapScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			data: null,
			loaded: true,
			error: null,
		};
	}
	baseURL = 'https://covid19hunbackend.herokuapp.com/getcounties';

	getData = (ev) => {
		this.setState({ loaded: false, error: null });
		let url = this.baseURL;
		let h = new Headers();
		h.append('Authorization', 'Bearer sjdkfhakdkakhkajsdhks');
		h.append('X-Client', 'Steve and Friends');

		let req = new Request(url, {
			headers: h,
			method: 'GET',
		});

		fetch(req)
			.then((response) => response.json())
			.then(this.showData)
			.catch(this.badStuff);
	};
	showData = (data) => {
		this.setState({ loaded: true, data });
		console.log(data);
	};
	badStuff = (err) => {
		this.setState({ loaded: true, error: err.message });
	};
	componentDidMount() {
		this.getData();
		//geolocation -> fetch
	}

	render() {
		return (
			<ScrollView>
				{this.state.data &&
					this.state.data.length > 0 &&
					this.state.data.map((comment) => (
						<View key={comment.key} style={styles.container}>
							<Text style={styles.countyName}>{comment.key}</Text>
							<Text style={styles.caseNumber}>{comment.value}</Text>
						</View>
					))}
				<Text>Forrás: koronavirus.gov.hu</Text>
			</ScrollView>
		);
	}
}
const userTheme = Appearance.getColorScheme();
let theme = null;
if (userTheme === 'light') {
	theme = lightTheme;
} else {
	theme = darkTheme;
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		// backgroundColor: theme.backgroundColor,
		color: theme.tintColor,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: 50,
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 4,
		borderRadius: 10,
		borderColor: theme.borderColor,
	},
	countyName: {
		width: '65%',
		marginLeft: 10,
		fontWeight: 'bold',
		color: theme.tintColor,
	},
	caseNumber: {
		textAlign: 'right',
		width: '30%',
		alignItems: 'center',
		marginRight: 10,
		color: theme.tintColor,
	},
});
