package com.legalai.backend.model;

import jakarta.validation.constraints.NotBlank;

public class LegalQaRequest {
    @NotBlank
    private String question;

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}
