import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { formatDate } from "@fullcalendar/core";
import {
  Checkbox,
  Container,
  List,
  ListItem,
  Paper,
  Stack,
} from "@mui/material";
import "./Celender.css";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
// DemoPaper

export default function Clender() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }
  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }
  function handleEvents(events) {
    setCurrentEvents(events);
  }
  function SidebarEvent({ event }) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  }
  return (
    <>
      <Stack direction="row" spacing={5} sx={{ padding: "50px" }}>
        <Box
          className="demo-app-sidebar"
          p={2}
          width={300}
          sx={{ backgroundColor: "#1e1e1e" }}
        >
          <Box>
            <Box className="demo-app-sidebar-section" mb={2}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Instructions
              </Typography>
              <List>
                <ListItem sx={{ color: "white" }}>
                  Select dates and you will be prompted to create a new event
                </ListItem>
                <ListItem sx={{ color: "white" }}>
                  Drag, drop, and resize events
                </ListItem>
                <ListItem sx={{ color: "white" }}>
                  Click an event to delete it
                </ListItem>
              </List>
            </Box>
            <Box className="demo-app-sidebar-section" mb={2}>
              <Typography>
                <Checkbox
                  checked={weekendsVisible}
                  onChange={handleWeekendsToggle}
                  sx={{ color: "white" }}
                />
                toggle weekends
              </Typography>
            </Box>
            <Box className="demo-app-sidebar-section">
              <Typography variant="h6" sx={{ color: "white" }}>
                All Events ({currentEvents.length})
              </Typography>
              <List sx={{ color: "white" }}>
                {currentEvents.map((event) => (
                  <SidebarEvent key={event.id} event={event} />
                ))}
              </List>
            </Box>
          </Box>
        </Box>

        <Box flexGrow={1}>
          <Container
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Paper>
              <FullCalendar
                sx={{ width: "100%" }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                // eventAdd={function(){}}
                // eventChange={function(){}}
                // eventRemove={function(){}}
                sx={{ height: "100%", flexGrow: 1 }}
              />
            </Paper>
          </Container>
        </Box>
      </Stack>
    </>
  );
}
