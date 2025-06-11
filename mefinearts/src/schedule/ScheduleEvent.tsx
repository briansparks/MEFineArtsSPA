import { FC } from "react";
import "./ScheduleEvent.css";

type ScheduleEventProps = {
  name: string;
  location: string;
  dateStr: string;
};

const ScheduleEvent: FC<ScheduleEventProps> = ({ name, location, dateStr }) => {
  return (
    <div id="ScheduleEventContainer">
      <span className="name">{name}</span>
      <span className="EventLocation">{location}</span>
      <span className="EventDate">{dateStr}</span>
    </div>
  );
};

export default ScheduleEvent;
