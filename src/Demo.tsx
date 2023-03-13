import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useMemo, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SportsIcon from "@mui/icons-material/Sports";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import Alona from "./assets/Alona.jfif";
import Rosalía from "./assets/Rosalía.jfif";
import Shaul from "./assets/Shaul.jfif";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  ListItemAvatar,
  MenuItem,
  Select,
  Table,
  TableCell,
  tableCellClasses,
  TableRow,
  ToggleButton,
  Typography,
} from "@mui/material";

const students = [
  { img: Alona, name: "Alona Sa'ar" },
  { img: Rosalía, name: "Rosalía" },
  { img: Shaul, name: "Shaul" },
];

const info = [
  { icon: <SportsIcon />, text: "Tom A", subtext: "Coach" },
  {
    icon: <ScheduleOutlinedIcon />,
    text: "16:15",
    subtext: "Start Time",
  },
  {
    icon: <HowToRegOutlinedIcon />,
    text: "3/15",
    subtext: "Participants",
  },
];
export default function ResponsiveDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [participants, setParticipants] = useState<
    { img: string; name: string; status: boolean }[]
  >([]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const drawer = (
    <>
      <Box>
        <Button
          startIcon={<EditOutlinedIcon />}
          sx={{
            textTransform: "none",
            color: "black",
            marginX: 2,
          }}
        >
          Edit
        </Button>
        <Button
          startIcon={<EventBusyOutlinedIcon />}
          sx={{
            textTransform: "none",
            color: "red",
            marginX: 2,
          }}
        >
          Cancel Class
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FitnessCenterIcon
          sx={{
            backgroundColor: "pink",
            borderRadius: 100,
            p: 1,
            m: 1,
            width: 56,
            height: 56,
          }}
        />
        <Typography gutterBottom sx={{ fontWeight: "bold" }}>
          Workout of the day
        </Typography>
      </Box>
      <Divider />
      <List sx={{ display: "flex" }}>
        {info.map((e, index) => (
          <ListItem
            key={index}
            sx={{
              flexDirection: "column",
              p: 0,
            }}
          >
            {e.icon}
            <ListItemText primary={e.text} />
            <ListItemText secondary={e.subtext} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ m: 3 }}>
        <Typography gutterBottom sx={{ fontWeight: "bold" }}>
          You Should Know...
        </Typography>
        <Typography>
          Dagan & Eden which participates in the class have a debt
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 2,
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Participants </Typography>
        <Select
          IconComponent={AddIcon}
          // onChange={handleChange}
        >
          {students.map((e, index) => (
            <MenuItem
              value={e.name}
              key={index}
              sx={{ "&:hover": { backgroundColor: "lightgreen" } }}
            >
              <Avatar alt={e.name} src={e.img} />
              {e.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ marginX: 2 }}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
              p: 0.5,
            },
          }}
        >
          {students.map((e, index) => (
            <TableRow key={index}>
              <TableCell>
                <Avatar alt={e.name} src={e.img} />
              </TableCell>
              <TableCell component="th" scope="row">
                {e.name}
              </TableCell>
              <TableCell align="center">
                {true ? (
                  <Button
                    variant="contained"
                    sx={[
                      {
                        backgroundColor: "green",
                        borderRadius: 0,
                        textTransform: "none",
                      },
                      { "&:hover": { backgroundColor: "green", opacity: 0.5 } },
                    ]}
                  >
                    Check in
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    sx={{
                      color: "green",
                      borderRadius: 0,
                      textTransform: "none",
                      borderColor: "green",
                    }}
                  >
                    Checked
                  </Button>
                )}
              </TableCell>
              <TableCell align="right">
                <>
                  <IconButton>
                    <WhatsAppIcon sx={{ color: "green" }} />
                  </IconButton>
                  <IconButton>
                    <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
                  </IconButton>
                </>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Box>
    </>
  );

  //   const container =
  // window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          anchor="right"
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <div className="App" onClick={handleDrawerToggle}></div>
      </Box>
    </Box>
  );
}
