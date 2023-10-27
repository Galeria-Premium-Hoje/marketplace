import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import PrivateRoutes from './utils/PrivateRoutes'
import HomeScreen from './screens/HomeScreen'


function App() {
  return (
    <>
      <Router>
        {/* <AuthProvider> */}
          <Routes>
            {/* <Route element={<NoPageScreen/>} path="*"/> */}
            <Route element={<HomeScreen />} path="/" exact />
            {/* <Route element={<LoginScreen />} path="/login" />
            <Route element={<FeaturesScreen/>} path="/features" />
            <Route element={<PricingScreen/>} path="/pricing" />
            <Route element={<AboutUsScreen/>} path="/about-us"/>
            <Route element={<OurTeamScreen/>} path="/our-team" />
            <Route element={<CareersScreen/>} path="/careers" />
            <Route element={<ContactScreen/>} path="/contact" />
            <Route element={<SignupScreen/>} path="/signup" />
            <Route element={<LoginScreen/>} path="/login" />
            <Route element={<DownloadScreen/>} path="/download" />
            <Route element={<HireScreen/>} path="/hire" />
            <Route element={<DemoScreen/>} path="/demo"/>
            <Route element={<PrivateRoutes />}>
              <Route element={<LoggedHomeScreen />} path="/feed" />
            </Route> */}
          </Routes>
        {/* </AuthProvider> */}
      </Router>
    </>
  );
}

export default App
