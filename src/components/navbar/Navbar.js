import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
// import { darken } from "polished";
// import { Search as SearchIcon } from "react-feather";
// import { useTranslation } from "react-i18next";

import {
  Grid,
  // InputBase,
  AppBar as MuiAppBar,
} from "@mui/material";

// import NavbarNotificationsDropdown from "./NavbarNotificationsDropdown";
// import NavbarMessagesDropdown from "./NavbarMessagesDropdown";
// import NavbarLanguagesDropdown from "./NavbarLanguagesDropdown";
import NavbarUserDropdown from "./NavbarUserDropdown";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

// const Search = styled.div`
//   border-radius: 2px;
//   background-color: ${(props) => props.theme.header.background};
//   display: none;
//   position: relative;
//   width: 100%;

//   &:hover {
//     background-color: ${(props) => darken(0.05, props.theme.header.background)};
//   }

//   ${(props) => props.theme.breakpoints.up("md")} {
//     display: block;
//   }
// `;

// const SearchIconWrapper = styled.div`
//   width: 50px;
//   height: 100%;
//   position: absolute;
//   pointer-events: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     width: 22px;
//     height: 22px;
//   }
// `;

// const Input = styled(InputBase)`
//   color: inherit;
//   width: 100%;

//   > input {
//     color: ${(props) => props.theme.header.search.color};
//     padding-top: ${(props) => props.theme.spacing(2.5)};
//     padding-right: ${(props) => props.theme.spacing(2.5)};
//     padding-bottom: ${(props) => props.theme.spacing(2.5)};
//     padding-left: ${(props) => props.theme.spacing(12)};
//     width: 160px;
//   }
// `;

const Navbar = () => {
  // const { t } = useTranslation();
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0} sx={{ padding: "0px" }}>
        <Grid container alignItems="center" sx={{ padding: "0px", backgroundColor: "#F7F9FC" }}>
          <Grid item sx={{ display: { xs: "block", md: "none", padding: "0px" } }}>
            mewss sss
          </Grid>
          <Grid item>
            {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <Input placeholder={t("Search")} />
              </Search> */}
          </Grid>
          <Grid item xs />
          <Grid item>
            {/* <NavbarMessagesDropdown /> */}
            {/* <NavbarNotificationsDropdown /> */}
            {/* <NavbarLanguagesDropdown /> */}
            <NavbarUserDropdown />
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(Navbar);
