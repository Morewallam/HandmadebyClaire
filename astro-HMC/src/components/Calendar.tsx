import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import type { EventClickArg } from '@fullcalendar/core';
import EventPopup from './EventPopup';

interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  extendedProps: {
    description?: string;
    address?: string;
    stall?: string;
    image?: string;
  };
}

interface Props {
  events: CalendarEvent[];
}

export default function Calendar({ events }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg['event'] | null>(null);

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent(clickInfo.event);
  };

  return (
    
    <div className="p-4">
      <style>{`
      .fc .fc-toolbar-title { font-size: 0.95rem; }
      .fc .fc-button { padding: 0.15rem 0.5rem; font-size: 0.75rem; }
      .fc .fc-daygrid-day { min-height: 3rem; }
      .fc .fc-col-header-cell-cushion { font-size: 0.75rem; padding: 2px; }
      .fc .fc-daygrid-day-number { font-size: 0.75rem; padding: 2px 4px; }
    `}</style>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={false}
        selectable={false}
        eventClick={handleEventClick}
        eventColor='oklch(44.8% 0.119 151.328)'
        eventDisplay='block'
        height={500}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        eventContent={(eventInfo) => (
          <div className="text-[0.6rem]  md:text-xs  p-1 text-wrap cursor-pointer transition-transform duration-300 hover:scale-105">
            {eventInfo.event.title}
          </div>
        )}
      />
      <EventPopup
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}