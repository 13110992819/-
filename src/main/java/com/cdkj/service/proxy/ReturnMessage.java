package com.cdkj.service.proxy;

public class ReturnMessage {

    private String errorCode;

    private String errorBizCode;

    private String errorInfo;

    // 方法调用返回结果
    private Object data;

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorBizCode() {
        return errorBizCode;
    }

    public void setErrorBizCode(String errorBizCode) {
        this.errorBizCode = errorBizCode;
    }

    public String getErrorInfo() {
        return errorInfo;
    }

    public void setErrorInfo(String errorInfo) {
        this.errorInfo = errorInfo;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
