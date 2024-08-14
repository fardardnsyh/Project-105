package com.careerquest.backend.board.factories;

import org.springframework.stereotype.Component;

import com.careerquest.backend.board.dto.BoardDto;
import com.careerquest.backend.board.dto.request.CreateBoardDto;
import com.careerquest.backend.board.entities.Board;

@Component
public class BoardFactory {

    public Board createBoardFromDto(CreateBoardDto createBoardDto) {
        Board board = new Board();

        board.setName(createBoardDto.getName());

        return board;
    }

    public BoardDto createBoardDtoFromBoard(Board board) {
        return new BoardDto(
                board.getId(),
                board.getName());
    }
}
