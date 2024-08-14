package com.careerquest.backend.account;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.careerquest.backend.account.dto.request.AccountDto;
import com.careerquest.backend.account.dto.request.CreateAccountDto;
import com.careerquest.backend.account.entities.Account;
import com.careerquest.backend.account.factories.AccountFactory;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/account")
public class AccountController {
    private final AccountService accountService;
    private final AccountFactory accountFactory;

    @GetMapping("/find/sub")
    public AccountDto findAccountBySub(@RequestParam String sub) {
        System.out.println("TESTING");
        Account account = this.accountService.findBySub(sub);

        return accountFactory.createAccountDtoFromAccount(account);
    }

    @PostMapping()
    public AccountDto createAccount(@RequestBody CreateAccountDto createAccountDto) {
        Account account = accountService.create(createAccountDto);

        return accountFactory.createAccountDtoFromAccount(account);
    }

}
