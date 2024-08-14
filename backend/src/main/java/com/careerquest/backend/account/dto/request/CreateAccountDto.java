package com.careerquest.backend.account.dto.request;

import jakarta.validation.constraints.NotBlank;

public class CreateAccountDto {
    @NotBlank(message = "Account must have a sub")
    private String sub;

    @NotBlank(message = "Account must have a first name")
    private String firstName;

    @NotBlank(message = "Account must have a last name")
    private String lastName;

    public CreateAccountDto(String sub, String firstName, String lastName) {
        this.sub = sub;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getSub() {
        return sub;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
