$(function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0'+ (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year + '-' + month + '-' + day;

    $.ajax({
        async: true,
        url: 'https://api.odcloud.kr/api/15077756/v1/vaccine-stat' + '?page=1&perPage=1&cond%5BbaseDate%3A%3AGT%5D=' + dateString + '&cond%5BbaseDate%3A%3AGTE%5D=' + dateString + '&serviceKey=5efVUPw82kO8VF6ZqPGLMp9zqy%2BqakqBGhELrXviR4QlQ8c7Jq68hU3QRYYtfLkGl2PNXNT0OQcLrxRYwidOPg%3D%3D',
        data: {},
        method: 'GET',
        timeout: 3000,
        dataType: 'json',
        success: function(result) {
            console.log(result)
            let img = $('<img />')
            let imgUrl = "/static/main/img/main/vaccine_up_icon2.png"
            img.attr('src', imgUrl, 'alt', '')
            $('.livedate').text("( " + dateString + " 기준, 2021-2-26 이후 누계, 단위: 명 )")
            $('#person1T').text("누적 " + result['data'][0]['totalFirstCnt'] + "명")
            $('#person1N').text("신규 " + result['data'][0]['firstCnt'] + "명").append(img)
            $('#person2T').text("누적 " + result['data'][0]['totalSecondCnt'] + "명")
            $('#person2N').text("신규 " + result['data'][0]['secondCnt'] + "명").append(img)
            $('#person3T').text("누적 " + result['data'][0]['totalThirdCnt'] + "명")
            $('#person3N').text("신규 " + result['data'][0]['thirdCnt'] + "명").append(img)
        },
        error: function() {
            alert('뭔가 이상해요!')
        }
    });
})