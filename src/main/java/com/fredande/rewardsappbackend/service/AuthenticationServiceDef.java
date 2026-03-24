package com.fredande.rewardsappbackend.service;

import com.fredande.rewardsappbackend.config.CustomUserDetails;
import com.fredande.rewardsappbackend.dto.ChildRegistrationRequest;
import com.fredande.rewardsappbackend.dto.ParentRequest;
import org.springframework.security.core.userdetails.UserDetails;

public interface AuthenticationServiceDef {

    UserDetails authenticate(String username, String password);

    String generateToken(UserDetails userDetails);

    void registerParent(ParentRequest parentRequest);

    void registerChild(ChildRegistrationRequest childRegistrationRequest,
                       CustomUserDetails customUserDetails);

}
