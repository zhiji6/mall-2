var basePath=$("#basePath").val();$(function(){$(".order_filter li").click(function(){var t_param="";if(!$(".t_param").val()=="商品名称或订单编号"){t_param="-"+$(".t_param").val()}window.location.href="../customer/myorder-"+$(this).attr("data-val")+"-1"+t_param+".html"});$(".rateit li").click(function(){$(".rateit li").css("background-position","left top");var n=$(this).index();var m=0;$(this).parent().children("li").each(function(){if(m>n){return 0}else{$(this).css("background-position","left -16px")}m+=1});$(this).parents(".rateit").next().val(n+1)})});var comUrl="";function comfirmgoods(url){$("#confirm_order").modal("show");comUrl=url}function comfirmGoodsSucc(){location.href=comUrl;$("#confirm_order").modal("hide")}var cUrl="";function cancelOrder(url){$("#cancel_order").modal("show");cUrl=url}function changeUrl(orderId){var orderid=$("#canorder").val();cUrl="/m/customer/cancelorder-myorder-"+orderid+".html";var paramStr="?reason=";$("#titlereason").html("");paramStr+=$(".sel_txa").val();location.href=cUrl+"?reason=取消訂單";$("#cancel_order").modal("hide")}function clearmess(){$("#titlereason").html("");$("#sel_txa").val("")}function checkComment(id){if(!checkScore(id)){return}if(!checkContext(id)){return}$("#commForm"+id).submit()}function toAddComment(id,basePath,orderId,goodsPrice,goodsName,orderNo,goodsImg,goodsNum,commentId,orderGoodsId){if(!checkScore(id)){return}var url=basePath+"/toInitComment.htm?productId="+id+"&orderId="+orderId+"&goodsPrice="+goodsPrice+"&goodsName="+goodsName+"&orderNo="+orderNo+"&goodsImg="+goodsImg+"&goodsNum="+goodsNum+"&orderGoodsId="+orderGoodsId;if(commentId!=null&&commentId!=""){url+="&commentId="+commentId}window.location.href=url}function checkScore(id){var cts=".cts";if($(cts+id).val()==0){$("#commTip"+id).text("请选择评分！");$("#commTip"+id).addClass("err");return false}$("#commTip"+id).text("");$("#commTip"+id).removeClass("err");return true}function checkContext(id){var str=$("#complaincon"+id).val();var reg=/^([\u4e00-\u9fa5_A-Za-z0-9 \\`\\~\\!\\@\\#\\$\\^\\&\*\(\)\=\{\}\'\:\;\'\,[\]\.\/\?\~\！\@\#\￥\…\…\&\*\（\）\;\—\|\{\}\【\】\‘\；\：\”\“\'\。\，\、\？])+$/;if(str.trim().length>500||str.trim().length<2){$("#commTip"+id).text("字数在2-500之间!");$("#commTip"+id).addClass("err");return false}if(!reg.test(str)){$("#commTip"+id).text("不能包含特殊字符!");$("#commTip"+id).addClass("err");return false}$("#commTip"+id).text("");$("#commTip"+id).removeClass("err");return true};