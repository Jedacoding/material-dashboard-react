import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import WhatsappIcon from "@mui/icons-material/Whatsapp";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Header from "layouts/profile/components/Header";
import axios from "axios";

function Overview() {
  const [student, setStudent] = useState({});

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const response = await axios.get("/api/students/1");
    setStudent(response.data);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1} p={1}>
            <Grid item xs={12} md={6} xl={4} style={{ display: "flex" }}>
              <ProfileInfoCard
                title="Informasi Siswa"
                description="Dibuat pada tanggal 20 Juni 2007, 20:09 AM"
                info={{
                  nama: "Muhammad Budi",
                  NIS: "4268796018",
                  umur: "20 Tahun",
                  kelas: "XI A",
                  hp: "+6281247026219",
                  TTL: "Makassar, 20/06/2007",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <WhatsappIcon />,
                    color: "whatsapp",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />

              <Divider orientation="vertical" sx={{ mx: 4 }} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
