package com.legalai.backend.model;

import jakarta.validation.constraints.NotBlank;

public class DocumentSummaryRequest {
    @NotBlank
    private String text;
    private String length = "short";

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }
}
