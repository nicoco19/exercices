import { ProviderWrapper as CounterProviderWrapper } from "../contexts/OpinionContext.jsx"
import App from "./App";

const AppLoader= () => {
  return (
      <CounterProviderWrapper>
        <App />
      </CounterProviderWrapper>
  );
}

export default AppLoader;
