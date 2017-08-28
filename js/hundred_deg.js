/*------------------*/
var $oMasg = $('.search .masg ul')
var $oMasg_li = $oMasg.find('li')
var $bSearch_Up = $('.search .up_and_down .up')
var $bSearch_Down = $('.search .up_and_down .down')
var iH = $oMasg_li.height()
var iH_Msg = $oMasg.height()
var tid_masg = null;
$bSearch_Down.click(function () {
    if(!$oMasg.is(':animated')){
        clearInterval(tid_masg)
        if($oMasg.position().top <= (iH-iH_Msg))
        {
            $oMasg.animate({'top':0},'slow');
        }
        else
            $oMasg.animate({'top':'-='+iH},'slow');
        auto_play_masg()
    }
})
$bSearch_Up.click(function () {
    if(!$oMasg.is(':animated')){
        clearInterval(tid_masg)
        if($oMasg.position().top >= 0)
        {
            $oMasg.animate({'top':iH-iH_Msg},'slow');
        }
        else
            $oMasg.animate({'top':'+='+iH},'slow');
        auto_play_masg()
    }

})
function auto_play_masg() {
    tid_masg = setInterval(function () {
        if(!$oMasg.is(':animated')){
            if($oMasg.position().top <= (iH-iH_Msg))
            {
                $oMasg.animate({'top':0},'slow');
            }
            else
                $oMasg.animate({'top':'-='+iH},'slow');
        }
    },2000)
}



/*search------------*/
var $bSearch_bt = $('.search_bt')
var search_att = {
    搜店:{input:'例如：荷棠鱼坊烤鱼 或 樱花日本料理',p:'金钱豹、大江南、湘水之珠、德瑀楼\n' +
    '                    荷棠鱼坊烤鱼、SOHO尚都、湘味楼...'},
    地址:{input:'例如：荷棠鱼坊烤鱼 或 樱花日本料理1',p:'大江南、湘水之珠、德瑀楼\n' +
    '                    荷棠鱼坊烤鱼、SOHO尚都、湘味楼...'},
    优惠券:{input:'例如：荷棠鱼坊烤鱼 或 樱花日本料理2',p:'金钱豹、大江南、德瑀楼\n' +
    '                    荷棠鱼坊烤鱼、SOHO尚都、湘味楼...'},
    全文:{input:'例如：荷棠鱼坊烤鱼 或 樱花日本料理3',p:'金钱豹、湘水之珠、德瑀楼\n' +
    '                    荷棠鱼坊烤鱼、SOHO尚都、湘味楼...'},
    视频:{input:'例如：荷棠鱼坊烤鱼 或 樱花日本料理4',p:'金钱豹、大江南、湘水之珠、德瑀楼\n' +
    '                    荷棠鱼坊烤鱼...'}
}
$bSearch_bt.find('li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $bSearch_bt.parent().find('input').val(search_att[$(this).text()]['input'])
    $bSearch_bt.parent().find('p').text(search_att[$(this).text()]['p'])
})

/*shop_page------------------*/
var $shop_page_title_nav_button = $('.shop_page .title_nav_button a')
$shop_page_title_nav_button.click(function () {
    $(this).addClass('active')
        .siblings().removeClass('active')
    $(this).next().addClass('active');

})


/*life-----------------*/
var $life_content = $('.life .content')
var $life_title_nav_button = $('.life .title_nav_button a')
var $bSubwayButton = $('.cho_line button')
var $oMap = $('.map')

$bSubwayButton.click(function () {
    var teclass =/current/;
    var classname = $(this).attr('class')
    var map_number = $(this).children('strong').text()
    var map_src = 'images/map_line'+map_number+'.png'
    $oMap.attr('src',map_src)
    if(!teclass.test(classname))
    {
        $(this).flag = 1;
        $(this).css('background',$(this).children('strong').css('color'))
            .siblings().css('background','url("images/title_nav_bg.png") repeat-x top left')
        $(this).addClass('current')
            .siblings().removeClass('current')
    }
})


$life_title_nav_button.click(function () {
    $(this).addClass('active').siblings().removeClass('active');
})

$life_title_nav_button.eq(0).click(function () {
    $life_content.eq(0).addClass('active').siblings().removeClass('active');
    $bSubwayButton.eq(2).click()
})
$life_title_nav_button.eq(1).click(function () {
    $life_content.eq(1).addClass('active').siblings().removeClass('active');
    $bSubwayButton.eq(7).click()
})

var $oBbsContent = $('.main .main_left .bbs ul li')
$oBbsContent.mouseover(function () {
    $(this).addClass('active')
        .siblings('li').removeClass('active')
    $(this).next().removeClass('active')
        .siblings('div').addClass('active')
})

var $bCoupons_nav = $('.nav')
$bCoupons_nav.click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $(this).next().addClass('active')
})


