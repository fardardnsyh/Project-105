package com.careerquest.backend.account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.careerquest.backend.account.entities.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {

    Account findBySub(String sub);
}
