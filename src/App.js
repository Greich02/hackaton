import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Intro from "./pages/Intro";
import Quiz from "./pages/Quiz";
import { ThemeProvider, Container } from "@mui/material";
import theme from "./styles";
import ChatList from "./pages/ChatList";
import Message from "./pages/Message";
import AddAgent from "./pages/AddAgent";
import PerformanceReport from "./pages/PerformanceReport";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element = {<Login/>} />
            <Route path="/signup" element = {<Signup/>} />
            <Route path="/intro" element = {<Intro/>} />
            <Route path="/quiz" element = {<Quiz/>} />
            <Route path="/chatlist" element = {<ChatList/>} />
            <Route path="/message" element = {<Message/>} />
            <Route path="/addnew" element = {<AddAgent/>} />
            <Route path="/report" element = {<PerformanceReport/>} />
            <Route path="/settings" element = {<SettingsPage/>} />
          </Routes>
        </Router>
      </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
