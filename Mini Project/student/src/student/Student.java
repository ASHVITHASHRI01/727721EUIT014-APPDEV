package student;

public class Student {

	    private int studentId;
	    private String studentName;
	    private String rollNumber;
//	    private String section;
	    private String department;
	    private String studentEmail;
	    private String password;

	    
	    // Constructors oops
	    public Student() {
	    }

	    public Student(String studentName, String rollNumber, String department, String studentEmail, String password) {
	        this.studentName = studentName;
	        this.rollNumber = rollNumber;
	        this.department = department;
	        this.studentEmail = studentEmail;
	        this.password = password;
	    }
	    //oops
	    
	    
	    public int getStudentId() {
	        return studentId;
	    }

	    public void setStudentId(int studentId) {
	        this.studentId = studentId;
	    }

	    public String getStudentName() {
	        return studentName;
	    }

	    public void setStudentName(String studentName) {
	        this.studentName = studentName;
	    }
	    
	    
	    public String getRollNumber() {
	        return rollNumber;
	    }

	    public void setRollNumber(String rollNumber) {
	        this.rollNumber = rollNumber;
	    }
	    
//	    public String getsection() {
//	        return section;
//	    }
//
//	    public void setclassName(String section) {
//	        this.section = section;
//	    }
	    
	    public String getDepartment() {
	        return department;
	    }

	    public void setDepartment(String department) {
	        this.department = department;
	    }

	    public String getStudentEmail() {
	        return studentEmail;
	    }

	    public void setStudentEmail(String studentEmail) {
	        this.studentEmail = studentEmail;
	    }
	    
	    public String getPassword() {
	        return password;
	    }

	    public void setPassword(String password) {
	        this.password = password;
	    }
	}

