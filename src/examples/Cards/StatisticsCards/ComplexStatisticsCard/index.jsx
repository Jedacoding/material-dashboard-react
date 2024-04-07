// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ComplexStatisticsCard({ color, title, count, footer, icon }) {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2} display="flex" alignItems="center" lineHeight={0}>
        {footer.icon && (
          <Icon
            sx={{
              color: ({ palette: { info } }) => info.main,
            }}
          >
            {footer.icon}
          </Icon>
        )}
        <MDTypography variant="button" fontWeight="regular" color="text">
          &nbsp;{footer.label}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

ComplexStatisticsCard.defaultProps = {
  color: "info",
};

export default ComplexStatisticsCard;
