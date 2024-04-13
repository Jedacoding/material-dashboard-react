import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DailyAttendanceSection from "./sections/DailyAttendance";
import { dataMaster, dataReport, dataCharts } from "./data";

function Dashboard() {
  const [masterData, setMasterData] = useState(dataMaster());
  const [dailyReport, setDailyReport] = useState(dataReport());
  const [charts, setCharts] = useState(dataCharts());

  useEffect(() => {
    callApi("http://localhost:8000/api");
  }, []);

  const callApi = async (endpoint) => {
    try {
      const { data } = await axios.get(endpoint + "/dashboard");

      setMasterData(dataMaster(data.count));
      setDailyReport(dataReport(data.dailyReport));
      setCharts(dataCharts(data.chart));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {masterData.map((card, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard {...card} />
              </MDBox>
            </Grid>
          ))}
        </Grid>

        <MDBox mt={4.5}>
          <DailyAttendanceSection cards={dailyReport} />
        </MDBox>

        <MDBox mt={6.5}>
          <Grid container spacing={3}>
            {charts.map((chart, index) => (
              <Grid item xs={12} md={6} lg={6} key={index}>
                <MDBox mb={3}>
                  <ReportsLineChart {...chart} />
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
