package student;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Create DAO objects
        EventDAO eventDAO = new EventDAO();
        StudentDAO studentDAO = new StudentDAO();
        ParticipationDAO participationDAO = new ParticipationDAO();

        // Create a scanner for user input
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Choose an option:");	
            System.out.println("1. Add Event");	//abstraction
            System.out.println("2. Add Student");	//abstraction
            System.out.println("3. Register Participant");	//abstraction
            System.out.println("4. View All Events");	//abstraction
            System.out.println("5. View All Students");	//abstraction
            System.out.println("0. Exit");

            int option = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (option) {
                case 1:
                    // Add Event 
                	//abstraction
                	//
                    System.out.println("Enter event name:");
                    String eventName = scanner.nextLine();

                    Date eventDate = null;
                    while (eventDate == null) {
                        System.out.println("Enter event date (YYYY-MM-DD):");
                        String eventDateStr = scanner.nextLine();
                        try {
                            eventDate = new SimpleDateFormat("yyyy-MM-dd").parse(eventDateStr);
                        } catch (ParseException e) {
                            System.out.println("Invalid date format. Please try again.");
                        }
                    }

                    System.out.println("Enter event location:");
                    String eventLocation = scanner.nextLine();
                    
                    System.out.println("Enter event category:");
                    String category = scanner.nextLine();

                    Event event = new Event();
                    event.setEventName(eventName);
                    event.setEventDate(eventDate);
                    event.setEventLocation(eventLocation);
                    event.setcategory(category);

                    eventDAO.addEvent(event);
                    System.out.println("Event added successfully!");
                    break;

                case 2:
                    // Add Student
//abstraction
                	
                    System.out.println("Enter student name:");
                    String studentName = scanner.nextLine();
                    
                    System.out.println("Enter student roll number:");
                    String rollNumber = scanner.nextLine();

//                    System.out.println("Enter student class:");
//                    String section = scanner.nextLine();

                    System.out.println("Enter student department:");
                    String department = scanner.nextLine();
                    
                    System.out.println("Enter student email:");
                    String studentEmail = scanner.nextLine();
                    
                    System.out.println("Enter student password:");
                    String password = scanner.nextLine();
                    

                    Student student = new Student();
//                    student.setStudentId(studentId);
                    student.setStudentName(studentName);
                    student.setRollNumber(rollNumber);
                    student.setDepartment(department);
//                    student.setSection(section);
                    student.setStudentEmail(studentEmail);
                    student.setPassword(password);

                    studentDAO.addStudent(student);
                    System.out.println("Student added successfully!");
                    break;

                case 3:
                    // Register Participant
                    System.out.println("Enter event ID:");
                    int eventId = scanner.nextInt();

                    System.out.println("Enter student ID:");
                    int studentId = scanner.nextInt();

                    participationDAO.registerParticipant(eventId, studentId);
                    System.out.println("Participant registered successfully!");
                    break;

                case 4:
                    // View All Events
                    List<Event> events = eventDAO.getAllEvents();
                    for (Event ev : events) {
                        System.out.println(ev.getEventName() + " | " + ev.getEventDate() + " | " + ev.getEventLocation()+ " | " +ev.getCategory());
                    }
                    break;

                case 5:
                    // View All Students
                    List<Student> students = studentDAO.getAllStudents();
                    for (Student st : students) {
                        System.out.println(st.getStudentName()+ " | " + st.getRollNumber() + " | " + st.getStudentEmail() + " | " + st.getDepartment());
                    }
                    break;

                case 0:
                    // Exit
                    System.out.println("Goodbye!");
                    scanner.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid option. Please try again.");
                    break;
            }
        }
    }
}
