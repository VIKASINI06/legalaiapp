package com.legalai.backend.model;

import java.time.Instant;
import java.util.Map;

public class StandardResponse {
    private String status;
    private String feature;
    private Instant timestamp;
    private Map<String, Object> data;

    public StandardResponse() {}

    public StandardResponse(String status, String feature, Map<String, Object> data) {
        this.status = status;
        this.feature = feature;
        this.data = data;
        this.timestamp = Instant.now();
    }

    public static StandardResponse success(String feature, Map<String, Object> data) {
        return new StandardResponse("ok", feature, data);
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFeature() {
        return feature;
    }

    public void setFeature(String feature) {
        this.feature = feature;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public Map<String, Object> getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }
}
