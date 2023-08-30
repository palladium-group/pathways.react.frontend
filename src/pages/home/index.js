import React from "react";
import { Helmet } from "react-helmet-async";
import { CardMedia, Grid, Paper } from "@mui/material";
//import useMediaQuery from "@mui/material/useMediaQuery";
//import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

import FirstImg from "../../vendor/banner-image.png";
import TauTauImg from "../../vendor/tautau-logo.png";
import MAPTNCImg from "../../vendor/map-tnc-logo.png";
import GlobalMapImg from "../../vendor/global-map.png";
import PathwayImg from "../../vendor/pathway-logo.png";
import KiatImg from "../../vendor/kiat-logo.png";
import InovasiImg from "../../vendor/inovasi-logo.png";

// const Avatar = styled(MuiAvatar)`
//   display: inline-block;
//   height: 80px;
//   width: 80px;
// `;

/*
const EventContent = ({ value, handleChange }) => {
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ height: 500 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Events
              </Typography>
              <Divider />
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Upcoming" value="1" />
                      <Tab label="Past" value="2" />
                    </TabList>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Search" variant="standard" />
                  </Box>
                  <TabPanel value="1">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="NextGen IP Working Group (ICL + PSAs)"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <PlaceIcon />
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="Microsoft Teams"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="May 6, 2023"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="0900 EST"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel value="2">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="NextGen 3PL Workshop"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <PlaceIcon />
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="Microsoft Teams"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="Feb 6, 2023"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="1000 EST"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </TabPanel>
                </TabContext>
              </Box>

              {/!*Sample Event 1:*!/}
              {/!*Event name: NextGen IP Working Group (ICL + PSAs)*!/}
              {/!*Event location: Microsoft Teams*!/}
              {/!*(Optional) Event description: Quarterly Supply Meeting*!/}
              {/!*Date: Jan 27, 2023*!/}
              {/!*Time: 0900 EST*!/}

              {/!*Sample Event 2:*!/}
              {/!*Event name: Monthly MIS Systems Maintenance and Review Meeting*!/}
              {/!*Event location: NextGen ICL HQ Office*!/}
              {/!*(Optional) Event description: HQ + Country Office MIS Leads*!/}
              {/!*Date: Feb 6, 2023*!/}
              {/!*Time: 1100 EST*!/}

              {/!*Sample Event 3:*!/}
              {/!*Event name: Quarterly Progress Report Inputs*!/}
              {/!*Event location: N/A- Via Email*!/}
              {/!*(Optional) Event description: All Team Leaders to review and finalize QPR reviews*!/}
              {/!*Date: Mar 10, 2023*!/}
              {/!*Time: 1700 EST*!/}
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
};
const YammerContent = () => {
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ height: 500 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Yammer Feed
              </Typography>
              <Divider />
              <Typography component="p">
                <iframe
                  name="embed-feed"
                  title="Yammer"
                  src="https://web.yammer.com/embed/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMjU0NzQ4NjUxNTIifQ?header=false&footer=false&theme=light&includeFeedInformation=true"
                  style={{
                    border: "0px",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    minHeight: "400px",
                  }}></iframe>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
};

const QuickLinksContent = () => {
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ height: 500 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Quick Links
              </Typography>
              <Divider />
              <Stack direction="row" spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>
                <Chip
                  label="Timesheet"
                  component="a"
                  target="_blank"
                  href="https://thepalladiumgroup-cp.deltekenterprise.com/cpweb/"
                  clickable
                />
                <Chip
                  label="Expense Reports"
                  component="a"
                  target="_blank"
                  href="https://palladiumgroup.sharepoint.com/:x:/r/sites/GHSCTechnical/Shared%20Documents/General/GBL%20FN01%20SOP06%20TL04%20Travel%20Expense%20claim%20and%20travel%20advance%20form.v17.01.xlsx?d=w64c35d9dae31491da4dd377a88e62547&csf=1&web=1&e=Gad3Wr"
                  clickable
                />
                <Chip
                  label="Travel Reports"
                  component="a"
                  target="_blank"
                  href="https://palladiumgroup.sharepoint.com/:w:/r/sites/GHSCTechnical/Shared%20Documents/General/REV%2011162021%20Request%20for%20Business%20Travel%20Approval%20Form.docx?d=w183517974d4c4ac6beac66e44a71bc5f&csf=1&web=1&e=MKZKuc"
                  clickable
                />
              </Stack>
              <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
                <Chip
                  label="HR Portal"
                  component="a"
                  target="_blank"
                  href="https://hrcompass.thepalladiumgroup.com/"
                  clickable
                />
                <Chip
                  label="Learning Compass"
                  component="a"
                  target="_blank"
                  href="https://palladium.blackboard.com/"
                  clickable
                />
                {/!*<Chip label="Training" component="a" />*!/}
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
};
*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#F7F9FC" : "#F7F9FC",
  ...theme.typography.body2,
  padding: "5px",
  textAlign: "left",
  minHeight: "130px",
  color: theme.palette.text.secondary,
}));

/*
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#845EBC"),
  backgroundColor: "#845EBC",
  "&:hover": {
    backgroundColor: "#E19133",
    color: "#fff",
  },
}));
*/