var $oRecomPicShow = $('.pic_show')
var $oRecomPicLi = $('.recom_pic_show ul li')
var $oRecomInfo = $('.recom_pic span')
var auto_play_recom_pic_show_flag = 2;
var auto_play_recom_pic_show_tid = null ;
var recom_pic_date = {
    'images/recom_pic_small1.jpg':'美女诶1',
    'images/recom_pic_small2.jpg':'美女诶2',
    'images/recom_pic_small3.jpg':'美女诶3',
}
$oRecomPicLi.click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $oRecomPicShow.animate({opacity:0},'fast')
    var _this = $(this).find('img').attr('src')
    var re_tid = setInterval(function () {
        {
            if(!$oRecomPicShow.is(':animated'))
            {
                $oRecomPicShow.attr('src',_this)
                $oRecomInfo.text(recom_pic_date[_this])
                clearInterval(re_tid)
                $oRecomPicShow.animate({opacity:1},'fast')
            }
        }
    },1)
})
$oRecomPicLi.mouseover(function () {
    clearInterval(auto_play_recom_pic_show_tid)
})
$oRecomPicLi.mouseout(function () {
    auto_play_recom_pic_show()
})
function auto_play_recom_pic_show() {
    auto_play_recom_pic_show_tid = setInterval(function () {
        $oRecomPicLi.eq(auto_play_recom_pic_show_flag).click();
        if(auto_play_recom_pic_show_flag===2)auto_play_recom_pic_show_flag=0;
        else auto_play_recom_pic_show_flag ++;
    },2000)
}

var $oRecom_list = $('.recom_list ul')
var recom_list_attr = [
    {div_logo:'shop_car',span:'老店换新颖，丰泽园田野冲账13asdasd',strong:'08/07/20'},
    {div_logo:'note_book',span:'老店换新颖，丰泽3123田野冲账13asdasd',strong:'08/07/20'},
    {div_logo:'shop_car',span:'老店换新颖，丰泽园田野冲账13asdasd',strong:'08/07/21'},
    {div_logo:'note_book',span:'老店换qwe新颖，丰泽园田野冲账13asdasd',strong:'08/07/22'},
    {div_logo:'shop_car',span:'老店换新颖，丰泽qwe 园田野冲账13asdasd',strong:'08/07/22'},
    {div_logo:'note_book',span:'老店换e新颖，丰泽园田野冲账13asdasd',strong:'08/07/22'},
    {div_logo:'note_book',span:'老店换新颖，丰 q泽qe园田野冲账13asdasd',strong:'08/07/23'},
    {div_logo:'shop_car',span:'老店换新qq颖，丰泽园田野冲账13asdasd',strong:'08/07/25'}
]
function append_recom_list() {
    for(var i = 0 ; i < recom_list_attr.length ; i ++ ){
        if(recom_list_attr[i].span.length>15){
            $oRecom_list.append(
                ' <li><div class="sprite1 '+recom_list_attr[i].div_logo+'"></div><span>'+recom_list_attr[i].span.substring(0,15)+'.....'+'</span><strong>'+recom_list_attr[i].strong+'</strong></li>'
            )
        }
        else
            $oRecom_list.append(
                ' <li><div class="sprite1 '+recom_list_attr[i].div_logo+'"></div><span>'+recom_list_attr[i].span+'</span><strong>'+recom_list_attr[i].strong+'</strong></li>'
            )
    }
}
var $oStyle = $('#style')
var ocss = ''
var $oHot_People_Ul = $('.hot .hot_people ul ul').parent()
if(!!window.ActiveXObject || "ActiveXObject" in window){
    $oHot_People_Ul.parent().find('.logo').css('background','red')
}
for(var i = 0 ; i < $oHot_People_Ul.length ; i ++)
{
    ocss+='.main .main_left .hot .hot_people ul:nth-of-type('+(i+2)+'){\n' +
        '    background: url("images/hot_people'+(i+1)+'.png") no-repeat left top;\n' +
        '}\n'
}

