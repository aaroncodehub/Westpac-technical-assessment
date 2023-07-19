import { ThemeProvider } from "@material-ui/core/styles";
import Navigation from "./components/navigation/Navigation";
import Title from "./components/title/Title";
import theme from "./components/theme/theme";
import ResetPasswordForm from "./components/form/Form";
import ResetPasswordText from "./constants/string";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Title title={ResetPasswordText.title} />
      <ResetPasswordForm />
    </ThemeProvider>
  );
}

export default App;
