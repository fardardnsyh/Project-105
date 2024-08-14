package com.careerquest.backend.board.dto.request;

import jakarta.validation.constraints.NotBlank;

public class CreateBoardDto {

    public CreateBoardDto(String boardName) {
        name = boardName;
    }

    @NotBlank(message = "Board name cannot be blank")
    private String name;

    public String getName() {
        return name;
    }
}
