package com.careerquest.backend.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.careerquest.backend.board.dto.request.CreateBoardDto;
import com.careerquest.backend.board.entities.Board;
import com.careerquest.backend.board.factories.BoardFactory;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    @Autowired
    BoardFactory boardFactory;

    public Board create(CreateBoardDto createBoardDto) {
        Board board = boardFactory.createBoardFromDto(createBoardDto);
        return boardRepository.save(board);
    }
}
