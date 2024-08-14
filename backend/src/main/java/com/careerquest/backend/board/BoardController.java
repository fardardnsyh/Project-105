package com.careerquest.backend.board;

import org.springframework.web.bind.annotation.RestController;

import com.careerquest.backend.board.dto.request.CreateBoardDto;
import com.careerquest.backend.board.entities.Board;
import com.careerquest.backend.board.factories.BoardFactory;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/board")
public class BoardController {
    private final BoardService boardService;
    private final BoardFactory boardFactory;

    @GetMapping()
    public String getMethodName() {
        return "BOI";
    }

    @PostMapping()
    public String createBoard(@RequestBody CreateBoardDto createBoardDto) {
        Board board = boardService.create(createBoardDto);

        return boardFactory.createBoardDtoFromBoard(board).getId();
    }

}
