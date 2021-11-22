package co.micol.prj.todo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import co.micol.prj.todo.mapper.TodoMapper;
import co.micol.prj.todo.vo.TodoVO;

@RestController
public class TodoController {

	@Autowired TodoMapper mapper;
	
	@GetMapping("/todoSelect")
	public List<TodoVO> todoSelectList(TodoVO vo) {
		return mapper.todoSelectList();
	}
		
	@PostMapping("/todoInsert")
	public TodoVO todoInsert(TodoVO vo) {
		System.out.println(vo+"=======");
		 mapper.todoInsert(vo);
		 return vo;
	}
	
	@PostMapping("/todoUpdate")
	public TodoVO todoUpdate(TodoVO vo) {
		 //vo.setTodoyn("0");
		 mapper.todoUpdate(vo);
		 return vo;
	}	
	@GetMapping("/todoDelete")
	public TodoVO todoDelete(TodoVO vo) {
		 mapper.todoDelete(vo);
		 return vo;
	}		
}
