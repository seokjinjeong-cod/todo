package co.micol.prj.todo.mapper;

import java.util.List;

import co.micol.prj.todo.vo.TodoVO;

public interface TodoMapper {
	public List<TodoVO> todoSelectList();
	public void todoInsert(TodoVO vo);
	public void todoUpdate(TodoVO vo);
	public void todoDelete(TodoVO vo);
} 
