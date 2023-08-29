import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import LocalConvenienceStoreOutlinedIcon from "@mui/icons-material/LocalConvenienceStoreOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";

const navItems = [
  {
    title: "home",
    pages: [
      {
        title: "Home",
        href: "/",
        icon: HomeOutlinedIcon,
        backgroundcolor: "#000000",
      },
    ],
  },
  {
    title: "pathways",
    pages: [
      {
        title: "Pathways",
        href: "/pathways",
        icon: SchoolOutlinedIcon,
        backgroundcolor: "#504F6C",
        children: [
          {
            title: "Management",
            href: "/pathways/finance",
            backgroundcolor: "#636084",
          },
          {
            title: "Results",
            href: "/pathways/monitoring-evaluation",
            backgroundcolor: "#636084",
          },
        ],
      },
    ],
  },
  {
    title: "kiat",
    pages: [
      {
        title: "KIAT",
        href: "/kiat",
        icon: TipsAndUpdatesOutlinedIcon,
        backgroundcolor: "#D44737",
        children: [
          {
            title: "Management",
            href: "/kiat/finance",
            backgroundcolor: "#E36E65",
          },
          {
            title: "Results",
            href: "/kiat/monitoring-evaluation",
            backgroundcolor: "#E36E65",
          },
        ],
      },
    ],
  },
  {
    title: "inovasi",
    pages: [
      {
        title: "Inovasi",
        href: "/inovasi",
        icon: LocalConvenienceStoreOutlinedIcon,
        backgroundcolor: "#3B4596",
        children: [
          {
            title: "Management",
            href: "/inovasi/finance",
            backgroundcolor: "#4F5595",
          },
          {
            title: "Results",
            href: "/pathways/monitoring-evaluation",
            backgroundcolor: "#4F5595",
          },
        ],
      },
    ],
  },
  {
    title: "nauru",
    pages: [
      {
        title: "Nauru",
        href: "/nauru",
        children: [
          {
            title: "Management",
            href: "/nauru/finance",
          },
          {
            title: "Results",
            href: "/nauru/monitoring-evaluation",
          },
        ],
      },
    ],
  },
  {
    title: "map tnc",
    pages: [
      {
        title: "MAP-TNC",
        href: "/map-tnc",
        children: [
          {
            title: "Management",
            href: "/map-tnc/finance",
          },
          {
            title: "Results",
            href: "/map-tnc/monitoring-evaluation",
          },
        ],
      },
    ],
  },
  {
    title: "tautua",
    pages: [
      {
        title: "Tautua",
        href: "/tautua",
        children: [
          {
            title: "Management",
            href: "/tautua/finance",
          },
          {
            title: "Results",
            href: "/tautua/monitoring-evaluation",
          },
        ],
      },
    ],
  },
  {
    title: "Administration",
    pages: [
      {
        title: "Administration",
        href: "/admin",
        icon: SupervisorAccountOutlinedIcon,
        children: [
          {
            title: "Users",
            href: "/admin/users",
          },
        ],
      },
    ],
  },
];

export default navItems;
