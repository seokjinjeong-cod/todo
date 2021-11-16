package co.micol.prj.pet.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import co.micol.prj.pet.mapper.PetMapper;
import co.micol.prj.pet.vo.AdoptVO;
import co.micol.prj.pet.vo.PetVO;

@RestController
public class PetController {

	@Autowired PetMapper mapper;
	
	@GetMapping("/petSelect")
	public List<PetVO> petSelectList() {
		return mapper.petSelectList();
	}

	@GetMapping("/adoptSelect")
	public List<AdoptVO> adoptSelectList() {
		return mapper.adoptSelectList();
	}	

	@PostMapping("/petInsert")
	public PetVO petInsert(PetVO vo) {
		 mapper.petInsert(vo);
		 return vo;
	}
	
	@PostMapping("/petUpdate")
	public PetVO petUpdate(PetVO vo) {
		 mapper.petUpdate(vo);
		 return vo;
	}	
	@PostMapping("/petDelete")
	public PetVO petDelete(PetVO vo) {
		 mapper.petDelete(vo);
		 return vo;
	}		
}
