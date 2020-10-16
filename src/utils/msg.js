//提醒消息
const MsgType = {
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
  };
  
  import { Message, MessageBox } from "element-ui";
  import NProgress from 'nprogress'
　import 'nprogress/nprogress.css'
  
  const _showMssage = function(msg, msgType) {
    Message({
        message: msg,
        type:msgType,
        duration: 3000,
    });
  };
  
  const _showModelMssage = function(msg, title, msgType, ok, cancel) {
    MessageBox({
        title: title || "提示",
        message: msg,
        type: msgType || 'warning',
        cancelButtonText: '取消',
        confirmButtonText: '确定',
    }).then(res=>ok(res)).catch(err=>cancel(err));
  };
  
  const _msg = {
    showWarning(msg) {
      _showMssage.call(this, msg, MsgType.warning);
    },
    showSuccess(msg) {
      _showMssage.call(this, msg, MsgType.success);
    },
    showError(msg) {
      _showMssage.call(this, msg, MsgType.error);
    },
    showInfo(msg) {
      _showMssage.call(this, msg, MsgType.info);
    },
    //弹框方式，确定关闭
    showModelWarning(msg, title, ok, cancel) {
      _showModelMssage.call(this, msg, title, MsgType.warning, ok, cancel);
    },
    showModelSuccess(msg, title, ok, cancel) {
      _showModelMssage.call(this, msg, title, MsgType.success, ok, cancel);
    },
    showModelError(msg, title, ok, cancel) {
      _showModelMssage.call(this, msg, title, MsgType.error, ok, cancel);
    },
    showModelInfo(msg, title, ok, cancel) {
      _showModelMssage.call(this, msg, title, MsgType.info, ok, cancel);
    },
    showConfirm(config,ok,cancel=(err)=>{console.log(err)}) {
        MessageBox.confirm( config.message , config.title || "提示",{
            type: config.msgType || 'warning',
            cancelButtonText: config.cancelText || '取消',
            confirmButtonText:  config.confirmlText || '确定',
        }).then(res=>ok(res)).catch(err=>cancel(err));
    },
    //加载
    startLoading() {
        NProgress.start();
    },
    finishLoading() {
        NProgress.done();
    },
  };
  
  export const msg = _msg;