package com.careerquest.backend.account.factories;

import org.springframework.stereotype.Component;

import com.careerquest.backend.account.dto.request.AccountDto;
import com.careerquest.backend.account.dto.request.CreateAccountDto;
import com.careerquest.backend.account.entities.Account;

@Component
public class AccountFactory {

    public Account createAccountFromDto(CreateAccountDto createAccountDto) {
        Account account = new Account();

        account.setFirstName(createAccountDto.getFirstName());
        account.setLastName(createAccountDto.getLastName());

        return account;
    }

    public AccountDto createAccountDtoFromAccount(Account account) {
        return new AccountDto(account.getId(), account.getFirstName(), account.getLastName());
    }
}
