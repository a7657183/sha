export function tmap() {
  return new Promise(function(resolve, reject) {
    /* eslint-disable */
    window.init = function() {
      resolve(qq);
    };
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'http://map.qq.com/api/js?v=2.exp&callback=init&key=UJPBZ-OPSW4-VPBUM-DE2AH-CS7Q2-SOBVR';
    script.onerror = reject;
    document.head.appendChild(script);
    /* eslint-disable */
  });
}
