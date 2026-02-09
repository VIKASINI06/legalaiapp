package com.legalai.backend.model;

import jakarta.validation.constraints.NotBlank;

public class KeywordSearchRequest {
    @NotBlank
    private String query;
    private String jurisdiction;

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getJurisdiction() {
        return jurisdiction;
    }

    public void setJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
    }
}
