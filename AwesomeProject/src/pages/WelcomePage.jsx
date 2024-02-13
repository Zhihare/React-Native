import { Link, LinkingContext } from "@react-navigation/native";
import React, { Component } from "react";
import imgMobile from '../img/bg_main_mobile.svg';
import {
	Btn,
	Home,
	HomeWrapper,
	ItemLeft,
	ItemRight,
	LeftSide,
	ListLeft,
	ListRight,
	RightSide,
	TextH3Left,
	Svgs,
	TextP,
	TitleLeft,
	TitleRight,
} from './WelcomePage.styled';
import { View, Text, StyleSheet, FlatList, StatusBar, ScrollView, Dimensions, ImageBackground } from "react-native";
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
		<ScrollView contentContainerStyle={{ flexGrow: 1, }}>
			<HomeWrapper>
				<View>
					<SvgUri
						width="100%"
						height="100%"
						source={require('../img/bg_main_mobile.svg')}
					/>
				</View>
				<Svg
					height={90}
					width={Dimensions.get('screen').width}
					viewBox="0 0 1440 320"
				>
					<Path
						fill="#2471A3"
						d='M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
					/>
				</Svg>
				<Home>
					<LeftSide>
						<TitleLeft>{en.textLeft.title}</TitleLeft>
						<TextH3Left>{en.textLeft.text1}</TextH3Left>
						<TextP>{en.textLeft.text2}</TextP>
						<ListLeft>
							<ItemLeft>
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
								<Text>{en.textLeft.text3}</Text>
							</ItemLeft>
							<ItemLeft>
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
							</ItemLeft>
							<ItemLeft>
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
							</ItemLeft>
						</ListLeft>
						<TouchableOpacity >
							<Link style={styles.btn} to={{ screen: 'Home' }}>
								<Text >{en.buttons.welcomepage}</Text>
							</Link>
						</TouchableOpacity>
					</LeftSide>
					<RightSide>
						<TitleRight>{en.textRight.listTitle}</TitleRight>
						<ListRight >
							<ItemRight>
								<Text>{en.textRight.listItem1}</Text>
							</ItemRight>
							<ItemRight>
								<Text>{en.textRight.listItem2}</Text>
							</ItemRight>
							<ItemRight>
								<Text>{en.textRight.listItem3}</Text>
							</ItemRight>
							<ItemRight>
								<Text>{en.textRight.listItem4}</Text>
							</ItemRight>
							<ItemRight >
								<Text>{en.textRight.listItem5}</Text>
							</ItemRight>
							<ItemRight>
								<Text>{en.textRight.listItem6}</Text>
							</ItemRight>
							<ItemRight style={styles.itemRight}>
								<Text>{en.textRight.listItem7}</Text>
							</ItemRight>
						</ListRight>
					</RightSide>
				</Home>
			</HomeWrapper>
		</ScrollView>
	);
};



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20,
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

	svg: {
		width: 40,
		height: 40,
	},
});


export default Welcome;