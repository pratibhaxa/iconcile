import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Hotels from './hotels.json';
import styled from "styled-components";
import Navigation from "./Navigation";

const Tr = styled.tr`

`;

const Td = styled.td`

`;

function Home() {
  const [open, setOpen] = useState({});
  const [visitCount, setVisitCount] = useState(0);

  const handleClick = (hotel_id) => {
    setOpen((prevState) => ({ ...prevState, [hotel_id]: !prevState[hotel_id] }));
    // setVisitCount(visitCount++);
    visitsFunc();
  };

  const visitsFunc = () => {
    setVisitCount(prev=>prev++);
  }

  // const myFunction = (hotel_id) => {
  //   handleClick(hotel_id);
  //   visitsFunc();
  // }

  return (
    <div>
    <Navigation />
    <List>
      {
        Hotels.map((hotel) => {
          return (
            <>
              <ListItemButton onClick={() => handleClick(hotel.hotel_id)}>
              {/* <ListItemButton onClick={handleClick(hotel.hotel_id)}> */}
              {/* <ListItemButton onClick={handleClick()}> */}
                <table style={{width: "100%"}}>
                <Tr>
                  <Td>Hotel Name: {hotel.hotel_name}</Td>
                  <Td style={{textAlign: "right"}}>Rating: {hotel.star_rating}</Td>
                </Tr>
                <Tr>
                  <Td>City: {hotel.city}</Td>
                  <Td style={{textAlign: "right"}}>Price: {hotel.price}</Td>
                </Tr>
                </table>
                {/* <ListItemText primary={hotel.hotel_name} />
                <ListItemText primary={hotel.city} /> */}
                {open[hotel.hotel_id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open[hotel.hotel_id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton className="pl-4">
                    <table>
                      <Tr>
                        <Td>Overview: {hotel.overview}</Td>
                      </Tr>
                      <Tr>
                        <Td>No of visits: {visitCount}</Td>
                      </Tr>
                    </table>
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          );
        })
      }
    </List>
    </div>
  );
}

export default Home;