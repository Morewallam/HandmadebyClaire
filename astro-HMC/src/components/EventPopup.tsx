import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/react';

interface EventProps {
  event: {
    title: string;
    start: Date | null;
    end: Date | null;
    extendedProps: {
      description?: PortableTextBlock[];
      address?: string;
      url?: string;
      image?: string;
    };
  } | null;
  onClose: () => void;
}

export default function EventPopup({ event, onClose }: EventProps) {
  if (!event) return null;

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const formatDate = (date: Date) =>
    date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const { description, address, url, image } = event.extendedProps;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md shadow-xl max-w-md w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {image && (
          <img src={image} alt={event.title} className="w-full h-48 object-cover" />
        )}

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none ml-4"
            >
              &times;
            </button>
          </div>

          {event.start && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              
              <div>
                <div>{formatDate(event.start)}</div>
                {event.end && (
                  <div>{formatTime(event.start)} – {formatTime(event.end)}</div>
                )}
              </div>
            </div>
          )}

          {address && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
             
              <span>{address}</span>
            </div>
          )}

          {url && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
             
              <a href={url}>{url}</a>
            </div>
          )}

          {description && description.length > 0 && (
            <div className="text-gray-700 text-sm leading-relaxed border-t pt-4 prose prose-sm max-w-none">
              <PortableText value={description} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}