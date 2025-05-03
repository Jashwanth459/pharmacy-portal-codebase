import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UploadPage } from "./pages/UploadPage";
import { GeneratePage } from "./pages/GeneratePage";
import { ReportPage } from "./pages/ReportPage";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function App() {
  const handleSignOut = () => {
    console.log("User signed out");
    // Implement your sign-out logic here
  };

  return (
    <Router>
      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: '#e4002b' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pharmacy Application
          </Typography>
          <Button color="inherit" onClick={handleSignOut} style={{fontWeight: 'bold'}}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>

      {/* Navigation */}
      <nav style={{ padding: 16 }}>
        <Link to="/" style={{ marginRight: 12 }}>Generate</Link>
        <Link to="/report" style={{ marginRight: 12 }}>Report</Link>
        <Link to="/upload" style={{ marginRight: 12 }}>Upload</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<GeneratePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
