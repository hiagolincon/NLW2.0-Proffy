import React, {useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

export interface Props {
  toggleTheme(): void
}

const ToggleTheme: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Switch
    onChange={toggleTheme}
    checked={title === 'dark'}
    checkedIcon={false}
    uncheckedIcon={false}
    handleDiameter={30}
    offColor={colors.toggle}
    onColor={colors.toggle}
  />
  );
}

export default ToggleTheme;