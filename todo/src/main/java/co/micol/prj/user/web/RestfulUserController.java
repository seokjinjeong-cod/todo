package co.micol.prj.user.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.micol.prj.user.mapper.UserMapper;
import co.micol.prj.user.vo.UserVO;

@RestController
public class RestfulUserController {
	@Autowired
	UserMapper userService;
	
	//전체조회
	@RequestMapping(value="/userList", method=RequestMethod.GET)
	public List<UserVO> getUserList(Model model, UserVO vo) {
		return  userService.getUserList();
	}
	//단건조회
	@RequestMapping(value="/users",  method=RequestMethod.GET)
	public UserVO getUser(UserVO vo, Model model) {
		return  userService.getUser(vo);
	}
	//삭제
	@RequestMapping(value="/deleteUser")
	public UserVO  deleteUser(UserVO vo, Model model) {
		userService.deleteUser(vo);
		return vo;
	}
	//등록
	@RequestMapping(value="/insertUser",method=RequestMethod.POST)
	public UserVO insertUser(UserVO vo, Model model) {
		userService.insertUser(vo);
		return  vo;
	}
	//수정
	@RequestMapping(value="/updateUser" ,method=RequestMethod.POST)
	public UserVO updateUser(UserVO vo, Model model) {
		userService.updateUser(vo);
		return  vo;
	}	
}
