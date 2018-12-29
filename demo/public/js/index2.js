$(function(){
    $(window).on("resize",function(){
        //1.1获取当前窗口宽度
        let clientW = $(window).width();
        //1.2设置一个窗口界限
        let isBigImg = clientW >= 800;
        //1.3获取所有item
        let $allItem = $("#lk_carousel .carousel-inner .item")
        //1.4遍历所有item
        $allItem.each(function(index,item){
            //1.5设置合适窗口的src
            let src = isBigImg ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgSrc = 'url("'+ src +'")';
            //1.6设置背景图片
            $(item).css({
                backgroundImage:imgSrc
            });
            //1.7设置小图片
            if(!isBigImg){
                let imgs = '<img src="'+src+'"/>';
                $(item).empty().append(imgs);
            }else{
                $(item).empty();
            }
        });
        
    });  
    //1.8 自动调用热resize方法
    $(window).trigger("resize"); 
    //2 调用工具提示
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });
        //3 设置产品特色宽度
        $(window).on("resize",function(){
            let $ul = $("#lk_product .nav");
            let $allLis = $("[role=\"presentation\"]");
        //   console.log(allLis);
        //3.1 初始化li的宽度
                let $liWidth = 0;
            $allLis.each(function(index,item){                             
                $liWidth += $(item).width();
                //3.2获取div.ulParent宽度
                let $ulWidth = $("#lk_product .ulParent").width();
                
                if($liWidth > $ulWidth){
                    $($ul).css({
                        width: $liWidth +"px"
                    });
                }else{
                    $($ul).css({
                        width: "100%"
                    });
                }
            });
          //4 设置导航条点击
          
          
      });
      let allLis = $("#lk_header .nav li");
          $(allLis[2]).click(function(){
            $("html,boody").animate({
                scrollTop:$("#lk_hot").offset().top
            },1000)
          });
          $(allLis[5]).click(function(){
            $("html,boody").animate({
                scrollTop:$("#lk_relation").offset().top
            },1000)
          });

});