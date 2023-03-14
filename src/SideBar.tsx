import { useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  Avatar,
  Button,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
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
import TableBody from "@mui/material/TableBody";

type participantType = { img: string; name: string; status: boolean };
type studentType = { img: string; name: string };
const studentsList = [
  { img: Alona, name: "Alona Sa'ar" },
  { img: Rosalía, name: "Rosalía" },
  { img: Shaul, name: "Shaul" },
];

const infoList = [
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

export default function SideBar() {
  const [selectedParticipant, setSelectedParticipant] = useState("");
  const [participantsList, setParticipantsList] = useState<participantType[]>(
    []
  );
  /**
   * update participants with the selected client
   * @param event
   */
  const handleSelectedClient = (event: SelectChangeEvent) => {
    const student: studentType = studentsList[parseInt(event.target.value)];
    setParticipantsList((prev) => [
      ...prev,
      { img: student.img, name: student.name, status: false },
    ]);
  };
  /**
   * update participant states
   * @param index
   */
  const handleCheckIn = (index: number) => {
    setParticipantsList((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], status: !prev[index].status },
      ...prev.slice(index + 1),
    ]);
  };
  /**
   * delete participant
   * @param index
   */
  const handleDelete = (index: number) => {
    setParticipantsList((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };
  return (
    <>
      {/* function buttons */}
      <Box>
        <Button
          startIcon={<EditOutlinedIcon />}
          sx={{
            textTransform: "none",
            color: "black",
            width: "8vw",
            marginRight: "0.5vw",
          }}
        >
          Edit
        </Button>
        <Button
          startIcon={<EventBusyOutlinedIcon />}
          sx={{
            textTransform: "none",
            color: "red",
            width: "13vw",
          }}
        >
          Cancel Class
        </Button>
      </Box>
      {/* header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: "1vw",
        }}
      >
        <FitnessCenterIcon
          sx={{
            backgroundColor: "pink",
            borderRadius: 100,
            m: "1vw",
            p: "1vw",
            width: "4vw",
            height: "4vw",
          }}
        />
        <Typography sx={{ fontWeight: "bold" }}>Workout of the day</Typography>
      </Box>
      <Divider />
      {/* information */}
      <List sx={{ display: "flex", m: "2vw" }}>
        {infoList.map((e, index) => (
          <ListItem
            key={index}
            sx={{
              flexDirection: "column",
              p: 0,
            }}
          >
            {e.icon}
            <Typography sx={{ fontSize: 15, marginTop: 1, fontWeight: "bold" }}>
              {e.text}
            </Typography>
            <Typography sx={{ fontSize: 12.5, color: "grey" }}>
              {e.subtext}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* special information */}
      <Box sx={{ p: "1vw" }}>
        <Typography gutterBottom sx={{ fontWeight: "bold" }}>
          You Should Know...
        </Typography>
        <Typography sx={{ fontSize: 12.5 }}>
          Dagan & Eden which participates in the class have a debt
        </Typography>
      </Box>
      <Divider />
      {/* participants */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: "1vw",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Participants</Typography>
        <FormControl variant="filled" fullWidth sx={{ marginLeft: "3vw" }}>
          <InputLabel id="select-label">Add client</InputLabel>
          <Select
            labelId="select-label"
            value={selectedParticipant}
            IconComponent={AddIcon}
            onChange={handleSelectedClient}
          >
            {studentsList.map((e, index) => (
              <MenuItem
                value={index}
                key={index}
                sx={[
                  { "&:hover": { backgroundColor: "lightgreen" } },
                  { height: 35 },
                ]}
              >
                <Avatar
                  alt={e.name}
                  src={e.img}
                  sx={{ marginRight: 2, height: 20, width: 20 }}
                />
                {e.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginX: "1vw" }}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
              p: 0,
            },
          }}
        >
          <TableBody>
            {participantsList.map((e, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar
                    sx={{ height: "2.5vw", width: "2.5vw" }}
                    alt={e.name}
                    src={e.img}
                  />
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>{e.name}</TableCell>
                <TableCell align="center">
                  {e.status ? (
                    <Button
                      value={index}
                      onClick={() => handleCheckIn(index)}
                      variant="outlined"
                      sx={{
                        p: "0.3vw",
                        borderRadius: 0,
                        textTransform: "none",
                      }}
                    >
                      Checked
                    </Button>
                  ) : (
                    <Button
                      value={index}
                      onClick={() => handleCheckIn(index)}
                      variant="contained"
                      sx={{
                        p: "0.3vw",
                        color: "white",
                        borderRadius: 0,
                        textTransform: "none",
                      }}
                    >
                      Check in
                    </Button>
                  )}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <WhatsAppIcon sx={{ color: "green" }} />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
}
