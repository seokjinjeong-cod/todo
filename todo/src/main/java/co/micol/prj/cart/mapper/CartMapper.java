package co.micol.prj.cart.mapper;

import java.util.List;

import co.micol.prj.cart.vo.CartVO;

public interface CartMapper {

	List<CartVO> cartSelectList();
	int cartDeleteAll();
	int cartDelete(CartVO vo);
}
