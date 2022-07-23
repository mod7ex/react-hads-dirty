import { Component } from "react";
import ThemeProvider, { useTheme, useUpdate, ThemeContext } from "../../hooks/theme-context";

const themeStyles = (dark: boolean) => {
  return {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
};

// ******************************************* Context in classes

class ClassContextComponent extends Component {
  themeStyles(dark: boolean) {
    return themeStyles(dark);
  }

  render() {
    return <ThemeContext.Consumer>{(darKTheme) => <div style={this.themeStyles(darKTheme as boolean)}>Class Theme</div>}</ThemeContext.Consumer>;
  }
}

// ******************************************* Context in funcion component

function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useUpdate();

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles(darkTheme)}>Function Theme</div>
    </>
  );
}

/* ********************************************************************************* */

const Comp = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeProvider>
    </>
  );
};

export default Comp;
