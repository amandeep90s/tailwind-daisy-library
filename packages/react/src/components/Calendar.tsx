import clsx from "clsx";
import React, { forwardRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Selected date */
  value?: Date;
  /** Callback when date is selected */
  onChange?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
}

// ============================================================================
// HELPERS
// ============================================================================

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Calendar component for date selection
 *
 * @example
 * ```tsx
 * <Calendar value={selectedDate} onChange={setSelectedDate} />
 * ```
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ value, onChange, minDate, maxDate, className, ...props }, ref) => {
    const [currentDate, setCurrentDate] = useState(value || new Date());
    const [viewMonth, setViewMonth] = useState(currentDate.getMonth());
    const [viewYear, setViewYear] = useState(currentDate.getFullYear());

    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

    const handlePrevMonth = () => {
      if (viewMonth === 0) {
        setViewMonth(11);
        setViewYear(viewYear - 1);
      } else {
        setViewMonth(viewMonth - 1);
      }
    };

    const handleNextMonth = () => {
      if (viewMonth === 11) {
        setViewMonth(0);
        setViewYear(viewYear + 1);
      } else {
        setViewMonth(viewMonth + 1);
      }
    };

    const handleDateClick = (day: number) => {
      const newDate = new Date(viewYear, viewMonth, day);
      if (minDate && newDate < minDate) return;
      if (maxDate && newDate > maxDate) return;

      setCurrentDate(newDate);
      onChange?.(newDate);
    };

    const isDateDisabled = (day: number): boolean => {
      const date = new Date(viewYear, viewMonth, day);
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      return false;
    };

    // Generate calendar grid
    const calendarDays: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    return (
      <div ref={ref} className={clsx("bg-base-100 rounded-lg p-4 shadow-lg", className)} {...props}>
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <button onClick={handlePrevMonth} className="btn btn-ghost btn-sm">
            ‹
          </button>
          <h3 className="text-lg font-bold">
            {MONTHS[viewMonth]} {viewYear}
          </h3>
          <button onClick={handleNextMonth} className="btn btn-ghost btn-sm">
            ›
          </button>
        </div>

        {/* Day headers */}
        <div className="mb-2 grid grid-cols-7 gap-1">
          {DAYS.map((day) => (
            <div key={day} className="text-base-content/70 py-2 text-center text-sm font-medium">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} />;
            }

            const date = new Date(viewYear, viewMonth, day);
            const isSelected = value && isSameDay(date, value);
            const isToday = isSameDay(date, new Date());
            const isDisabled = isDateDisabled(day);

            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                disabled={isDisabled}
                className={clsx(
                  "btn btn-sm",
                  isSelected && "btn-primary",
                  !isSelected && isToday && "btn-outline",
                  !isSelected && !isToday && "btn-ghost",
                  isDisabled && "btn-disabled opacity-50"
                )}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

Calendar.displayName = "Calendar";
