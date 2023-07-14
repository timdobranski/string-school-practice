import { Font } from 'expo';

export default async function loadFonts() {
  await Font.loadAsync({
    'economica': require('../../../assets/fonts/Economica/Economica-Regular.ttf'),
    'economica-bold': require('../../../assets/fonts/Economica/Economica-Bold.ttf'),
  });
}