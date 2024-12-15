"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { GlobalStyle } from './styles';

interface Appointment {
  id: number;
  fullName: string;
  date: string;
  time: string;
  services: string[];
}

const barbershopServices = [
  "Haircut",
  "Beard Trim",
  "Shave",
  "Hair Coloring",
  "Facial",
  "Hair Styling",
];

const ScheduleMyAppointment: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        slots.push(
          `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
        );
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const isTimeSlotAvailable = (time: string) => {
    return !appointments.some(
      (apt) => apt.date === date && apt.time === time
    );
  };

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newAppointment: Appointment = {
      id: Date.now(),
      fullName,
      date,
      time,
      services: selectedServices,
    };
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAppointments([...appointments, newAppointment]);
    setFullName("");
    setTime("");
    setSelectedServices([]);
    setIsLoading(false);
  };

  const handleCancel = async (id: number) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAppointments(appointments.filter((apt) => apt.id !== id));
    setIsLoading(false);
  };

  const handleDateChange = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const handleServiceChange = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  useEffect(() => {
    const formattedDate = currentDate.toISOString().split('T')[0];
    setDate(formattedDate);
  }, [currentDate]);

  const filteredAppointments = appointments.filter(
    (apt) => apt.date === date
  );

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Title>Barbershop Appointments</S.Title>
        <S.Form onSubmit={handleSchedule}>
          <S.Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <S.DateNavigation>
            <S.NavButton onClick={() => handleDateChange('prev')} type="button">&lt;</S.NavButton>
            <S.DateDisplay>{currentDate.toLocaleDateString()}</S.DateDisplay>
            <S.NavButton onClick={() => handleDateChange('next')} type="button">&gt;</S.NavButton>
          </S.DateNavigation>
          <S.Select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select Time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot} disabled={!isTimeSlotAvailable(slot)}>
                {slot} {isTimeSlotAvailable(slot) ? "(Available)" : "(Booked)"}
              </option>
            ))}
          </S.Select>
          <S.ServiceSelection>
            {barbershopServices.map((service) => (
              <S.ServiceOption key={service}>
                <S.Checkbox
                  type="checkbox"
                  id={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => handleServiceChange(service)}
                />
                <S.ServiceLabel htmlFor={service}>{service}</S.ServiceLabel>
              </S.ServiceOption>
            ))}
          </S.ServiceSelection>
          <S.Button type="submit" disabled={isLoading}>
            {isLoading ? "Scheduling..." : "Confirm Appointment"}
          </S.Button>
        </S.Form>
        <S.ToggleButton onClick={() => setShowAppointments(!showAppointments)}>
          {showAppointments ? "Hide Appointments" : "Show Appointments"}
        </S.ToggleButton>
        {showAppointments && (
          <S.TableContainer>
            {isLoading && <S.LoadingOverlay />}
            <S.Table>
              <thead>
                <tr>
                  <S.Th>Full Name</S.Th>
                  <S.Th>Time</S.Th>
                  <S.Th>Services</S.Th>
                  <S.Th>Action</S.Th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((apt) => (
                  <S.TableRow key={apt.id}>
                    <S.Td>{apt.fullName}</S.Td>
                    <S.Td>{apt.time}</S.Td>
                    <S.Td>{apt.services.join(", ")}</S.Td>
                    <S.Td>
                      <S.CancelButton onClick={() => handleCancel(apt.id)} disabled={isLoading}>
                        {isLoading ? "Cancelling..." : "Cancel"}
                      </S.CancelButton>
                    </S.Td>
                  </S.TableRow>
                ))}
              </tbody>
            </S.Table>
          </S.TableContainer>
        )}
      </S.Container>
    </>
  );
};

export default ScheduleMyAppointment;

