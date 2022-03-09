// Open API 코로나 확진자 현황
$(function () {
    // Open API request URL에 넣을 당일 날짜 생성하는 변수들
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateStringT = year + month + day;
    const dateStringY = year + month + '0' + (day - 1);

    $.ajax({
        async: true,
        url: 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson',
        data: {
            ServiceKey: '5efVUPw82kO8VF6ZqPGLMp9zqy+qakqBGhELrXviR4QlQ8c7Jq68hU3QRYYtfLkGl2PNXNT0OQcLrxRYwidOPg==',
            pageNo: '1',
            numOfRows: '1',
            startCreateDt: dateStringY,
            endCreateDt: dateStringT,
        },
        method: 'GET',
        timeout: 3000,
        dataType: 'XML',
        success: function(result) {
            console.log(result)
            $('#livedate2').text((today.getMonth() + 1) + "/" + today.getDate() + " 기준")
            $(result).find('items').each(function () {
            const cNum=$(this).find('decideCnt').text()
            const cNum1 = cNum.split(cNum[7])
            const cNum2 = (cNum[7]) + (cNum1[1])
            coronaNum = cNum1[0] - cNum2
            console.log(cNum1[0], cNum2)
            $('#coronaNum').text((coronaNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")) + "명")
            });
        },
        error: function() {
            alert('Open API(확진자 현황)가 끌려오지 않습니다!')
        }
    });
})