package co.micol.prj.user.mapper;

import java.util.List;

import co.micol.prj.user.vo.UserVO;

public interface UserMapper {
	
	List<UserVO> getUserList();
	UserVO getUser(UserVO vo);
	int insertUser(UserVO vo);
	int updateUser(UserVO vo);
	int deleteUser(UserVO vo);
}