const Home = () => {
  //const theme = useTheme();
  //const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  //const [value, setValue] = React.useState("1");
  /*  const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/

  return (
    <React.Fragment>
      <Helmet title="Home" />
      <Paper square={true} sx={{ width: "100%" }}>
        <CardMedia component="img" sx={{ height: "15vh", objectFit: "fill" }} image={FirstImg} />
      </Paper>
      <Grid container spacing={2} p={0}>
        <Grid item xs={12}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <CardMedia
              component="img"
              sx={{ paddingTop: "15px", height: "65vh", width: "60%", objectFit: "fill" }}
              image={GlobalMapImg}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              sx={{ backgroundColor: "#F7F9FC" }}>
              <Grid item xs={2}>
                <Card sx={{ boxShadow: "none", backgroundColor: "#F7F9FC" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ height: "5vh", objectFit: "fill" }}
                      image={PathwayImg}
                    />
                    <Typography sx={{ fontSize: 12 }}>some text</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem>
                -
              </Divider>
              <Grid item xs={2}>
                <Card sx={{ boxShadow: "none", backgroundColor: "#F7F9FC" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ height: "5h", objectFit: "fill" }}
                      image={KiatImg}
                    />
                    <Typography sx={{ fontSize: 12 }}>some text</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem>
                -
              </Divider>
              <Grid item xs={2}>
                <Card sx={{ boxShadow: "none", backgroundColor: "#F7F9FC" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ height: "5vh", objectFit: "fill" }}
                      image={InovasiImg}
                    />
                    <Typography sx={{ fontSize: 12 }}>some text</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem>
                -
              </Divider>

              <Grid item xs={2}>
                <Card sx={{ boxShadow: "none", backgroundColor: "#F7F9FC" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ height: "5vh", objectFit: "fill" }}
                      image={MAPTNCImg}
                    />

                    <Typography sx={{ fontSize: 12 }}>some text</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem>
                -
              </Divider>
              <Grid item xs={2}>
                <Card sx={{ boxShadow: "none", backgroundColor: "#F7F9FC" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ height: "5vh", objectFit: "fill" }}
                      image={TauTauImg}
                    />
                    <Typography sx={{ fontSize: 12 }}>some text</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        {/*        <Grid container direction="row" alignItems="stretch" spacing={2}>
          <Grid item xs={4}>
            <EventContent value={value} handleChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <YammerContent />
          </Grid>
          <Grid item xs={4}>
            <QuickLinksContent />
          </Grid>
        </Grid>*/}
      </Grid>
      {/*      <Grid container direction="row" alignItems="stretch" spacing={2}></Grid>
      <Grid container direction="row" alignItems="stretch" spacing={2} p={isLgUp ? 12 : 5}>
        <Grid item xs={8} sx={{ display: "flex" }}>
          <Box>
            <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
              <Card sx={{ display: "flex" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Our Impact
                  </Typography>
                  <Divider />
                  <Spacer mb={4} />
                  <ContentImpact />
                </CardContent>
              </Card>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Box>
            <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
              <Card sx={{ display: "flex" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Leadership Profiles
                  </Typography>
                  <Divider />
                  <Spacer mb={4} />
                  <ContentLeadership />
                </CardContent>
              </Card>
            </Paper>
          </Box>
        </Grid>
      </Grid>
   */}
    </React.Fragment>
  );
};
export default Home;
