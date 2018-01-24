package com.antya.cucumber.stepdefs;

import com.antya.AntyaapigatewayApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = AntyaapigatewayApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
