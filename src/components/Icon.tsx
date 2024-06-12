import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import fontData from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(
	fontSelection,
	"IcoMoon",
	"icomoon.ttf",
);

interface IconProps {
	name: 'pencil' | 'plus' | 'check' | 'trash';
	size: number;
	color: string;
}

const Icon = ({ name, size, color }: IconProps) => {
	const [fontLoaded] = useFonts({
		IcoMoon: fontData,
	});
	if (!fontLoaded) {
		return null;
	}
	return <CustomIcon name={name} size={size} color={color} />;
};

export default Icon;
