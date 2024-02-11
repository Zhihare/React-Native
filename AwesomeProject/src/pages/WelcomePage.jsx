import { Link, LinkingContext } from "@react-navigation/native";
import React, { Component } from "react";
// import icons from '../img/icons.svg';
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg, SvgUri } from "react-native-svg";
import { en } from "../i18n/copies";



const Welcome = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
	};

	return (
		<View style={styles.container}>
			<View style={styles.leftSide}>
				<Text style={styles.titleLeft}>{en.textLeft.title}</Text>
				<Text style={styles.textH3Left}>{en.textLeft.text1}</Text>
				<Text style={styles.textP}>{en.textLeft.text2}</Text>
				<View style={styles.listLeft}>
					<View style={styles.itemLeft}>
						<Svg style={styles.svg} viewBox="0 0 32 32" fill="none">
							<Path
								fill="none"
								stroke="#407bff"
								strokeWidth={1.6}
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeMiterlimit={4}
								d="M9 4v3M23 4v3M4 25v-15c0-0.796 0.316-1.559 0.879-2.121s1.326-0.879 2.121-0.879h18c0.796 0 1.559 0.316 2.121 0.879s0.879 1.326 0.879 2.121v15M4 25c0 0.796 0.316 1.559 0.879 2.121s1.326 0.879 2.121 0.879h18c0.796 0 1.559-0.316 2.121-0.879s0.879-1.326 0.879-2.121M4 25v-10c0-0.796 0.316-1.559 0.879-2.121s1.326-0.879 2.121-0.879h18c0.796 0 1.559 0.316 2.121 0.879s0.879 1.326 0.879 2.121v10M16 17h0.011v0.011h-0.011v-0.011zM16 20h0.011v0.011h-0.011v-0.011zM16 23h0.011v0.011h-0.011v-0.011zM13 20h0.011v0.011h-0.011v-0.011zM13 23h0.011v0.011h-0.011v-0.011zM10 20h0.011v0.011h-0.011v-0.011zM10 23h0.011v0.011h-0.011v-0.011zM19 17h0.011v0.011h-0.011v-0.011zM19 20h0.011v0.011h-0.011v-0.011zM19 23h0.011v0.011h-0.011v-0.011zM22 17h0.011v0.011h-0.011v-0.011zM22 20h0.011v0.011h-0.011v-0.011z"
							/>
						</Svg>
						{/* <SvgUri style={styles.svg} source={{ uri: '../img.icons.svg#icon-chart-bar', }} /> */}
						<Text>{en.textLeft.text3}</Text>
					</View>
					<View style={styles.itemLeft}>
						<Svg style={styles.svg} viewBox="0 0 32 32" fill="none">
							<Path
								fill="none"
								stroke="#407bff"
								strokeWidth={1.6}
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeMiterlimit={4}
								d="M5 4v15c0 0.796 0.316 1.559 0.879 2.121s1.326 0.879 2.121 0.879h3M5 4h-2M5 4h22M11 22h10M11 22l-1.333 4M27 4h2M27 4v15c0 0.796-0.316 1.559-0.879 2.121s-1.326 0.879-2.121 0.879h-3M21 22l1.333 4M9.667 26h12.667M9.667 26l-0.667 2M22.333 26l0.667 2M12 15v2M16 12v5M20 9v8"
							/>
						</Svg>
						<Text>{en.textLeft.text4}</Text>
					</View>
					<View style={styles.itemLeft}>
						<Svg style={styles.svg} viewBox="0 0 32 32" fill="none">
							<Path
								fill="none"
								stroke="#407bff"
								strokeWidth={1.6}
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeMiterlimit={4}
								d="M15.227 20.227l7.773 7.773c0.667 0.645 1.56 1.003 2.488 0.995s1.816-0.379 2.472-1.036c0.656-0.656 1.028-1.544 1.036-2.472s-0.35-1.821-0.995-2.488l-7.836-7.836M15.227 20.227l3.328-4.040c0.423-0.512 0.987-0.835 1.611-1.021 0.733-0.219 1.551-0.251 2.324-0.187 1.042 0.090 2.090-0.095 3.039-0.536s1.766-1.121 2.371-1.975 0.975-1.851 1.076-2.893c0.1-1.041-0.074-2.091-0.504-3.045l-4.368 4.369c-0.731-0.169-1.399-0.54-1.93-1.070s-0.901-1.199-1.070-1.93l4.368-4.368c-0.954-0.431-2.003-0.605-3.044-0.504s-2.039 0.471-2.893 1.076-1.535 1.422-1.975 2.371c-0.44 0.949-0.625 1.997-0.536 3.039 0.121 1.435-0.095 3.019-1.205 3.933l-0.136 0.113M15.227 20.227l-6.207 7.537c-0.301 0.367-0.675 0.666-1.099 0.88s-0.887 0.336-1.361 0.359c-0.474 0.023-0.947-0.053-1.39-0.224s-0.844-0.432-1.18-0.767-0.597-0.737-0.767-1.18c-0.171-0.442-0.247-0.916-0.223-1.39s0.146-0.937 0.359-1.361c0.213-0.424 0.513-0.798 0.88-1.099l9.116-7.507-5.476-5.476h-1.879l-3-5 2-2 5 3v1.879l5.68 5.68-2.327 1.916M24.5 24.5l-3.5-3.5M6.489 25.5h0.011v0.011h-0.011v-0.011z"
							/>
						</Svg>
						<Text>{en.textLeft.text5}</Text>
					</View>
				</View>
				<TouchableOpacity >
					<Link style={styles.btn} to={{ screen: 'Home' }}>
						<Text >{en.buttons.welcomepage}</Text>
					</Link>
				</TouchableOpacity>
			</View>
			<View style={styles.rightSide}>
				<Text style={styles.titleRight}>{en.textRight.listTitle}</Text>
				<View style={styles.listRight}>
					<View style={styles.itemRight}>
						<Text>{en.textRight.listItem1}</Text>
					</View>
					<View style={styles.itemRight}>
						<Text>{en.textRight.listItem2}</Text>
					</View>
					<View style={styles.itemRight}>
						<Text>{en.textRight.listItem3}</Text>
					</View>
					<View style={styles.itemRight}>
						<Text>{en.textRight.listItem4}</Text>
					</View>
					<View style={styles.itemRight}>
						<Text>{en.textRight.listItem5}</Text>
					</View>
					<View style={styles.itemRight}>
						<Text>{en.textRight.listItem6}</Text>
					</View>
					<View style={styles.itemRight}>
						<Text>{en.textRight.listItem7}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20,
	},
	leftSide: {
		margin: 'auto',
		width: 280,
		marginBottom: 40,
	},
	titleLeft: {
		marginBottom: 16,
		fontWeight: '700',
		fontSize: 28,
		lineHeight: 34,
	},
	textH3Left: {
		marginBottom: 24,
		fontWeight: '400',
		fontSize: 24,
		lineHeight: 30,
	},
	textP: {
		marginBottom: 12,
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 20,
	},
	listLeft: {
		flexDirection: 'column',
		gap: 16,
		marginBottom: 24,
	},
	itemLeft: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
		fontWeight: '400',
		fontSize: 16,
		lineHeight: 20,
		width: 224,
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 200,
		height: 36,
		paddingVertical: 8,
		paddingHorizontal: 30,
		fontSize: 16,
		fontWeight: '500',
		lineHeight: 20,
		color: '#ffffff',
		backgroundColor: '#3498db',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	rightSide: {
		display: 'block',
		paddingVertical: 24,
		paddingHorizontal: 16,

		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: '#ecf2ff',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	titleRight: {
		marginBottom: 12,
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 20,
	},
	listRight: {
		flexDirection: 'column',
		gap: 16,
	},
	itemRight: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
		paddingLeft: 16,
		fontWeight: '400',
		fontSize: 16,
		lineHeight: 20,
		position: 'relative',
	},
	homeWrapper: {
		padding: 24,
		paddingTop: 24,
		paddingBottom: 40,
		backgroundImage: 'url("path_to_your_image")',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	home: {
		padding: 32,
		paddingTop: 40,
		paddingBottom: 50,
		backgroundPosition: 'bottom',
		backgroundSize: 'cover',
		backgroundImage: 'url("path_to_your_image")',
	},
	svg: {
		width: 40,
		height: 40,
	},
});


export default Welcome;