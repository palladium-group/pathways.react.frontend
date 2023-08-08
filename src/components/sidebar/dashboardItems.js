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
            title: "Finance",
            href: "/pathways/finance",
            backgroundcolor: "#636084",
          },
          {
            title: "Monitoring & Evaluation",
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
            title: "Finance",
            href: "/kiat/finance",
            backgroundcolor: "#E36E65",
          },
          {
            title: "Monitoring & Evaluation",
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
            title: "Finance",
            href: "/inovasi/finance",
            backgroundcolor: "#4F5595",
          },
          {
            title: "Monitoring & Evaluation",
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
            title: "Finance",
            href: "/nauru/finance",
          },
          {
            title: "Monitoring & Evaluation",
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
            title: "Finance",
            href: "/map-tnc/finance",
          },
          {
            title: "Monitoring & Evaluation",
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
            title: "Finance",
            href: "/tautua/finance",
          },
          {
            title: "Monitoring & Evaluation",
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
