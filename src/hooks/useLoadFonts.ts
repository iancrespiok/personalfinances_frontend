import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

interface FontConfig{
    [fontName:string]: string | Font.FontSource;
}
    /**
     * 
     * @returns FONTS
     * @param - No necesita params
     * 
     */
const useLoadFonts = (): boolean =>{
    const [fontLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf') as FontConfig,
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf') as FontConfig
    });

    return fontLoaded;
}

export default useLoadFonts;