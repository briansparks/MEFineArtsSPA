import { FC } from "react";
import "./Schedule.css";
import ScheduleEvent from "./ScheduleEvent";

const Schedule: FC = () => {
  const events = [
    {
      name: "Arts on Arlington",
      location: "Columbus, OH",
      dateStr: "6/12/2025",
    },
    {
      name: "Beacon Hill Arts Festival",
      location: "Boston, MA",
      dateStr: "5/10/2019",
    },
    {
      name: "Beacon Hill Arts Festival",
      location: "Boston, MA",
      dateStr: "5/10/2018",
    },
    {
      name: "Nasty Women Art Show",
      location: "Boston, MA",
      dateStr: "9/08/2017",
    },
    {
      name: "Beacon Hill Arts Festival",
      location: "Boston, MA",
      dateStr: "5/10/2017",
    },
  ];

  return (
    <div className="ScheduleContainer">
      <h1>Events and Shows</h1>
      <ul className="EventList">
        {events.map((event, index) => (
          <li className="EventItem" key={index}>
            <ScheduleEvent
              name={event.name}
              location={event.location}
              dateStr={event.dateStr}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
