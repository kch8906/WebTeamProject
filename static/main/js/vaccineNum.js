// Open API request URL에 넣을 당일 날짜 생성하는 변수들
const today = new Date();
const year = today.getFullYear();
const month = ('0'+ (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);
const dateString = year + '-' + month + '-' + day;

// 숫자형 자료 세 자릿수 마다 쉼표(,) 넣는 함수, 소수점 한 자릿수까지만 보여주는 함수
// function formatNumber(str, opt){
//   var rstr = "", sign = "";
//   if(isNumeric(str, opt)){
//     str = String(getNumeric(str, opt));
//     if(str.substr(0, 1) == "-" ){
//       sign = "-";
//       str = str.substr(1);
//     }
//     var arr = str.split(".");
//     for(var ii = 0 ; ii < arr[0].length ; ii++){
//       if( ii % 3 == 0 && ii > 0){
//         rstr = arr[0].substring(arr[0].length-ii,arr[0].length-ii-1) + "," + rstr;
//       }else{
//         rstr = arr[0].substring(arr[0].length-ii,arr[0].length-ii-1) + rstr;
//       }
//     }
//     rstr = sign + rstr;
//     return arr.length > 1 ? rstr + "." + arr[1] : rstr;
//   }else{
//     return str;
//   }
// }

// Open API 코로나 예방접종 현황
$(function () {
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

            // 쉼표(,) 넣는 함수 적용 Ver. 1 !!NOT WORKING!!
            // let N11 = formatNumber("result['data'][0]['totalFirstCnt']")
            // let N12 = formatNumber("result['data'][0]['firstCnt']")
            // let N21 = formatNumber("result['data'][0]['totalSecondCnt']")
            // let N22 = formatNumber("result['data'][0]['secondCnt']")
            // let N31 = formatNumber("result['data'][0]['totalThirdCnt']")
            // let N32 = formatNumber("result['data'][0]['thirdCnt']")

            // 쉼표(,) 넣는 함수 적용 Ver. 2 !!NOT WORKING!!
            // let N11 = result['data'][0]['totalFirstCnt']
            // let N12 = result['data'][0]['firstCnt']
            // let N21 = result['data'][0]['totalSecondCnt']
            // let N22 = result['data'][0]['secondCnt']
            // let N31 = result['data'][0]['totalThirdCnt']
            // let N32 = result['data'][0]['thirdCnt']
            // formatNumber(N11, N12, N21, N22, N31, N32)

            // 쉼표(,) 넣는 함수 적용 공통 Ver. 1 & 2 !!NOT WORKING!!
            // $('#percent1').text((result['data'][0]['totalFirstCnt'] / 516255.61)+ "%")
            // $('#person1T').text("누적 " + N11 + "명")")
            // $('#person1N').text("신규 " + N12 + "명")").append(img)
            // $('#percent2').text((result['data'][0]['totalSecondCnt'] / 516255.61)+ "%")
            // $('#person2T').text("누적 " + N21 + "명")")
            // $('#person2N').text("신규 " + N22 + "명")").append(img)
            // $('#percent3').text((result['data'][0]['totalThirdCnt'] / 516255.61)+ "%")
            // $('#person3T').text("누적 " + N31 + "명")")
            // $('#person3N').text("신규 " + N32 + "명")").append(img)

            // 소수점 자릿수 설정하는 함수 Ver. 1, Math.ceil() !!NOT WORKING!!
            // $('#percent1').text(Math.ceil(result['data'][0]['totalFirstCnt'] / 516255.61 * 10) / 10) + "%")
            // $('#person1T').text("누적 " + result['data'][0]['totalFirstCnt'] + "명")
            // $('#person1N').text("신규 " + result['data'][0]['firstCnt'] + "명").append(img)
            // $('#percent2').text(Math.ceil(result['data'][0]['totalSecondCnt'] / 516255.61 * 10) / 10) + "%")
            // $('#person2T').text("누적 " + result['data'][0]['totalSecondCnt'] + "명")
            // $('#person2N').text("신규 " + result['data'][0]['secondCnt'] + "명").append(img)
            // $('#percent3').text(Math.ceil(result['data'][0]['totalThirdCnt'] / 516255.61 * 10) / 10 + "%")
            // $('#person3T').text("누적 " + result['data'][0]['totalThirdCnt'] + "명")
            // $('#person3N').text("신규 " + result['data'][0]['thirdCnt'] + "명").append(img)

            // 소수점 자릿수 설정하는 함수 Ver. 2, Math.ceil() !!NOT WORKING!!
            // $('#percent1').text(Math.ceil(result['data'][0]['totalFirstCnt'] / 516255.61)+ "%")
            // $('#person1T').text("누적 " + result['data'][0]['totalFirstCnt'] + "명")
            // $('#person1N').text("신규 " + result['data'][0]['firstCnt'] + "명").append(img)
            // $('#percent2').text(Math.ceil(result['data'][0]['totalSecondCnt'] / 516255.61)+ "%")
            // $('#person2T').text("누적 " + result['data'][0]['totalSecondCnt'] + "명")
            // $('#person2N').text("신규 " + result['data'][0]['secondCnt'] + "명").append(img)
            // $('#percent3').text(Math.ceil(result['data'][0]['totalThirdCnt'] / 516255.61)+ "%")
            // $('#person3T').text("누적 " + result['data'][0]['totalThirdCnt'] + "명")
            // $('#person3N').text("신규 " + result['data'][0]['thirdCnt'] + "명").append(img)

            // 소수점 자릿수 설정하는 함수 Ver. 3, toString() & replace() !!WORKING!!
            const n11 = result['data'][0]['totalFirstCnt'];
            const n12 = result['data'][0]['firstCnt'];
            const n21 = result['data'][0]['totalSecondCnt'];
            const n22 = result['data'][0]['secondCnt'];
            const n31 = result['data'][0]['totalThirdCnt'];
            const n32 = result['data'][0]['thirdCnt'];
            const cn11 = n11.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            const cn12 = n12.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            const cn21 = n21.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            const cn22 = n22.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            const cn31 = n31.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            const cn32 = n32.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            $('#percent1').text(Math.ceil(result['data'][0]['totalFirstCnt'] / 516255.61)+ "%")
            $('#person1T').text("누적 " + cn11 + "명")
            $('#person1N').text("신규 " + cn12 + "명").append(img)
            $('#percent2').text(Math.ceil(result['data'][0]['totalSecondCnt'] / 516255.61)+ "%")
            $('#person2T').text("누적 " + cn21 + "명")
            $('#person2N').text("신규 " + cn22 + "명").append(img)
            $('#percent3').text(Math.ceil(result['data'][0]['totalThirdCnt'] / 516255.61)+ "%")
            $('#person3T').text("누적 " + cn31 + "명")
            $('#person3N').text("신규 " + cn32 + "명").append(img)
        },
        error: function() {
            alert('Open API(예방접종 현황)가 끌려오지 않습니다!')
        }
    });
})