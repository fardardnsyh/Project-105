package com.careerquest.backend.account;

import org.springframework.stereotype.Service;

import com.careerquest.backend.account.dto.request.CreateAccountDto;
import com.careerquest.backend.account.entities.Account;
import com.careerquest.backend.account.factories.AccountFactory;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {
    AccountRepository accountRepository;
    AccountFactory accountFactory;

    public Account create(CreateAccountDto createAccountDto) {
        Account account = accountFactory.createAccountFromDto(createAccountDto);
        return accountRepository.save(account);
    }

    public Account findBySub(String sub) {
        Account account = accountRepository.findBySub(sub);

        if (account == null) {
            throw new EntityNotFoundException("Account not found");
        }

        return account;
    }
}
