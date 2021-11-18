package co.micol.prj.cart.vo;

import lombok.Data;

@Data
public class CartVO {

	private String 	no;				//장바구니번호
	private String 	product_nm;		//상품명
	private int 	price;			//가격
	private int	 	qty;			//수량
}
