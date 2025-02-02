package in.co.vwits.sms.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.co.vwits.sms.model.Student;
import in.co.vwits.sms.service.StudentService;

@RestController
@RequestMapping(value="/api/student")
public class StudentRestController {
	
	@Autowired
	private StudentService service;
	
	@GetMapping
	public List<Student> findAll(){
		return service.findAllWithSubjects();
	}
	
	@GetMapping("/{rollNo}")
	public Student findByRollNo(@PathVariable int rollNo) {
		return service.findOneWithSubjects(rollNo);
	}
	
	@PostMapping
	public Student createNewStudent(@RequestBody Student s) {
		this.service.save(s);
		return s;
	}
	
	@DeleteMapping(value="/{rollNo}")
	public void deleteStudentByRollNo(@PathVariable int rollNo) {
		this.service.deleteByRollNo(rollNo);
	}
	
	@PutMapping
    public Student updateStudent(@RequestBody Student s) {
        service.update(s);
        return s;
    }
	@GetMapping("/procedure/{rollNo}")
	public Student findByRollNoUsingProcedure(@PathVariable int rollNo) {
	    return service.findByRollNoUsingProcedure(rollNo);
	}

	
	

}
