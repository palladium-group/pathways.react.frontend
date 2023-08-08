import React from "react";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);

import SuccessData from "../../vendor/success-data.png";
import SuccessCovid from "../../vendor/success-covid.png";

const ContentImpact = () => {
  return (
    <React.Fragment>
      <Box sx={{ p: 2 }} border={1} borderColor="lightgrey">
        <Card sx={{ display: "flex" }}>
          <CardMedia component="img" sx={{ width: 300 }} image={SuccessData} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Global Fund
              </Typography>
              <Typography variant="body2" component="div">
                Across 22 countries and with data from 800 health facilities, we support The Global
                Fund to embed a culture of performance management in each country’s health supply
                chains. We routinely track indicators for on-shelf availability, on-time-in-full
                delivery, commodities stocked according to plan, and timeliness of facility’s
                reporting to the LMIS. Our analyses support health programs and the ability of
                supply chain actors to monitor needs, identify risks, and track trends in individual
                country logistics operations to help inform systems strengthening priorities. By
                supporting national program managers in monitoring the availability of essential
                health commodities and services at different points in the system, we have created
                an in-depth understanding of whether and how health facilities have adapted to the
                challenges of COVID-19.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
      <Box sx={{ p: 2 }} border={1} borderColor="lightgrey">
        <Card sx={{ display: "flex" }}>
          <CardMedia component="img" sx={{ width: 300 }} image={SuccessCovid} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                DHSC Framework
              </Typography>
              <Typography variant="body2" component="div">
                Our platform is one of a select few service providers supporting the UK Government’s
                short and long-term distribution of medical devices, consumables, reagents, and
                equipment across the country. The platform manages the storage of goods, provides a
                secure and user-friendly ordering system, and a means to collect payments in a UK
                primary care setting. Additionally, with ISO9000 certification for warehousing and
                1so9001 for provision of customer-focused activities, the team can distribute
                medical devices and more to NHS centres, hospitals, and GP surgeries. We provide an
                adaptive and scalable approach to resource management and a solution that can flex
                in real time in response to the volume and pace of demand for goods.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </React.Fragment>
  );
};
export default ContentImpact;
