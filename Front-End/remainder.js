// // import React from 'react';
// // import React, { useState, useEffect } from 'react';
// // // import { BrowserRouter } from 'react-router-dom';
// // const Reminder = () => {
// //   const [lastWateredDate, setLastWateredDate] = useState(null);
// //   const [nextWateringDate, setNextWateringDate] = useState(null);

// //   useEffect(() => {
// //     if (lastWateredDate) {
// //       const nextDate = new Date(lastWateredDate);
// //       nextDate.setDate(nextDate.getDate() + 7); // Set next watering date after 7 days
// //       setNextWateringDate(nextDate.toDateString());
// //     }
// //   }, [lastWateredDate]);

// //   const handleWaterPlant = () => {
// //     const currentDate = new Date();
// //     setLastWateredDate(currentDate.toDateString());
// //   };

// //   return (
// //     <div>
// //       <h2>Plant Watering Reminder</h2>
// //       {lastWateredDate ? (
// //         <div>
// //           <p>Last watered: {lastWateredDate}</p>
// //           <p>Next watering: {nextWateringDate}</p>
// //           <button onClick={handleWaterPlant}>Water Plant</button>
// //         </div>
// //       ) : (
// //         <button onClick={handleWaterPlant}>Water Plant</button>
// //       )}
// //     </div>
// //   );
// // };
// // export default Reminder;


// import React, { useState } from 'react';

// const ReminderPage = () => {
//   const [reminders, setReminders] = useState([]);
//   const [newReminder, setNewReminder] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const handleInputChange = (event) => {
//     setNewReminder(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const addReminder = () => {
//     if (newReminder.trim() !== '' && selectedDate.trim() !== '') {
//       const reminder = {
//         date: selectedDate,
//         text: newReminder
//       };
//       setReminders([...reminders, reminder]);
//       setNewReminder('');
//       setSelectedDate('');
//     }
//   };

//   const deleteReminder = (index) => {
//     const updatedReminders = [...reminders];
//     updatedReminders.splice(index, 1);
//     setReminders(updatedReminders);
//   };

//   const updateReminder = (index, newText) => {
//     const updatedReminders = [...reminders];
//     updatedReminders[index].text = newText;
//     setReminders(updatedReminders);
//   };

//   return (
//     <div>
//       <h1>Reminders</h1>
//       <div>
//         <label>Date:</label>
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={handleDateChange}
//         />
//       </div>
//       <div>
//         <label>Reminder:</label>
//         <input
//           type="text"
//           value={newReminder}
//           onChange={handleInputChange}
//           placeholder="Enter a reminder"
//         />
//       </div>
//       <button onClick={addReminder}>Add Reminder</button>
//       <ul>
//         {reminders.map((reminder, index) => (
//           <li key={index}>
//             <div>
//               <label>Date:</label>
//               <input
//                 type="date"
//                 value={reminder.date}
//                 onChange={(event) => updateReminder(index, event.target.value)}
//               />
//             </div>
//             <div>
//               <label>Reminder:</label>
//               <input
//                 type="text"
//                 value={reminder.text}
//                 onChange={(event) => updateReminder(index, event.target.value)}
//               />
//             </div>
//             <button onClick={() => deleteReminder(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReminderPage;


// import React, { useState } from 'react';

// const ReminderAlertPage = () => {
//   const [reminders, setReminders] = useState([]);
//   const [newReminder, setNewReminder] = useState('');
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [selectedTime, setSelectedTime] = useState('');
//   const [alert, setAlert] = useState('');

//   const handleInputChange = (event) => {
//     setNewReminder(event.target.value);
//   };

//   const handleDaySelect = (day) => {
//     if (selectedDays.includes(day)) {
//       const updatedDays = selectedDays.filter((selectedDay) => selectedDay !== day);
//       setSelectedDays(updatedDays);
//     } else {
//       setSelectedDays([...selectedDays, day]);
//     }
//   };

//   const handleTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const addReminder = () => {
//     if (newReminder.trim() !== '' && selectedDays.length > 0 && selectedTime !== '') {
//       const reminder = {
//         days: selectedDays,
//         time: selectedTime,
//         text: newReminder
//       };
//       setReminders([...reminders, reminder]);
//       setNewReminder('');
//       setSelectedDays([]);
//       setSelectedTime('');
//     }
//   };

//   const deleteReminder = (index) => {
//     const updatedReminders = [...reminders];
//     updatedReminders.splice(index, 1);
//     setReminders(updatedReminders);
//   };

//   const scheduleAlert = (days, time, text) => {
//     const currentDate = new Date();
//     const currentDay = currentDate.getDay();
//     const currentTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

//     if (days.includes(currentDay) && currentTime === time) {
//       setAlert(`Reminder: ${text}`);
//     } else {
//       setAlert('');
//     }
//   };

