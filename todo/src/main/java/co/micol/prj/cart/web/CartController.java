package co.micol.prj.cart.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.micol.prj.cart.mapper.CartMapper;
import co.micol.prj.cart.vo.CartVO;

@RestController
public class CartController {
	
	@Autowired CartMapper mapper;
	
	@RequestMapping("cartDelete")
	public CartVO cartDelete(CartVO vo) {
		mapper.cartDelete(vo);
		return vo;
	}
	
	@RequestMapping("cartDeleteCheck")
	public boolean cartDelete(String[] nos) {
		for(String no : nos) {
			CartVO vo = new CartVO();
			vo.setNo(no);
			mapper.cartDelete(vo);
		}
		return true;
	}
	
	@RequestMapping("cartDeleteAll")
	public boolean cartDeleteAll() {
		mapper.cartDeleteAll();
		return true;
	}
	
	@RequestMapping("cartSelectList")
	public List<CartVO> cartSelectList() {
		return mapper.cartSelectList();
	}
}
