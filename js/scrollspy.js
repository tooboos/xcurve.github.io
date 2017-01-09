
var btn = document.querySelector('button');
        btn.addEventListener('click', function(){
        var y =  document.querySelector('#screen2').offsetTop;
        console.log(y);
             animate({
                duration: 2000,
                timing: easeOutOct,
                draw: function(progress){
                    scrollTo(y*progress);
                }
            });
         var body = document.body;
    	 var html = document.documentElement;
        function scrollTo(n){
        body.scrollTop = n;
        html.scrollTop = n;
    }
    function getScroll(){
        if(body.scrollTop==0 && html.scrollTop==0) return 0;
        else if(body.scrollTop!=0 && html.scrollTop==0) return body.scrollTop;
        else if(body.scrollTop==0 && html.scrollTop!=0) return html.scrollTop;
    }
        });