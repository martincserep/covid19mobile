import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button,
} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import color from 'color';
import { MonoText } from '../components/StyledText';
import { Appearance } from 'react-native-appearance';
import Preventions from '../components/Preventions';
import * as Progress from 'react-native-progress';
import { darkTheme, lightTheme } from '../constants/Colors';

import { FontAwesome5 } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			loaded: true,
			error: null,
			recoverProgress: 0,
			dieProgress: 0,
			closedProgress: 0,
		};
	}

	componentDidMount() {
		// this.getData();
		//geolocation -> fetch
		const baseURL = 'https://covid19hunbackend.herokuapp.com/getcases';
		// const baseURL = 'http://localhost:8080/getcases'
		fetch(baseURL)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					data: json,
					isLoaded: true,
				});
				const allRecovered =
					this.state.data.recoveredbp + this.state.data.recoveredother;
				const allDied = this.state.data.diedbp + this.state.data.diedother;
				const closedCase = allDied + allRecovered;
				const total = this.state.data.total;

				let recoverProgress = ((allRecovered / total) * 100).toFixed(0) / 100;
				this.setState({ recoverProgress: recoverProgress });
				let dieProgress = ((allDied / total) * 100).toFixed(0) / 100;
				this.setState({ dieProgress: dieProgress });
				let closedProgress = ((closedCase / total) * 100).toFixed(0) / 100;
				this.setState({ closedProgress: closedProgress });
			});
	}

	render() {
		if (this.state.loaded) {
			const allRecovered =
				this.state.data.recoveredbp + this.state.data.recoveredother;
			const allDied = this.state.data.diedbp + this.state.data.diedother;
			const total = this.state.data.total;

			let recoverProgress = ((allRecovered / total) * 100).toFixed(0) / 100;
			let dieProgress = ((allDied / total) * 100).toFixed(0) / 100;

			return (
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.caseContainer}>
							<View style={styles.case}>
								{/* <FontAwesome5 name="briefcase-medical" size={24} color="black" /> */}

								<Text style={styles.caseTitle}>Összes eset</Text>
								<Text style={{ fontWeight: 'bold' }}>
									{this.state.data.total}
								</Text>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Felépült</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>
											{this.state.data.recoveredbp +
												this.state.data.recoveredother}
										</Text>
									</View>
								</View>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Elhunyt</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>
											{this.state.data.diedbp + this.state.data.diedother}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.caseContainer}>
							<View style={styles.case}>
								<FontAwesome5
									name='briefcase-medical'
									size={24}
									color='#f2a51a'
								/>
								<Text style={styles.caseTitle}>Aktív</Text>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Pest megyében</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>{this.state.data.activebp}</Text>
									</View>
								</View>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Vidéken</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>{this.state.data.activeother}</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.caseContainer}>
							<View style={styles.case}>
								<FontAwesome5 name='heartbeat' size={24} color='#8cba51' />

								<Text style={styles.caseTitle}>Felépült</Text>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Pest megyében</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>{this.state.data.recoveredbp}</Text>
									</View>
								</View>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Vidéken</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>{this.state.data.recoveredother}</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.caseContainer}>
							<View style={styles.case}>
								<FontAwesome5 name='skull' size={24} color='#d9455f' />
								<Text style={styles.caseTitle}>Elhunytak</Text>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Pest megyében</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>{this.state.data.diedbp}</Text>
									</View>
								</View>
								<View style={styles.caseRow}>
									<View style={styles.caseLabel}>
										<Text style={styles.caseSubtitle}>Vidéken</Text>
									</View>
									<View style={styles.caseValue}>
										<Text>{this.state.data.diedother}</Text>
									</View>
								</View>
							</View>
						</View>
						<Text style={styles.percentTitle}>Lezárt esetek:</Text>
						<View style={styles.percentContainer}>
							<View style={styles.slider}>
								<Progress.Bar
									progress={this.state.closedProgress}
									color={'#6c5b7b'}
									borderWidth={2}
									height={10}
									width={null}
								/>
							</View>
							<Text style={styles.percentValue}>
								{this.state.closedProgress * 100}%
							</Text>
						</View>
						<Text style={styles.percentTitle}>Eddig felépült:</Text>
						<View style={styles.percentContainer}>
							<View style={styles.slider}>
								<Progress.Bar
									progress={this.state.recoverProgress}
									color={'#8cba51'}
									borderWidth={2}
									height={10}
									width={null}
								/>
							</View>
							<Text style={styles.percentValue}>
								{this.state.recoverProgress * 100}%
							</Text>
						</View>
						<Text style={styles.percentTitle}>Eddig meghalt:</Text>
						<View style={styles.percentContainer}>
							<View style={styles.slider}>
								<Progress.Bar
									progress={this.state.dieProgress}
									color={'#d9455f'}
									borderWidth={2}
									height={10}
									width={null}
								/>
							</View>
							<Text style={styles.percentValue}>
								{this.state.dieProgress * 100}%
							</Text>
						</View>
						<Preventions />
					</ScrollView>
				</View>
			);
		} else {
			return (
				<View>{/* <Progress.Circle size={30} indeterminate={true} /> */}</View>
			);
		}

		HomeScreen.navigationOptions = {
			header: null,
		};
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
		// color: '#FF9800',
	},
	caseContainer: {
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		width: '70%',
		borderRadius: 10,
		color: theme.tintColor,
	},
	case: {
		padding: 10,
		borderRadius: 10,
		textAlign: 'center',
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#dddddd',
		flex: 1,
	},
	activeCase: {
		color: theme.activeColor,
	},
	recovered: {
		color: theme.recoveredColor,
	},
	dead: {
		color: theme.diedColor,
	},
	caseTitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	caseSubtitle: {
		fontSize: 15,
		fontWeight: '300',
	},
	caseLabel: {
		width: '50%',
		marginLeft: 20,
		// fontWeight: 'bold',
		color: theme.tintColor,
		textAlign: 'center',
	},
	caseValue: {
		textAlign: 'right',
		width: '30%',
		alignItems: 'flex-end',
		marginRight: 20,
		color: theme.tintColor,
		fontWeight: '200',
	},
	caseRow: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		margin: 5,
	},
	percentContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	percentTitle: {
		width: '100%',
		padding: 10,
		fontWeight: 'bold',
    fontSize: 15,
    color: theme.tintColor,
	},
	slider: {
		width: '80%',
		marginLeft: 10,
	},
	percentValue: {
		width: '10%',
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 15,
    height: 20,
    color: theme.tintColor,
	},
});
