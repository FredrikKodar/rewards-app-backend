package com.fredande.rewardsappbackend.dto;

import com.fredande.rewardsappbackend.constants.ValidationConstants;
import jakarta.validation.constraints.*;

public class ParentRequest {

    private final int minPasswordLength = 8;
    private final int maxPasswordLength = 40;
    private final String emailRegEx = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";


    @Pattern(regexp = emailRegEx,
            message = "Malformed email address")
    private String email;
    @Size(min = minPasswordLength,
            max = maxPasswordLength,
            message = "Password must be " + minPasswordLength + " to " + maxPasswordLength + " characters")
    private String password;
    @NotBlank(message = "First name is required")
    private String firstName;
        @Pattern(regexp = ValidationConstants.EMAIL_REGEX,
        @Size(min = ValidationConstants.MIN_PASSWORD_LENGTH,
                max = ValidationConstants.MAX_PASSWORD_LENGTH,

        @NotBlank(message = "Last name is required")
        String lastName
) {}
