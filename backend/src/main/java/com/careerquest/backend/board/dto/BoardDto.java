package com.careerquest.backend.board.dto;

public class BoardDto {

    private final String id;
    private final String name;

    public BoardDto(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}