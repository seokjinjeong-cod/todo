package co.micol.prj.pet.mapper;

import java.util.List;

import co.micol.prj.pet.vo.AdoptVO;
import co.micol.prj.pet.vo.PetVO;

public interface PetMapper {
	public List<PetVO> petSelectList();
	public List<AdoptVO> adoptSelectList();
	public void petInsert(PetVO vo);
	public void petUpdate(PetVO vo);
	public void petDelete(PetVO vo);
} 
