import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./src/components/Button";
import ImageViewer from "./src/components/ImageViewer";

const img = require("./assets/fisrt-page-image.jpg");

export default function App() {
	return (
		<View style={styles.container}>
			<ImageViewer placeholderImageSource={img}></ImageViewer>
			<Button label="Press me DADDY" theme="primary"></Button>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 12,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "white",
	},
	button: {
		color: "white",
		backgroundColor: "#4591ff",
		borderRadius: 12,
		padding: 9,
		flexDirection: "row",
	},
	buttonIcon: {
		color: "white",
		paddingRight: 6,
	},
});
