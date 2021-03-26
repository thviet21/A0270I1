package com.codegym.casestudy_springboot.models.user;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class UserRoleKey implements Serializable {
    @Column(name = "username")
    String username;

    @Column(name = "role_id")
    int roleId;
}
