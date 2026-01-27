import './App.css';
import { ColorOptions } from './components/ColorPicker/ColorOptions';
import { Container } from './components/Container/Container';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
	return (
    <StickerList stickers={ stickers} />
	)
}

const StickerList = ({stickers}) => {
  return <ul>
    {stickers.map((sticker) => {
      return <Sticker img={sticker.img} label={ sticker.label} />
    })}
  </ul>
}

const Sticker = ({img, lable}) => {
  return <li>
    <img src={img} alt="" />
    <p>{label}</p>
  </li>
}