//   return (
//     <div>
//       <h1>Reminders and Alerts</h1>
//       <div>
//         <label>Reminder:</label>
//         <input
//           type="text"
//           value={newReminder}
//           onChange={handleInputChange}
//           placeholder="Enter a reminder"
//         />
//       </div>
//       <div>
//         <label>Days:</label>
//         <div>
//           <input
//             type="checkbox"
//             checked={selectedDays.includes(0)}
//             onChange={() => handleDaySelect(0)}
//           />
//           <label>Sunday</label>
//         {/* </div>
//         <div> */}
//           <input
//             type="checkbox"
//             checked={selectedDays.includes(1)}
//             onChange={() => handleDaySelect(1)}
//           />
//           <label>Monday</label>
//           <input
//             type="checkbox"
//             checked={selectedDays.includes(1)}
//             onChange={() => handleDaySelect(1)}
//           />
//           <label>Tuesday</label>
//           <input
//             type="checkbox"
//             checked={selectedDays.includes(1)}
//             onChange={() => handleDaySelect(1)}
//           />
//           <label>Wednesday</label>
//           <input
//             type="checkbox"
//             checked={selectedDays.includes(1)}
//             onChange={() => handleDaySelect(1)}
//           />
//           <label>Thursday</label>
//           <input
//             type="checkbox"
//             checked={selectedDays.includes(1)}
//             onChange={() => handleDaySelect(1)}
//           />
//           <label>Friday</label>
//           <input
//             type="checkbox"
//             checked={selectedDays.includes(1)}
//             onChange={() => handleDaySelect(1)}
//           />
//           <label>Saturday</label>
//         </div>
//         {/* Repeat the above code for the rest of the days of the week */}
//       </div>
//       <div>
//         <label>Time:</label>
//         <input
//           type="time"
//           value={selectedTime}
//           onChange={handleTimeChange}
//         />
//       </div>
//       <button onClick={addReminder}>Add Reminder</button>
//       <ul>
//         {reminders.map((reminder, index) => (
//           <li key={index}>
//             <div>
//               <label>Reminder:</label>
//               <span>{reminder.text}</span>
//             </div>
//             <div>
//               <label>Days:</label>
//               <span>{reminder.days.join(', ')}</span>
//             </div>
//             <div>
//               <label>Time:</label>
//               <span>{reminder.time}</span>
//             </div>
//             <button onClick={() => deleteReminder(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <h3>Alert:</h3>
//         <span>{alert}</span>
//       </div>
//     </div>
//   );
// };

// export default ReminderAlertPage;




import React, { useState } from 'react';
import plant02 from './plant.png';
const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  const handleInputChange = (event) => {
    setNewReminder(event.target.value);
  };

  const handleDaySelect = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const addReminder = () => {
    if (newReminder.trim() !== '' && selectedDays.length > 0 && selectedTime !== '') {
      const reminder = {
        days: selectedDays,
        time: selectedTime,
        text: newReminder
      };
      setReminders([...reminders, reminder]);
      setNewReminder('');
      setSelectedDays([]);
      setSelectedTime('');
    }
  };

  const updateReminder = (index, newText) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].text = newText;
    setReminders(updatedReminders);
  };

  return (
    <div>
  <header class="header">
  <img src={plant02} width={70}></img>
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="home">Home</a>
    <a href="garden">Garden Calender</a>
    <a href="journal">Garden Journal</a> 
    <a href="remainder">Remainder</a>
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
    </nav>
  </header>
  {/* <div class="l-background"></div> */}
  <div className="r-container">
    <div><center>
      <h3>Reminders and Notifications</h3>
      <div>
        <label>Reminder:</label>
        <input
          type="text"
          value={newReminder}
          onChange={handleInputChange}
          placeholder="Enter a reminder"
        />
      </div>
      <div>
        <label>Days:</label>
        <div className="days-wrapper">
          <button
            className={selectedDays.includes(0) ? 'selected' : ''}
            onClick={() => handleDaySelect(0)}
          >
            Sun
          </button>
          <button
            className={selectedDays.includes(1) ? 'selected' : ''}
            onClick={() => handleDaySelect(1)}
          >
            Mon
          </button>
          <button
            className={selectedDays.includes(1) ? 'selected' : ''}
            onClick={() => handleDaySelect(1)}
          >
            Tue
          </button>
          <button
            className={selectedDays.includes(1) ? 'selected' : ''}
            onClick={() => handleDaySelect(1)}
          >
            Wed
          </button>
          <button
            className={selectedDays.includes(1) ? 'selected' : ''}
            onClick={() => handleDaySelect(1)}
          >
            Thur
          </button>
          <button
            className={selectedDays.includes(1) ? 'selected' : ''}
            onClick={() => handleDaySelect(1)}
          >
            Fri
          </button>
          <button
            className={selectedDays.includes(1) ? 'selected' : ''}
            onClick={() => handleDaySelect(1)}
          >
            Sat
          </button>
        </div>
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
      <button onClick={addReminder}>Add Reminder</button>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            <div>
              <label>Reminder:</label>
              <input
                type="text"
                value={reminder.text}
                onChange={(event) => updateReminder(index, event.target.value)}
              />
            </div>
            <div>
              <label>Days:</label>
              <span>{reminder.days.join(', ')}</span>
            </div>
            <div>
              <label>Time:</label>
              <span>{reminder.time}</span>
            </div>
          </li>
        ))}
      </ul>
      </center>
      </div>
    </div>
    </div>
  );
};

export default Reminder;
