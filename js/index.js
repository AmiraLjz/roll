(function($){  
    $.fn.roll=function(option){      
        var data={  
            'time':3000,  
            'rollHeight':500,  
            'moveSpeed':1000  
        }  

        var options=$.extend(data,option);  
  
        this.each(function(){             
            var This=this;  
            var nowT=$(this).children().position().top;  
            var cir=setInterval(function(){  
            nowT=nowT-options.rollHeight;  
            if(Math.abs(nowT)>($(This).children().height()-options.rollHeight)){nowT=0;}  
            $(This).children().animate({'top':nowT},options.moveSpeed)  
            },options.time);              
        })    
    }  
})(jQuery)  