var luckyDay_attr = [
    {month:8,day:21,activity:{src:'images/activity1.png',theme:'XXXXX???',intro:'迟到的荣誉——维米尔的写实主义风俗画迟到的荣誉维米尔'}},
    {month:8,day:24,activity:{src:'images/activity2.png',theme:'???XXXXX',intro:'维米尔的写实主义风俗画迟到的荣誉维米尔——迟到的荣誉'}},
    {month:8,day:25,activity:{src:'images/activity2.png',theme:'???XXXXX',intro:'维米尔的写实主义风俗画迟到的荣誉维米尔——迟到的荣誉'}},
    {month:8,day:27,activity:{src:'images/activity2.png',theme:'???XXXXX',intro:'维米尔的写实主义风俗画迟到的荣誉维米尔——迟到的荣誉'}}
]
function setcalendar() {
    var mont_attr = {1:31,
        2:28,
        3:31,
        4:30,
        5:31,
        6:30,
        7:31,
        8:31,
        9:30,
        10:31,
        11:30,
        12:31,
    }
    var oToday=new Date();
    var year=oToday.getFullYear();
    var week_day = oToday.getDay()
    var day = oToday.getDate()
    var month = oToday.getMonth()+1
    var week = 0;
    if((day+7-week_day%7)%7 != 0)
        week = parseInt((day+7-week_day%7)/7)+1
    else
        week = parseInt((day+7-week_day%7)/7)
    var isLeapYear = (year%4 === 0 && year%100!=0)||(year%400===0)
    var last_month_day = week*7-day-(7-week_day%7)
    var $oCalWeek = $('.calendar .week')
    var $oCalTitMon = $('.today_theme_title .month')
    var $oCalTitDay = $('.today_theme_title .day')
    var $oToday_theme = $('.today_theme')
    var $oAct_Label = $('.act_label')
    var day_number_flag = 0;
    // console.log(oToday,year+'/'+month+'/'+day+'/'+week+'/'+week_day+'****'+last_month_day)
    $oCalTitMon.text(month)
    $oCalTitDay.text(day)
    if(isLeapYear)mont_attr[2]=29;
    if(last_month_day>0) {
        for(var i = 0; i < last_month_day ; i++)
        {
            $oCalWeek.append('<li class="not_real">'+(mont_attr[month-1]-last_month_day+i+1)+'</li>')
            day_number_flag++
        }
    }
    for(var i = 0 ; i < mont_attr[month] ; i ++) {
        day_number_flag++
        if(i+1 === day){
            ocss+='.calendar .week li:nth-of-type('+day_number_flag+'){' +
                'box-sizing:border-box;border:2px solid #d30408;}\n'
        }
        var j = 0
        for( ; j < luckyDay_attr.length ; j ++){
            if(month===luckyDay_attr[j]['month']&&(i+1)===luckyDay_attr[j]['day']){
                $oCalWeek.append('<li>'+(i+1)+'<img src="'+luckyDay_attr[j]['activity']['src']+'" alt=""></li>')
                if(i+1 === day)
                {
                    ocss+='.calendar .week li:nth-of-type('+day_number_flag+'){position: relative;}\n' +
                        '.calendar .week li:nth-of-type('+day_number_flag+') img{position: absolute;left:0;width:36px;height:36px;cursor:pointer;}\n'
                    $oToday_theme.find('img').css('opacity','1')
                    $oToday_theme.find('.today_act').css('background','url("'+luckyDay_attr[j]['activity']['src']+'")')
                    $oToday_theme.find('h5').text(luckyDay_attr[j]['activity']['theme'])
                    $oToday_theme.find('p').text(luckyDay_attr[j]['activity']['intro'])
                }
                else
                    ocss+='.calendar .week li:nth-of-type('+day_number_flag+'){position: relative;}\n' +
                        '.calendar .week li:nth-of-type('+day_number_flag+') img{position: absolute;left:0;width:40px;height:40px;cursor:pointer;}\n'
                break;
            }
        }
        if(j<luckyDay_attr.length){
            continue;
        }
        $oCalWeek.append('<li>'+(i+1)+'</li>')

    }
    if(day_number_flag<42) {
        for(var i = 0 ; i < 42-day_number_flag ; i ++)
        {
            $oCalWeek.append('<li class="not_real">'+(i+1)+'</li>')
        }
    }
    var $oAct_pic = $oCalWeek.find('img')
    $oAct_pic.mouseover(function () {
        var ad = parseInt($(this).parent().text())
        for(var i = 0 ; i < luckyDay_attr.length ; i ++){
            if(luckyDay_attr[i]['day']===ad)
            {
                $oAct_Label.find('.act_pic').attr('src',luckyDay_attr[i]['activity']['src'])
                var $week_Abbreviation = $oCalWeek.parent().find('.calendar_title').find('li')
                $oAct_Label.find('.when').text($week_Abbreviation.eq(ad%7).text())
                $oAct_Label.find('.tod_theme').text(luckyDay_attr[i]['activity']['theme'])
                $oAct_Label.find('p').text(luckyDay_attr[i]['activity']['intro'])
            }
        }
        $oAct_Label.css('left',(parseInt($(this).parent().text())%7+1)*43+5)
        $oAct_Label.css('top',(parseInt($(this).parent().text()/7.0))*43)
        $oAct_Label.css('display','block')
    })
    $oAct_pic.mouseout(function () {
        $oAct_Label.css('display','none')
    })
}

$(document).ready(function () {
    $bSubwayButton.eq(2).click()
    auto_play_masg()
    $oRecomPicLi.eq(1).click();
    auto_play_recom_pic_show()
    append_recom_list()
    setcalendar()


    $oStyle.text(ocss);
})