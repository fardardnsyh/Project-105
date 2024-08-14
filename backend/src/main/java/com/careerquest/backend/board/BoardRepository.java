package com.careerquest.backend.board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.careerquest.backend.board.entities.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, String> {

}
