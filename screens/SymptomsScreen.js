import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WhatToDo from '../components/WhatToDo';
import { Badge } from 'react-native-elements';
import { lightTheme, darkTheme } from '../constants/Colors';
import { Appearance } from 'react-native-appearance';

export default class SymptomsScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			data: null,
			loaded: true,
			error: null,
		};
	}
	baseURL = 'https://covid19hunbackend.herokuapp.com/getsymptomps';

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
	}

	render() {
		return (
			<ScrollView>
				<View>
					<Text style={styles.introText}>
						A leggyakoribb tünetek a láz, száraz köhögés és a fáradtság. Egyes betegeknél jelentkezhet
						izomfájdalom, orrdugulás, orrfolyás, torokfájás, hasmenés, legszomj.
						A tünetek általában enyhék és fokozatosan jelentkeznek, de vannak olyan fertőzöttek, akiknél
						nem alakul ki semmilyen tünet és nem érzik magukat betegnek.
					</Text>
				</View>
				{this.state.data &&
					this.state.data.length > 0 &&
					this.state.data.map((current) => (
						<View key={current.key} style={styles.container}>
							<Text style={styles.symptomName}>{current.key}</Text>
							<View style={styles.casePercent}>
								<Badge value={current.value + '%'} status='error' />
							</View>
						</View>
					))}

				<WhatToDo />
				<Text style={styles.introText}>Forrás: koronavirus.gov.hu</Text>
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
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: 50,
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderRadius: 10,
		color: theme.tintColor,
		borderColor: theme.borderColor,
	},
	symptomName: {
		width: '65%',
		marginLeft: 10,
		fontWeight: 'bold',
		color: theme.tintColor,
	},
	casePercent: {
		textAlign: 'right',
		width: '30%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		marginRight: 10,
	}, 
	introText: {
		margin: 10,
		textAlign: "center",
		fontSize: 15,
		color: theme.tintColor,
	}
});
