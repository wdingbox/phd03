$(function() {
  var host = location.host;
  if (host.endsWith('chinaservicesinfo.com')) {
    if ($('#beian')) {
      $('#beian').attr('title', '京ICP备06023331号-6');
      $('#beian').html('京ICP备06023331号-6');
    }
    if ($('#wangan')) {
      $('#wangan').attr('title', '京公网安备 11010502049590号');
      $('#wangan').html('京公网安备 11010502049590号');
      $('#wangan').attr('href', 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502049590');
    }
  }
})